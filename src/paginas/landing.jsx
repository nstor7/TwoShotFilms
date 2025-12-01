
import { Link, useParams } from 'react-router'
import style from './landing.module.css'

const Landing = ()=>{
    // const { id } = useParams()
    return(
        <main className={style.containter}>
            <section className={style.specs}>
                 <img src="/images/En_Algun_Lugar_Thumnail.jpg" alt="" className={style.imagen1}/>
                <div className={style.texto1}>
                    <h2>Título de la primera sección</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita ducimus, molestias veniam corrupti voluptatibus aperiam cupiditate recusandae cum praesentium quidem quia odio, nulla consequatur voluptatum. Dolorem, nulla eum? Dolor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde dicta quidem pariatur. Dolorum incidunt eum modi aliquid quibusdam minima odio fugiat ipsum, nulla harum id itaque dignissimos iste laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo fugit magnam! Fuga hic blanditiis omnis molestias obcaecati sequi, harum dolorum minus velit officiis, cum possimus praesentium temporibus ducimus assumenda!</p>
                </div>
                <div className={style.textoCompleto}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque est dignissimos ad fugiat quae expedita ea, cumque repellat ullam a totam saepe soluta voluptatem rem non in, vero nesciunt!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, officiis corporis. Aspernatur accusantium modi corrupti officiis dolorem quibusdam quam aut ut culpa molestiae. Quidem, repellendus porro unde qui alias autem?</p>
                </div>
                <img src="/images/En_Algun_Lugar_Thumnail.jpg" alt="" className={style.imagen2} />
                <div className={style.texto2}>
                    <h2>Título de la primera sección</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita ducimus, molestias veniam corrupti voluptatibus aperiam cupiditate recusandae cum praesentium quidem quia odio, nulla consequatur voluptatum. Dolorem, nulla eum? Dolor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde dicta quidem pariatur. Dolorum incidunt eum modi aliquid quibusdam minima odio fugiat ipsum, nulla harum id itaque dignissimos iste laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo fugit magnam! Fuga hic blanditiis omnis molestias obcaecati sequi, harum dolorum minus velit officiis, cum possimus praesentium temporibus ducimus assumenda!</p>
                </div>
                <div className={style.textoCompleto}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque est dignissimos ad fugiat quae expedita ea, cumque repellat ullam a totam saepe soluta voluptatem rem non in, vero nesciunt!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, officiis corporis. Aspernatur accusantium modi corrupti officiis dolorem quibusdam quam aut ut culpa molestiae. Quidem, repellendus porro unde qui alias autem?</p>
                </div>
                <img src="/images/En_Algun_Lugar_Thumnail.jpg" alt="" className={style.imagen3} />
                <div className={style.texto3}>
                    <h2>Título de la primera sección</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam expedita ducimus, molestias veniam corrupti voluptatibus aperiam cupiditate recusandae cum praesentium quidem quia odio, nulla consequatur voluptatum. Dolorem, nulla eum? Dolor.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita unde dicta quidem pariatur. Dolorum incidunt eum modi aliquid quibusdam minima odio fugiat ipsum, nulla harum id itaque dignissimos iste laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo fugit magnam! Fuga hic blanditiis omnis molestias obcaecati sequi, harum dolorum minus velit officiis, cum possimus praesentium temporibus ducimus assumenda!</p>
                </div>
                <div className={style.textoCompleto}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque est dignissimos ad fugiat quae expedita ea, cumque repellat ullam a totam saepe soluta voluptatem rem non in, vero nesciunt!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, officiis corporis. Aspernatur accusantium modi corrupti officiis dolorem quibusdam quam aut ut culpa molestiae. Quidem, repellendus porro unde qui alias autem?</p>
                </div>
            </section>
        </main>
    )
}

export default Landing