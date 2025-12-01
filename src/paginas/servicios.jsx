import { Servicios } from '../DB/servicios.js';
import style from './servicios.module.css';
import Carousel from '../components/carousel.jsx';
import Trabajos from '../DB/trabajos.js';
import Card from '../components/card.jsx'
import boton from '../components/boton.jsx';

const serviciosPagina = () => {
  var images = []
  Trabajos.map(Trabajo => images.push(Trabajo.Thumnail))
  return (
    <>
      <section id="inicio" className={style.hero}>
        <img className={style.heroImagen} src="images/Thumnail_Docu_Charpentier.jpg" alt="" />
        <div className={style.heroContenido}>
            <h1>Servicios Audiovisuales en Panamá</h1>
            <p>Desde cobertura de eventos hasta videos corporativos, ofrecemos soluciones profesionales para tus necesidades.</p>
        </div>
    </section>
      <section id="servicios" className={style.servicesList}>
        <h2>Nuestros Servicios</h2>
        <div className={style.servicesContainer}>
          {Servicios.map(servicio => (
            <Card imagen={servicio.hero}
            vinculo={servicio.id}
            titulo={servicio.nombre}
            cuerpo={servicio.subtitulo} 

            />
            // <div key={servicio.id} className={style.serviceCard}>
            //   <h3>{servicio.nombre}</h3>
            //   <p>{servicio.subtitulo}</p>
            //   <p className={style.price}>Desde ${servicio.paquetes[0].precio.minimo}</p>
            //   <a href={`/servicios/${servicio.id}`} className="btn btnPositivo">Ver Detalles</a>
            // </div>
          ))}
        </div>
      </section>
      {/* <section id="contacto" className={style.contact}>
        <h2>Contáctanos Hoy</h2>
        <form>
            <input type="text" placeholder="Nombre" required/>
            <input type="tel" placeholder="Teléfono" required/>
            <input type="email" placeholder="Email" required/>
            <button type="submit" class="btn">Enviar Consulta</button>
        </form> */}
        {/* <p>O escríbenos al <a href="https://wa.me/50712345678">WhatsApp</a></p>
    </section> */}

    </>
  )
}

export default serviciosPagina