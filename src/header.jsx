import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import servicios from './DB/servicios';
import styles from './header.module.css';
// {servicios.map(servicio => (
//   <li key={servicio.id}>
//     <NavLink
//       to={`/${servicio.h1.toLowerCase().replace(/\s+/g, '-')}`}
//       className={styles.navLink}
//       activeClassName={styles.active}
//     >
//       {servicio.h1.split(" en Panamá")[0]}
//     </NavLink>
//   </li>
// ))}
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Escucha el evento de scroll y actualiza el estado
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50; // Cambia a blanco después de 50px de scroll
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpieza
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>[Tu Productora]</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><NavLink to="/" className={styles.navLink} >Inicio</NavLink></li>
          <li><NavLink to="/servicios" className={styles.navLink} >Servicios</NavLink></li>
          
          <li><NavLink to="/portfolio" className={styles.navLink} >Portfolio</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;