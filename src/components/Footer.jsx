import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer-main">
      <p className='footer-p'>Famigas</p>
      <hr className='footer-hr'/>
      <div className='vinculos-container'>
        <Link to='/garantia' onClick={() => window.scrollTo(0, 0)}>
        <p className='vinculos-container__p'>Garantía</p>

        </Link>
        <Link to='/cuidado' onClick={() => window.scrollTo(0, 0)}>
        <p className='vinculos-container__p'>Cuidados del producto</p>

        </Link>
        <Link to='/terminos' onClick={() => window.scrollTo(0, 0)}>
        <p className='vinculos-container__p'>Términos y condiciones</p>

        </Link>
        <Link to='/q&a' onClick={() => window.scrollTo(0, 0)}>
        <p className='vinculos-container__p'>Preguntas frecuentes</p>
        </Link>
      </div>
      <div className='contactos-container'>
        <p className='contactos-container__p'>famigas@gmail.com</p>
        <p className='contactos-container__p'>+54 9 11 3853-2121</p>
      </div>
      <div className='horarios-container'>
      <p  className='horarios-container__p'>
       <strong>Horarios de atención: </strong> Lunes a Viernes de 8:00 a 17:00 / Sábados de 8:00 a 12:00
        </p>
      <p className='horarios-container__p'>Cafferata 3226 - Rosario - Santa Fe</p>
      </div>
    </footer>
  )
}

export default Footer