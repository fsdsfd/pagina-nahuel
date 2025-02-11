import { useContext, useEffect, useState } from "react"
import ProductosContext from "../context/ProductosContext"
import DragDrop from "./DragDrop/DragDrop"
const Formulario = () => {

  /* Creamos 2 estados para gestionar el drag and drop */
  const [foto, setFoto] = useState('')
  const [srcImagen, setSrcImagen] = useState('')
  const [foto2, setFoto2] = useState('')
  const [srcImagen2, setSrcImagen2] = useState('')
  const [foto3, setFoto3] = useState('')
  const [srcImagen3, setSrcImagen3] = useState('')

  const formInit = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    foto2: '',
    foto3: '',
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
    e.preventDefault()
    console.log('handleSubmit')

    try {

      if ( form.id === null ) {
        console.log('Creando un producto')
        const productoNuevoConImagen = {...form, ...foto, ...foto2, ...foto3}
        await crearProductoContext(productoNuevoConImagen)
      } else {
        console.log('Actualizando producto')
        const productoEditadoConImagen = {...form, ...foto, ...foto2, ...foto3}
        await actualizarProductoContext(productoEditadoConImagen)
      }
      handleReset()
      
    } catch (error) {
      console.error('[handleSubmit]', error)
    }

  }

  const handleChange = e => {
    //console.log(e.target.name)
    //console.log(e.target.value)
    //console.log(e.target.checked)
    //console.log(e.target.type)
    const { type, name, checked, value } = e.target

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })

  }

  const handleReset = () => {
    console.log('handleReset')
    setForm(formInit)
    setFoto('')
    setSrcImagen('')
    setFoto2('')
    setSrcImagen2('')
    setFoto3('')
    setSrcImagen3('')
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
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input 
            type="text" 
            name="stock" 
            id="lbl-stock" 
            value={form.stock} 
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input 
            type="text" 
            name="marca" 
            id="lbl-marca" 
            value={form.marca} 
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría</label>
          <input 
            type="text" 
            name="categoria" 
            id="lbl-categoria" 
            value={form.categoria} 
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input 
            type="text" 
            name="detalles" 
            id="lbl-detalles" 
            value={form.detalles} 
            onChange={handleChange} />
        </div>
        {/* <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input 
            type="text" 
            name="foto" 
            id="lbl-foto" 
            value={form.foto} 
            onChange={handleChange} />
        </div> */}

        <DragDrop setFoto={setFoto} srcImagen={srcImagen} setSrcImagen={setSrcImagen} />
        <DragDrop setFoto={setFoto2} srcImagen={srcImagen2} setSrcImagen={setSrcImagen2} />
        <DragDrop setFoto={setFoto3} srcImagen={srcImagen3} setSrcImagen={setSrcImagen3} />

        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input 
            type="checkbox" 
            name="envio" 
            id="lbl-envio" 
            checked={form.envio} 
            onChange={handleChange} />
        </div>

        <button type="submit">Guardar</button>
        <button type="reset" onClick={handleReset}>Limpiar</button>

      </form>
    
    </>
  )
}

export default Formulario