import { Servicios } from '../DB/servicios.js';
import style from './servicios.module.css';
import Carousel from '../components/carousel.jsx';
import Trabajos from '../DB/trabajos.js';

const serviciosPagina = () => {
  var images = []
  Trabajos.map(Trabajo => images.push(Trabajo.Thumnail))
  return (
    <>
      <Carousel images={images}/>
      <section id="inicio" class="hero">
        <div className="hero-content">
            <h1>Servicios Audiovisuales en Panamá</h1>
            <p>Desde cobertura de eventos hasta videos corporativos, ofrecemos soluciones profesionales para tus necesidades.</p>
            <a href="#servicios" class="btn btnNegativo">Explora Nuestros Servicios</a>
        </div>
    </section>
      <section id="servicios" className={style.servicesList}>
        <h2>Nuestros Servicios</h2>
        <div className={style.servicesContainer}>
          {Servicios.map(servicio => (
            <div key={servicio.id} className={style.serviceCard}>
              <h3>{servicio.h1}</h3>
              <p>{servicio.subtitulo}</p>
              <p className={style.price}>Desde ${servicio.paquetes[0].precio}</p>
              <a href={`/servicios/${servicio.id}`} className="btn btnPositivo">Ver Detalles</a>
            </div>
          ))}
        </div>
      </section>
      <section id="contacto" className={style.contact}>
        <h2>Contáctanos Hoy</h2>
        <form>
            <input type="text" placeholder="Nombre" required/>
            <input type="tel" placeholder="Teléfono" required/>
            <input type="email" placeholder="Email" required/>
            <button type="submit" class="btn">Enviar Consulta</button>
        </form>
        <p>O escríbenos al <a href="https://wa.me/50712345678">WhatsApp</a></p>
    </section>

    </>
  )
}

export default serviciosPagina