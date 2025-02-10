import { useContext, useState } from 'react'

import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'
import { Link } from 'react-router-dom'

const Inicio = () => {
  const [hover, setHover] = useState(false);

  const { productos } = useContext(ProductosContext)

  //console.log(productos)

  useTitulo('Inicio')
  
  return (
    <main className='main-inicio'>
            <div className='img-principal-container'>
            <img src="/stock/fondo-pagina.gif" alt="" className='img-principal-container__img'/>
            <div className='img-principal-container__h1-container'>
            <h1 className='img-principal-container__h1-container__h1'>Romper los límites de la excelencia es el alma de [Nombre de tu empresa], fusionando arte, tecnología e innovación para transformar cada experiencia.</h1>
            </div>
            </div>
      <div >
      <div className='img-container'>
        <img src="/stock/fondo-cocina.jpg" alt="" className='img-container__img'/>
        <div className='img-container__div'>
        <img src="/stock/circles.png" alt="" className='img-container__div__circles'/>
        <div>
        <h1 className='img-container__div__h1'>Cocinas</h1>
        <Link to='/cocinas' className='img-container__div__link'>         
        <p className={`img-container__div__boton ${hover ? "negrita" : ""}`} 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >VER MÁS</p>
              <img
        src="/svg-icons/fast.svg" 
        alt=""
        className={`img-container__div__img ${hover ? "mostrar" : ""}`}
      />
        </Link>
        </div>
        <div className='img-container__div__p-container'> 
        <p className='img-container__div__p-container__p'>Diseño eficaz. El trabajo de ingeniería nos permite incorporar un diseño interior que logra brindar un calor equilibrado y envolvente en toda la superficie. Estas cocinas son una verdadera obra de arte que lideran un mercado de calidad.
</p>

        </div>
        </div>


        </div>

      </div>
      <div >
      <div className='img-container'>
        <img src="/stock/fondo-hornos.jpg" alt="" className='img-container__img'/>
        <div className='img-container__div'>
        <img src="/stock/circles.png" alt="" className='img-container__div__circles'/>

          <div>
          <h1 className='img-container__div__h1'>Hornos</h1>
        <Link to='/hornos' className='img-container__div__link'>         
        <p className={`img-container__div__boton ${hover ? "negrita" : ""}`} 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >VER MÁS</p>
              <img
        src="/svg-icons/fast.svg" 
        alt=""
        className={`img-container__div__img ${hover ? "mostrar" : ""}`}
      />
        </Link>
          </div>
    
          <div className='img-container__div__p-container'> 
        <p className='img-container__div__p-container__p'>Pensados para generar espacio y comodidad. Damos un paso al frente con la nueva gama de hornos y anafes caracterizados por ser una revolución a nivel de diseño e integración total en la cocina.
</p>

        </div>
        </div>


        </div>

      </div>
      <div >
      <div className='img-container'>
        <img src="/stock/fondo-freidora.jpg" alt="" className='img-container__img'/>
        <div className='img-container__div'>
        <img src="/stock/circles.png" alt="" className='img-container__div__circles'/>

          <div>
          <h1 className='img-container__div__h1'>Freidoras</h1>
        <Link to='/freidoras' className='img-container__div__link'>         
        <p className={`img-container__div__boton ${hover ? "negrita" : ""}`} 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >VER MÁS</p>
              <img
        src="/svg-icons/fast.svg" 
        alt=""
        className={`img-container__div__img ${hover ? "mostrar" : ""}`}
      />
        </Link>
          </div>
          <div className='img-container__div__p-container'> 
        <p className='img-container__div__p-container__p'>Nuestras freidoras están diseñadas con la más alta tecnología para garantizar un rendimiento excepcional en cada uso. Gracias a su eficiencia energética y sistema de cocción avanzado, logran frituras crujientes y uniformes con un menor consumo de aceite, lo que las hace más saludables y económicas. 
</p>

        </div>
        </div>


        </div>

      </div>
      <div >
      <div className='img-container'>
        <img src="/stock/fondo-anafes.jpg" alt="" className='img-container__img'/>
        <div className='img-container__div'>
        <img src="/stock/circles.png" alt="" className='img-container__div__circles'/>

       <div>
       <h1 className='img-container__div__h1'>Anafes</h1>
        <Link to='/anafes' className='img-container__div__link'>         
        <p className={`img-container__div__boton ${hover ? "negrita" : ""}`} 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >VER MÁS</p>
              <img
        src="/svg-icons/fast.svg" 
        alt=""
        className={`img-container__div__img ${hover ? "mostrar" : ""}`}
      />
        </Link>
       </div>
       <div className='img-container__div__p-container'> 
        <p className='img-container__div__p-container__p'>Nuestros anafes combinan potencia y eficiencia para ofrecer una cocción rápida y uniforme, adaptándose a cualquier tipo de cocina. Su diseño moderno y resistente garantiza durabilidad, mientras que su fácil mantenimiento los convierte en una opción práctica y confiable.
</p>

        </div>
        </div>


        </div>

      </div>

      {/* <section className="section-cards">
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

      </section>  */}
    </main>
  )
}

export default Inicio