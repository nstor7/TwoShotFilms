import {useParams, Link} from 'react-router'
import { Servicios, serviciosCategorias} from '../DB/servicios'
import Trabajos from '../DB/trabajos'

const Categoria =  ()=>{
    var {categoria} = useParams()
    var servicioCategoria = serviciosCategorias.find(Categoria => Categoria.id === categoria)
    var featuredWorks = Trabajos.filter(Trabajo => Trabajo.categoria === servicioCategoria.id)
    var images =[]
    featuredWorks.map(Work => images.push(Work.Thumnail))
    return(<>
        <Carousel images={images}></Carousel>
        <section className='hero'>
            
            <div className="hero-content">
              <h1>{servicioCategoria.titulo}</h1>
              <p className='SubTitulo'>{servicioCategoria.subtitulo}</p>
              <Link to="/#contacto" className='btn btnNegativo'>Cotiza tu Video</Link>
            </div>
          </section>
        </>)
    
}

export default Categoria