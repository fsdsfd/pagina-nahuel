import React, { useContext } from 'react'
import Card from '../components/Card';
import useTitulo from '../hooks/useTitulo';
import ProductosContext from '../context/ProductosContext';

const Hornos = () => {
    const { productos } = useContext(ProductosContext)
    //console.log(productos)
  
    useTitulo('Hornos')
    const productosFiltrados = (productos || []).filter(
      (p) => p.categoria === "hornos"
    );
  return (
    <main>

    <section className="section-cards">
      <header className="section-cards__header">
        <h1 className='section-cards__header__h1'>Catálogo de hornos</h1>
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

export default Hornos