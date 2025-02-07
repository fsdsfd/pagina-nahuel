import React, { useContext } from 'react'
import Card from '../components/Card';
import useTitulo from '../hooks/useTitulo';
import ProductosContext from '../context/ProductosContext';

const Freidoras = () => {
    const { productos } = useContext(ProductosContext)
    //console.log(productos)
  
    useTitulo('Freidoras')
    const productosFiltrados = (productos || []).filter(
      (p) => p.categoria === "freidoras"
    );
  return (
    <main>

    <section className="section-cards">
      <header className="section-cards__header">
        <h1 className='section-cards__header__h1'>Catálogo de freidoras</h1>
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

export default Freidoras