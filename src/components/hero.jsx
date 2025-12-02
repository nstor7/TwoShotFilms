import style from './hero.module.css'

const Hero = ({Imagen, Titulo, SubTitulo})=>{
    return(
        <section  className={style.hero}>
                <img className={style.heroImagen} src={Imagen} alt="" />
                <div className={style.heroContenido}>
                    <h1>{Titulo}</h1>
                    <p>{SubTitulo}</p>
                </div>
            </section>
    )
}


export default Hero