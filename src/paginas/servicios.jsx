import { Servicios } from '../DB/servicios.js';
import style from './servicios.module.css';
import Card from '../components/card.jsx'
import Hero from '../components/hero.jsx';

const serviciosPagina = () => {
  return (
    <>
      <Hero 
        Imagen = "images/Thumnail_Docu_Charpentier.jpg"
        Titulo='Servicios Audiovisuales en Panamá'
        SubTitulo= 'Desde cobertura de eventos hasta videos corporativos, ofrecemos soluciones profesionales para tus necesidades.'
      />
      
      <section id="servicios" className={style.servicesList}>
        <h2>Nuestros Servicios</h2>
        <div className={style.servicesContainer}>
          {Servicios.map(servicio => (
            <Card imagen={servicio.hero}
            vinculo={servicio.id}
            titulo={servicio.nombre}
            cuerpo={servicio.subtitulo} 
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default serviciosPagina