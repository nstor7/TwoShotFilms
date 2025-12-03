import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Servicios} from './DB/servicios';
import styles from './header.module.css';
import Social from './components/SocialLinks'
import { FaBars }  from 'react-icons/fa'

const Header = () => {
  var [visible, setVisible] = useState(false)

  var mostrarMenu = ()=>{
    setVisible(!visible)
  }
  

  var  classNameSocial = visible ? styles.social : styles.socialNone
  var classNameNav = visible ? styles.navList :  styles.navListNone 
    return (
    <header className={styles.header}>
      <div className={styles.logo}><img className={styles.logo} src="/images/Logo TwoShot.png" alt="" /></div>
      <nav className={styles.nav}>
        <ul className={classNameNav}>
          <li><NavLink to="/" className={styles.navLink} >Inicio</NavLink></li>
          <li><NavLink to="/servicios" className={styles.navLink} >Servicios</NavLink></li>
          
          <li><NavLink to="/portfolio" className={styles.navLink} >Portafolio</NavLink></li>
        </ul>
      </nav>
      <div className={classNameSocial} > <Social /></div>
     <div className={styles.bars} onClick={mostrarMenu}> <FaBars /> </div>
    </header>
  );
};

export default Header;