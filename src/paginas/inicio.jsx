import { Link } from 'react-router-dom';
import {Servicios} from '../DB/servicios.js'; // Array de servicios
import Trabajos from '../DB/trabajos.js'; // Array de trabajos
import styles from './inicio.module.css';
import Card from '../components/card.jsx';
import Boton from '../components/boton.jsx';


const Inicio = () => {
  const featuredWorks = Trabajos.slice(0, 3);
  var images= []
  Trabajos.map(Trabajo => images.push(Trabajo.Thumnail))
  const ServiciosImportantes= Servicios.slice(0,3)
  return (
    <main className={styles.homePage}>
      <div className={styles.hero}>
        <img src="images/inicio_hero.jpg" alt="" className={styles.heroImagen} />
        <div className={styles.heroContenido}>
          <h1>Two Shot Films</h1>
          <p className='SubTitulo'>Transformamos tus ideas en historias cinematográficas</p>
          <Boton  texto='Cotiza tu Video' link="/#contacto" clase="btnPositivo" />
        </div>
      </div>

      <section className={styles.servicesSection}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {ServiciosImportantes.map(servicio => (
            <Card 
            key={servicio.id} 
            imagen={servicio.hero} 
            vinculo={'/servicios/'+servicio.id} 
            titulo={servicio.nombre} 
            cuerpo={servicio.subtitulo}  />
          ))}
        </div>
        <Boton link="#/servicios" texto='Ver Todos los Servicios' />
      </section>
      <div className={styles.descripcion}>
                <h2>Producción Audiovisual en Panamá</h2>
                <p>Somos una empresa de producción audiovisual especializada en transformar la identidad de tu marca a través del poder de la cinematografía.</p>

<p> En nuestra productora audiovisual nos dedicamos a crear contenidos visuales que destacan por su calidad cinematográfica y narrativa impactante. Trabajamos principalmente con:</p>
<ul>
  <li>Empresas que buscan elevar su imagen corporativa</li>
  <li>Fundaciones que necesitan comunicar su propósito de manera emotiva</li>
  <li>Artistas que desean expresar su identidad a través de una estética visual única</li>
</ul>

<p>Nuestros servicios de producción audiovisual van más allá de simplemente grabar videos. Potenciamos tu branding mediante técnicas cinematográficas avanzadas y una narrativa cuidadosamente desarrollada que conecta con tu audiencia.
La diferencia está en nuestro enfoque: convertimos tu mensaje en una experiencia visual memorable que refleja la esencia de tu marca y genera un vínculo emocional con tu público objetivo.</p>
              </div>
      {/* Portafolio */}
      <section className={styles.portfolioSection}>
        <h2>Trabajos Destacados</h2>
        <div className={styles.portfolioGrid}>
          {featuredWorks.map((trabajo, index) => (
            <Card key={index} imagen={trabajo.Thumnail} vinculo={ 'vyvuctytr7ybh7rugty8huyyu6hut8yu6bvtvgytysgntyfnhggbhbhbguhthgrttyt/portfolio/' + trabajo.vinculo} titulo={trabajo.Titulo} cuerpo={trabajo.SubTitulo}  />
          ))}
        </div>
        <Boton
        link="/portfolio"
          texto="Ver Todos los Trabajos"
        />
      </section>
    </main>
  );
};

export default Inicio;