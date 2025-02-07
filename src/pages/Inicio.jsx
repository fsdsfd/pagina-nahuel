import { useContext } from 'react'

import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import { Link } from 'react-router-dom'

const Inicio = () => {

  const { productos } = useContext(ProductosContext)

  //console.log(productos)

  useTitulo('Inicio')
  
  return (
    <main>
      <div>
      <div className='img-container'>
        <img src="/stock/fondo-cocina.png" alt="" className='img-container__img'/>
        <Link to='/cocinas'>          <h1 className='cocinas'>Cocinas</h1>
        </Link>
        </div>
        <div>
      <div className='img-container'>
        <img src="/stock/fondo-anafes.jpg" alt="" className='img-container__img'/>
        <Link to='/hornos'>          <h1 className='cocinas'>Hornos</h1>
        </Link>
        </div>

      </div>
      </div>
      <div>
      <div className='img-container'>
        <img src="/stock/fondo-cocina.png" alt="" className='img-container__img'/>
        <Link to='/freidoras'>          <h1 className='cocinas'>Freidoras</h1>
        </Link>
        </div>

      </div>
      <div>
      <div className='img-container'>
        <img src="/stock/fondo-anafes.jpg" alt="" className='img-container__img'/>
        <Link to='/anafes'>          <h1 className='cocinas'>Anafes</h1>
        </Link>
        </div>

      </div>

      <section className="section-cards">
        <header className="section-cards__header">
          <h1 className='section-cards__header__h1'>Catálogo de cocinas</h1>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
          
          
        </div>

      </section> 
    </main>
  )
}

export default Inicio