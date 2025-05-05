import { useContext, useEffect, useState } from 'react'

import './Cocinas.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import { useParams } from 'react-router'
import { helperPeticionesHttp } from '../helpers/helper-peticiones-http'

const Cocinas = () => {

  // const { productos } = useContext(ProductosContext)
  //console.log(productos)
  const [productos, setProductos] = useState(null)

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const getAllProductos = async () => {

        try {

            const prods = await helperPeticionesHttp(url, {})
            console.log('Productos recibidos:', prods);
            // console.log(prods)
            setProductos(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }
    getAllProductos()
  })
  useTitulo('Cocinas')
  const productosFiltrados = (productos || []).filter(
    (p) => p.categoria === "cocinas"
  );
  return (
    <main>

      <section className="section-cards">
        <header className="section-cards__header">
          <h1 className='section-cards__header__h1'>Catálogo de cocinas</h1>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productosFiltrados.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
          
          
        </div>

      </section> 
    </main>
  )
}

export default Cocinas