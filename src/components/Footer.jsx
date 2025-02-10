import { Link } from 'react-router-dom'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer-main">
      <p className='footer-p'>[Nombre de la empresa]</p>
      <hr className='footer-hr'/>
      <div className='vinculos-container'>
        <Link to='/garantia'>
        <p className='vinculos-container__p'>Garantía</p>

        </Link>
        <Link to='/cuidado'>
        <p className='vinculos-container__p'>Cuidados del producto</p>

        </Link>
        <Link to='/terminos'>
        <p className='vinculos-container__p'>Términos y condiciones</p>

        </Link>
        <Link to='/q&a'>
        <p className='vinculos-container__p'>Preguntas frecuentes</p>
        </Link>
      </div>
      <div className='contactos-container'>
        <p className='contactos-container__p'>tiendaluxorgas@gmail.com</p>
        <p className='contactos-container__p'>+54 9 11 3853-2121</p>
      </div>
      <div className='horarios-container'>
      <p  className='horarios-container__p'>
       <strong>Horarios de atención: </strong> Lunes a Viernes de 10:30 a 18:00 / Sábados de 10:00 a 13:00
        </p>
      <p className='horarios-container__p'>España 945 - Rosario - Santa Fe</p>
      </div>
    </footer>
  )
}

export default Footer