import Trabajos from '../DB/trabajos.js';
import PortfolioItem from '../components/portfolioItem.jsx';
import styles from './portfolioPage.module.css';
import Carousel from '../components/carousel.jsx';

const PortfolioPage = () => {
  var images =[]
  Trabajos.map(Trabajo=>images.push(Trabajo.Thumnail))
  return (
    <main className={styles.portfolioPage}>
      <Carousel images={images}/>
      <section className='hero'>
        <div className="hero-content ">
          <h1>Portafolio</h1>
          <p>Nuestros trabajos más destacados</p>
        </div>
      </section>
      <section className={styles.portfolio}>
        <div className={styles.portfolioGrid}>
          {Trabajos.map((trabajo, index) => (
            <PortfolioItem key={index} trabajo={trabajo} />
          ))}
        </div>
      </section>
      
    </main>
  );
};

export default PortfolioPage;