import { Link } from 'react-router-dom';
import {Servicios} from '../DB/servicios.js'; // Array de servicios
import Trabajos from '../DB/trabajos.js'; // Array de trabajos
// import ServiceForm from './ServiceForm'; // Formulario reutilizable
import styles from './inicio.module.css';
import SocialLinks from '../components/SocialLinks.jsx';
import PortfolioItem from '../components/portfolioItem.jsx';
import Carousel from '../components/carousel.jsx';

const Inicio = () => {
  // Seleccionamos algunos trabajos destacados (ej. los primeros 3)
  const featuredWorks = Trabajos.slice(0, 3);
  var images= []
  Trabajos.map(Trabajo => images.push(Trabajo.Thumnail))

  return (
    <main className={styles.homePage}>
      <Carousel images ={images} />
      {/* Hero Section */}
      <section className={`hero ${styles.hero}`}>
        
        <div className="hero-content">
          <h1>Two Shot Films</h1>
          <p className='SubTitulo'>Transformamos tus ideas en historias cinematográficas</p>
          <Link to="/#contacto" className='btn btnNegativo'>Cotiza tu Video</Link>
        </div>
      </section>

      {/* Servicios */}
      <section className={styles.servicesSection}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {Servicios.map(servicio => (
            <Link
              key={servicio.id}
              to={`servicios/${servicio.id}`}
              className={`${styles.serviceCard} card`}
            >
              <h3>{servicio.h1.split(" en Panamá")[0]}</h3>
              <p>{servicio.subtitulo}</p>
            </Link>
          ))}
        </div>
        <Link to="/servicios" className="btn btnPositivo">Ver Todos los Servicios</Link>
      </section>
      <div className={styles.descripcion}>
                <h2>Producción Audiovisual en Panamá</h2>
                <p>Somos una empresa de producción audiovisual especializada en transformar la identidad de tu marca a través del poder de la cinematografía.</p>

<p> En nuestra productora audiovisual, nos dedicamos a crear contenidos visuales que destacan por su calidad cinematográfica y narrativa impactante. Trabajamos principalmente con:</p>
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
            <PortfolioItem key={index} trabajo={trabajo} />
          ))}
        </div>
        <Link to="/portfolio" className="btn btnPositivo">Explora Nuestro Portafolio</Link>
      </section>

      {/* Formulario de Contacto */}
      <section className={styles.contactSection}>
        <h2>Contáctanos</h2>
        {/* <ServiceForm /> */}
      </section>
    </main>
  );
};

export default Inicio;