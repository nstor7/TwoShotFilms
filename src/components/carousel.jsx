import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Limpieza al desmontar
  }, [images]);

  // Manejar clic en los puntos
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.Carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className={styles.carouselItem} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* <div className={styles.carouselDots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;