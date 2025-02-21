import { useContext, useEffect, useState } from "react"
import ProductosContext from "../context/ProductosContext"
import DragDrop from "./DragDrop/DragDrop"
import { formularioSuccess } from "./FormularioSuccess"
const Formulario = () => {

  /* Creamos 2 estados para gestionar el drag and drop */
  const [foto, setFoto] = useState([])
  const [srcImagen, setSrcImagen] = useState([])


  const formInit = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: [],
    envio: false,
  }

  const [form, setForm] = useState(formInit)

  const { crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar } = useContext(ProductosContext)

  useEffect(() => {
    if (productoAEditar) {
      setForm(productoAEditar)
      setSrcImagen(productoAEditar.foto)
    } else {
      setForm(formInit)
    }
    
    //productoAEditar ? setForm(productoAEditar) : setForm(formInit)
  }, [productoAEditar, setProductoAEditar])
  

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('handleSubmit');
    console.log("Valor de categoría antes de enviar:", form.categoria);
    try {
        const productoConImagenes = { ...form, foto }; // Agregar imágenes

        if (form.id === null) {
            console.log('Creando un producto');
            formularioSuccess('creado')
            await crearProductoContext(productoConImagenes);
        } else {
            console.log('Actualizando producto');
            formularioSuccess('actualizado')
            await actualizarProductoContext(productoConImagenes);
        }

        handleReset();
    } catch (error) {
        console.error('[handleSubmit]', error);
    }
};

  const handleChange = e => {
    //console.log(e.target.name)
    //console.log(e.target.value)
    //console.log(e.target.checked)
    //console.log(e.target.type)
    const { type, name, checked, value } = e.target
  console.log("Actualizando", name, "a", value);  // Este log te ayudará a ver qué está pasando

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })

  }

  const handleReset = () => {
    console.log('handleReset')
    setForm(formInit)
    setFoto([])
    setSrcImagen([])
    setProductoAEditar(null)
  }

  return (
    <>
      <h3>Agregar : Editar</h3>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input 
            type="text" 
            name="nombre" 
            id="lbl-nombre" 
            value={form.nombre} 
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input 
            type="text" 
            name="precio" 
            id="lbl-precio" 
            value={form.precio} 
            onChange={handleChange} />
        </div>
        {/* <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input 
            type="text" 
            name="stock" 
            id="lbl-stock" 
            value={form.stock} 
            onChange={handleChange} />
        </div> */}
        {/* <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input 
            type="text" 
            name="marca" 
            id="lbl-marca" 
            value={form.marca} 
            onChange={handleChange} />
        </div> */}
<div> 
  <label htmlFor="lbl-categoria">Categoría</label>
  <select 
    name="categoria" 
    id="lbl-categoria" 
    value={form.categoria} 
    onChange={handleChange}>
    <option value="">Selecciona una categoría</option> 
    <option value="cocinas">Cocinas</option>
    <option value="hornos">Hornos</option>
    <option value="anafes">Anafes</option>
    <option value="freidoras">Freidoras</option>
    {/* Agrega más opciones según lo necesites */}
  </select>
</div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <textarea
            type="text" 
            name="detalles" 
            id="lbl-detalles" 
            cols={30}
            rows={5}
            value={form.detalles} 
            onChange={handleChange} />
        </div>
         {/* <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input 
            type="file" 
            name="foto" 
            id="lbl-foto" 
            value={form.foto} 
            multiple='multiple'
            onChange={handleChange} />
        </div>  */}

        <DragDrop setFoto={setFoto} srcImagen={srcImagen} setSrcImagen={setSrcImagen} />
        
        {/* <DragDrop setFoto={setFoto2} srcImagen={srcImagen2} setSrcImagen={setSrcImagen2} />
        <DragDrop setFoto={setFoto3} srcImagen={srcImagen3} setSrcImagen={setSrcImagen3} /> */}

        {/* <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input 
            type="checkbox" 
            name="envio" 
            id="lbl-envio" 
            checked={form.envio} 
            onChange={handleChange} />
        </div> */}

        <button type="submit">Guardar</button>
        <button type="reset" onClick={handleReset}>Limpiar</button>

      </form>
    
    </>
  )
}

export default Formulario