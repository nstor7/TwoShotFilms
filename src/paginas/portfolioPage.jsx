import Trabajos from '../DB/trabajos.js';
import PortfolioItem from '../components/card.jsx';
import styles from './portfolioPage.module.css';
import Carousel from '../components/carousel.jsx';
import Card from '../components/card.jsx'
const PortfolioPage = () => {
  return (
    <main className={styles.portfolioPage}>
      <section className={styles.hero} >
        <img src="images/Instinto_Thumnail.jpg" alt="" className={styles.heroImagen} />
        <div className={styles.heroContenido} >
          <h1>Portafolio</h1>
          <p>Nuestros trabajos más destacados</p>
        </div>
      </section>
      <section className={styles.portfolio}>
        <div className={styles.portfolioGrid}>
          {Trabajos.map((trabajo, index) => (
            <Card vinculo={trabajo.vinculo} 
            titulo={trabajo.Titulo} 
            cuerpo={trabajo.SubTitulo} 
            imagen={trabajo.Thumnail}/>
          ))}
        </div>
      </section>
      
    </main>
  );
};

export default PortfolioPage;