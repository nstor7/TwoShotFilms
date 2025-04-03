import { Link } from 'react-router-dom';
import servicios from '../DB/servicios.js'; // Array de servicios
import Trabajos from '../DB/trabajos.js'; // Array de trabajos
// import ServiceForm from './ServiceForm'; // Formulario reutilizable
import styles from './inicio.module.css';
import SocialLinks from '../components/SocialLinks.jsx';

const Inicio = () => {
  // Seleccionamos algunos trabajos destacados (ej. los primeros 3)
  const featuredWorks = Trabajos.slice(0, 3);

  return (
    <main className={styles.homePage}>
      {/* Hero Section */}
      <section className={`hero ${styles.hero}`}>
        <div className="hero-content">
          <h1>Two Shot Films</h1>
          <p className='SubTitulo'>Transformamos tus ideas en historias cinematográficas</p>
          <Link to="/#contacto" className="btn">Cotiza tu Video</Link>
        </div>
      </section>

      {/* Servicios */}
      <section className={styles.servicesSection}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {servicios.map(servicio => (
            <Link
              key={servicio.id}
              to={`/${servicio.h1.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${styles.serviceCard} card`}
            >
              <h3>{servicio.h1.split(" en Panamá")[0]}</h3>
              <p>{servicio.subtitulo}</p>
            </Link>
          ))}
        </div>
        <Link to="/servicios" className="btn">Ver Todos los Servicios</Link>
      </section>

      {/* Portafolio */}
      <section className={styles.portfolioSection}>
        <h2>Trabajos Destacados</h2>
        <div className={styles.portfolioGrid}>
          {featuredWorks.map((trabajo, index) => (
            <div key={index} className={`${styles.portfolioCard} card`}>
              <div className={styles.media}>
                {trabajo.Thumnail ? (
                  trabajo.video ? (
                    <a href={trabajo.video.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer">
                      <img
                        src={trabajo.Thumnail}
                        alt={`${trabajo.Titulo} Thumbnail`}
                        className={styles.thumbnail}
                      />
                    </a>
                  ) : (
                    <img
                      src={trabajo.Thumnail}
                      alt={`${trabajo.Titulo} Thumbnail`}
                      className={styles.thumbnail}
                    />
                  )
                ) : (
                  <p className={styles.noMedia}>Video no disponible</p>
                )}
              </div>
              <h3>{trabajo.Titulo}</h3>
              <p>{trabajo.SubTitulo || trabajo.Genero}</p>
            </div>
          ))}
        </div>
        <Link to="/portafolio" className="btn">Explora Nuestro Portafolio</Link>
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