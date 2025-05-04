import './Tabla.scss'
import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../context/ProductosContext"

const Tabla = () => {

  const { productos } = useContext(ProductosContext)
  console.log(productos)

  return (
    <table className="tabla-alta">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Detalles</th>
          <th>Foto</th>
          
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>

      {
  productos && productos.map((producto, idx) => {
    if (!producto) {
      console.warn('Producto indefinido en la lista', idx);
      return null;
    }
    return <TablaFila key={producto.id + idx} producto={producto} />;
  })
}

      </tbody>

    </table>
  )
}

export default Tabla