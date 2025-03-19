import styles from './footer.module.css';
import SocialLinks from './components/SocialLinks';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <a href="/#inicio" className={styles.footerLink}>Inicio</a> | 
          <a href="/servicios" className={styles.footerLink}>Servicios</a> | 
          <a href="/portafolio" className={styles.footerLink}>Portafolio</a> | 
          <a href="/#contacto" className={styles.footerLink}>Contacto</a>
        </p>
        <p>Tel: +507 123-4567 | Email: <a href="mailto:info@tuproductora.com" className={styles.footerLink}>info@tuproductora.com</a></p>
        <SocialLinks />
        <p>© 2025 [Tu Productora]. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;