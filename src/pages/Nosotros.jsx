import useTitulo from "../hooks/useTitulo"
import "./Nosotros.scss"
const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <div className="nosotros">
      <div className="h1-container">
        <h1 className="h1-container__h1">¿Quiénes somos?</h1>
      </div>
      <div className="p-container">
      <p className="p-container__p-princ">En Famigas, contamos con años de experiencia ofreciendo cocinas, anafes, freidoras y hornos de la más alta calidad en Santa Fe, Argentina. Nos especializamos en brindar soluciones eficientes y duraderas tanto para hogares como para negocios gastronómicos, con un compromiso inquebrantable con la innovación y el servicio al cliente. Ya sea que busques equipar tu cocina con la última tecnología o renovar tu equipo profesional, estamos aquí para asesorarte y garantizarte la mejor elección.</p>

      </div>
      <div className="p-container">
      <img src="./stock/horno-nosotros.jpg" alt="" className="p-container__img-mobile" />

      <p className="p-container__p">Lo que comenzó como un pequeño sueño, con esfuerzo, dedicación y un compromiso inquebrantable con la calidad, hoy se ha convertido en una empresa confiable y reconocida en Santa Fe, Argentina. Desde nuestros inicios, trabajamos con pasión para ofrecer cocinas, anafes, freidoras y hornos que realmente marquen la diferencia en hogares y negocios. Cada cliente que confía en nosotros es parte de esta historia de crecimiento, y por eso seguimos adelante, manteniendo los valores que nos trajeron hasta aquí: honestidad, excelencia y un servicio cercano que nos distingue.</p>
        <img src="./stock/horno-nosotros.jpg" alt="" className="p-container__img1" />
      </div>
      <div className="p-container">
      <img src="./stock/horno-nosotros2.jpg" alt="" className="p-container__img2" />

      <p className="p-container__p-end">En Famigas, creemos que la clave del éxito está en la combinación de profesionalismo, confianza y un trato cálido y cercano. Contamos con un equipo de expertos apasionados por lo que hacen, siempre dispuestos a brindar la mejor atención y asesoramiento. Cada cocina, anafe, freidora y horno que producimos lleva consigo nuestro compromiso con la calidad, el detalle y la excelencia. No solo fabricamos productos, creamos soluciones pensadas para durar, con el amor y la dedicación que nos han convertido en una empresa de referencia.</p>
      </div>
      <div className="p-container-frase">
      <p className="p-container-frase__p-italic">Cada detalle, un gesto de amor; cada producto, un compromiso con la calidad. </p>
      </div>
    </div>
  )
}

export default Nosotros