import { Link, useParams } from 'react-router'
import { Servicios } from '../DB/servicios.js';
import style from './servicio.module.css';
import Trabajos from '../DB/trabajos.js';
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
            <img src={Service.hero} className={style.heroImagen} alt="" />
            <div className={style.heroContenido}>
              <h1>{Service.nombre}</h1>
              <p>{Service.subtitulo}</p>
              <Boton key= 'key' link= '#contacto' clase='btnPositivo' texto='Reserva tu Fecha' />
            </div>
          </section>
          <div className={style.servicioDescripcion} >
            <p>{Service.descripcion}</p>
          </div>
          <section className={style.ventajas}>
            <h2 className={style.ventajasTitulo} >¿Por Qué Elegirnos?</h2>
            <div className={style.ventajasCuerpo} >
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
            </div>

             
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
        </div>
    </>
  );
};

export default Servicio;