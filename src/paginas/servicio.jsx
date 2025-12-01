import { Link, useParams } from 'react-router'
import { Servicios } from '../DB/servicios.js';
import style from './servicio.module.css';
import PortfolioItem from '../components/card.jsx';
import Trabajos from '../DB/trabajos.js';
import Carousel from '../components/carousel.jsx';
import boton from '../components/boton.jsx';
import Boton from '../components/boton.jsx';


const Servicio = () => {
    const { id } = useParams()
    const Service = Servicios.find(Servicio => Servicio.id === id)
    const featuredWorks = Trabajos.filter(Trabajo => Trabajo.Genero === Service.Genero).slice(0, 3)
    var images = []
    featuredWorks.map(Trabajo => images.push(Trabajo.Thumnail))

  return (
    <>
        <div key={Service.id} className={style.serviceSection}>
          <section className={style.hero}>
            <img src={Service.hero} className={style.heroImage} alt="" />
            <div className={style.heroContent}>
              <h1>{Service.nombre}</h1>
              <p>{Service.subtitulo}</p>
              <Boton key= 'key' link= '#contacto' clase='btnPositivo' texto='Reserva tu Fecha' />
              {/* <a href="#contacto" className="btn  btnNegativo">Reserva tu Fecha</a> */}
            </div>
          </section>
          <div className={style.servicioDescripcion} >
            <p>{Service.descripcion}</p>
          </div>
          <section className={style.ventajas}>
            <h2 className={style.ventajasTitulo} >¿Por Qué Elegirnos?</h2>

              {Service.ventajas.map((ventaja, index) => (
              <>
                <img src={ventaja.imagen} className={style.ventajaImagen} alt="" />
                <div key={index} className={style.ventajaContenido}>
                  <h3>{ventaja.titulo}</h3>
                  <p>{ventaja.descripcion}</p>
                  <p><i>{ventaja.inspiracional} </i></p>
                </div>  
              </>
                
              ))}
          </section>

          <section className={style.paquetes}>
            <h2>Nuestros Paquetes</h2>
              {Service.paquetes.map((paquete, index) => (
                <div key={index} className={style.paquete}>
                  <div className={style.paqueteCabeza}>
                    <img src={paquete.imagen} className={style.paqueteCabezaImagen} alt="" />
                    <div className={style.paqueteCabezaInfo}>
                      <h3>{paquete.nombre}</h3>
                      <p>{paquete.subtitulo} </p>
                    </div>
                  </div>
                  <div className={style.paqueteCuerpo}>
                    <div className={style.paqueteCuerpoObjetivo}>
                      <h3>Lograrás</h3>
                      <ul>
                        {paquete.objetivos.map((objetivo, i) => (
                          <li key={i}>{objetivo}</li>
                        ))}
                      </ul>
                      
                    </div>
                    <div className={style.paqueteCuerpoIncluye}>
                      <h3>Plan Básico Incluye</h3>
                      <ul>
                        {paquete.incluye.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                      </ul>
                    </div>
                    <div className={style.paqueteCuerpoNoIncluye} >
                      <h3>Adicionales</h3>
                      <ul>
                          {paquete.noIncluye.map((contra, i) => (
                          <li key={i}>{contra}</li>
                        ))}
                      </ul>
                    </div>
                  </div>  
                    
                  
                  <div className={style.paquetePie}>
                    <p>Costo entre:</p>
                    <p>{paquete.precio.minimo} y ${paquete.precio.maximo}</p>
                    <Boton link='#contacto' texto='Cotiza Ahora' />
                  </div>
                </div>
              ))}

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

          {/* <section id="contacto" className={style.contact}>
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
          </section> */}
        </div>
    </>
  );
};

export default Servicio;