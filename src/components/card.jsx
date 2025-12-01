import styles from './card.module.css';
import { Link } from 'react-router';

const PortfolioItem = ({ imagen, vinculo, titulo, cuerpo}) => {
  return (
    // <div className={`${styles.card} card`}>
    //   <div className={styles.media}>
    //     {trabajo.Thumnail ? (
    //       trabajo.video ? (
    //         <a href={trabajo.video.replace('/embed/', '/watch?v=')} target="_blank" rel="noopener noreferrer">
    //           <img
    //             src={trabajo.Thumnail}
    //             alt={`${trabajo.Titulo} Thumbnail`}
    //             className={styles.thumbnail}
    //           />
    //         </a>
    //       ) : (
    //         <img
    //           src={trabajo.Thumnail}
    //           alt={`${trabajo.Titulo} Thumbnail`}
    //           className={styles.thumbnail}
    //         />
    //       )
    //     ) : (
    //       <p className={styles.noMedia}>Video no disponible</p>
    //     )}
    //   </div>
    //   <h3>{trabajo.Titulo}</h3>
    //   {trabajo.SubTitulo && <p>{trabajo.SubTitulo}</p>}
    //   <p>{trabajo.Genero} – {trabajo.cliente}</p>
    // </div>
    <Link to={vinculo} className={styles.card} >
      <img src={imagen} className={styles.cardImagen} alt="" />
      <div className={styles.cardContenido} >
        <h3>{titulo}</h3>
        <p>{cuerpo} </p>
      </div>
    </Link>
  );
};

export default PortfolioItem;