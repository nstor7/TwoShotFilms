import { useParams } from 'react-router'
import Servicios from '../DB/servicios.js';
import style from './servicio.module.css';


const Servicio = () => {
    const { id } = useParams()
    var servicio = Servicios.find(servicio => servicio.id === id)
  return (
    <>
        <div key={servicio.id} className={style.serviceSection}>
          <section className="hero">
            <div className="hero-content">
              <h1>{servicio.h1}</h1>
              <p>{servicio.subtitulo}</p>
              <a href="#contacto" className="btn">Reserva tu Fecha</a>
            </div>
          </section>

          <section className={style.benefits}>
            <h2>¿Por Qué Elegirnos?</h2>
            <div className={style.benefitsContainer}>
              {servicio.porQueElegirnos.map((beneficio, index) => (
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
              {servicio.paquetes.map((paquete, index) => (
                <div key={index} className={style.packageCard}>
                  <h3>{paquete.nombre} - ${paquete.precio}</h3>
                  <ul>
                    {paquete.detalles.map((detalle, i) => (
                      <li key={i}>{detalle}</li>
                    ))}
                  </ul>
                  <a href="#contacto" className="btn">Cotiza Ahora</a>
                </div>
              ))}
            </div>
          </section>

          <section className={style.portfolio}>
            <h2>Muestras de Nuestro Trabajo</h2>
            <div className={style.portfolioContainer}>
              {servicio.muestras.map((muestra, index) => (
                <div key={index} className={style.portfolioItem}>
                  {muestra.tipo === "video" ? (
                    <video controls>
                      <source src={muestra.src} type="video/mp4" />
                      {muestra.descripcion}
                    </video>
                  ) : (
                    <img src={muestra.src} alt={muestra.descripcion} />
                  )}
                  <p>{muestra.descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={style.testimonials}>
            <h2>Lo Que Dicen Nuestros Clientes</h2>
            <div className={style.testimonialsContainer}>
              {servicio.testimonios.map((testimonio, index) => (
                <div key={index} className={style.testimonialItem}>
                  <p>"{testimonio.texto}"</p>
                  <h4>– {testimonio.autor}</h4>
                </div>
              ))}
            </div>
          </section>

          <section className={style.process}>
            <h2>Nuestro Proceso es Simple</h2>
            <div className="process-container">
              {servicio.proceso.map((paso, index) => (
                <div key={index} className={style.processItem}>
                  <h3>{paso.paso}</h3>
                  <p>{paso.descripcion}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={style.upsell}>
            <h2>{servicio.upsell.h2}</h2>
            <p>{servicio.upsell.texto}</p>
            <a href="#" className="btn">{servicio.upsell.cta}</a>
          </section>

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