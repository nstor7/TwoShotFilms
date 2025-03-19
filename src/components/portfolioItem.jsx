import styles from './portfolioItem.module.css';

const PortfolioItem = ({ trabajo }) => {
  return (
    <div className={`${styles.portfolioItem} card`}>
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
      {trabajo.SubTitulo && <p>{trabajo.SubTitulo}</p>}
      <p>{trabajo.Genero} – {trabajo.cliente}</p>
    </div>
  );
};

export default PortfolioItem;