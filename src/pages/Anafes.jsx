import { useContext } from 'react'

import './Cocinas.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import { useParams } from 'react-router'

const Anafes = () => {

  const { productos } = useContext(ProductosContext)
  //console.log(productos)

  useTitulo('anafes')
  const productosFiltrados = (productos || []).filter(
    (p) => p.categoria === "anafes"
  );
  return (
    <main>

      <section className="section-cards">
        <header className="section-cards__header">
          <h1 className='section-cards__header__h1'>Catálogo de anafes</h1>
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

export default Anafes