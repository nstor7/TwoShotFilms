import Trabajos from '../DB/trabajos.js';
import styles from './portfolioPage.module.css';
import Hero from '../components/hero.jsx';
import Card from '../components/card.jsx'
const PortfolioPage = () => {
  return (
    <>
      <Hero 
        Imagen = "images/Instinto_Thumnail.jpg"
        Titulo = 'Portafolio'
        SubTitulo= 'Nuestros trabajos más destacados'
      />
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
      
    </>
  );
};

export default PortfolioPage;