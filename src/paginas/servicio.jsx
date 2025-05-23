import { Link, useParams } from 'react-router'
import { Servicios } from '../DB/servicios.js';
import style from './servicio.module.css';
import PortfolioItem from '../components/portfolioItem.jsx';
import Trabajos from '../DB/trabajos.js';
import Carousel from '../components/carousel.jsx';


const Servicio = () => {
    const { id } = useParams()
    const Service = Servicios.find(Servicio => Servicio.id === id)
    console.log(Service.Genero)
    const featuredWorks = Trabajos.filter(Trabajo => Trabajo.Genero === Service.Genero).slice(0, 3)
    var images = []
    featuredWorks.map(Trabajo => images.push(Trabajo.Thumnail))

  return (
    <>
        <div key={Service.id} className={style.serviceSection}>
          <Carousel images={images}/>
          <section className="hero">
            <div className="hero-content">
              <h1>{Service.h1}</h1>
              <p>{Service.subtitulo}</p>
              <a href="#contacto" className="btn  btnNegativo">Reserva tu Fecha</a>
            </div>
          </section>

          <section className={style.benefits}>
            <h2>¿Por Qué Elegirnos?</h2>
            <div className={style.benefitsContainer}>
              {Service.porQueElegirnos.map((beneficio, index) => (
                <div key={index} className={style.benefitItem}>
                  <h3>{beneficio.titulo}</h3>
                  <p>{beneficio.descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={style.packages}>
            <h2>Nuestros Paquetes</h2>
            <div className={style.packagesContainer}>
              {Service.paquetes.map((paquete, index) => (
                <div key={index} className={style.packageCard}>
                  <h3>{paquete.nombre} - Desde ${paquete.precio}</h3>
                  <ul>
                    {paquete.detalles.map((detalle, i) => (
                      <li key={i}>{detalle}</li>
                    ))}
                  </ul>
                  <Link href="#contacto" className="btn btnPositivo">Cotiza Ahora</Link>
                </div>
              ))}
            </div>
          </section>

          {/* <section className={style.portfolio}>
            <h2>Muestras de Nuestro Trabajo</h2>
            <div className={style.portfolioContainer}>
            {featuredWorks.map((trabajo, index) => (
            <PortfolioItem key={index} trabajo={trabajo} />
          ))}
            </div>
          </section> */}

          {/* <section className={style.testimonials}>
            <h2>Lo Que Dicen Nuestros Clientes</h2>
            <div className={style.testimonialsContainer}>
              {Service.testimonios.map((testimonio, index) => (
                <div key={index} className={style.testimonialItem}>
                  <p>"{testimonio.texto}"</p>
                  <h4>– {testimonio.autor}</h4>
                </div>
              ))}
            </div>
          </section> */}

          <section className={style.process}>
            <h2>Nuestro Proceso es Simple</h2>
            <div className="process-container">
              {Service.proceso.map((paso, index) => (
                <div key={index} className={style.processItem}>
                  <h3>{paso.paso}</h3>
                  <p>{paso.descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          {/* <section className={style.upsell}>
            <h2>{Service.upsell.h2}</h2>
            <p>{Service.upsell.texto}</p>
            <a href="#" className="btn btnNegativo">{Service.upsell.cta}</a>
          </section> */}

          <section id="contacto" className={style.contact}>
            <h2>Contáctanos Hoy</h2>
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="tel" placeholder="Teléfono" required />
              <input type="date" placeholder="Fecha del Evento" required />
              <select required>
                <option value="">Tipo de Evento</option>
                <option value="boda">Boda</option>
                <option value="conferencia">Conferencia</option>
                <option value="lanzamiento">Lanzamiento</option>
                <option value="otro">Otro</option>
              </select>
              <button type="submit" className="btn">Enviar Cotización</button>
            </form>
            <p>O escríbenos al <a href="https://wa.me/50712345678">WhatsApp</a></p>
          </section>
        </div>
    </>
  );
};

export default Servicio;