import Trabajos from '../DB/trabajos.js';
import PortfolioItem from '../components/portfolioItem.jsx';
import styles from './portfolioPage.module.css';

const PortfolioPage = () => {
  return (
    <main className={styles.portfolioPage}>
      <section className={`${styles.hero} hero slim`}>
        <div className="hero-content slim-content">
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