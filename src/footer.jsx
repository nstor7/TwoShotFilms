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
        <p>Tel: +507 6643-3692 | Email: <a href="mailto:nstor777@gmail.com" className={styles.footerLink}>nstor777@gmail.com</a></p>
        <SocialLinks />
        <p>© 2025 Two Shot Films. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;