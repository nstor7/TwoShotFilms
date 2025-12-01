import { useParams } from 'react-router'
import Trabajos from '../DB/trabajos'
import style from './video.module.css'
import { FaYoutube } from 'react-icons/fa'
import { useState } from 'react'

const video = ()=>{
    const { vinculo } = useParams()
    const Trabajo = Trabajos.find(Trabajo => Trabajo.vinculo === vinculo)
    function abrirvideo(){
        setEstado(!activo)
    }
    const [activo, setEstado] = useState(false)

    return(
        <div className={style.proyecto} >
            
            <div className={style.proyectoInfo} >
                <h1>{Trabajo.Titulo} </h1>
                <p className={style.proyectoInfoSub} > <i>{Trabajo.SubTitulo}</i> </p>
                <aside>
                    <p>{Trabajo.Genero} </p> 
                    <p>{Trabajo.cliente} </p>
                </aside>
                <p>{Trabajo.Descripcion} </p>

            </div>
            <div className={style.proyectoPlayer} onClick={abrirvideo} >
                <div className={style.proyectoPlayerCover}>
                     <FaYoutube />
                </div>
                <img src={Trabajo.Thumnail} alt="" className={style.proyectoPlayerImagen}  />
            </div>
            <Player 
            trabajo={Trabajo}
            activo={activo}
            abrirvideo={abrirvideo}
            />
            
        </div>
    )
}

const Player =({activo, trabajo, abrirvideo})=>{

    var className = (activo) ? style.proyectoVideoActivo : style.proyectoVideo

    return(
        <div className={className}>
            <p onClick={abrirvideo} >Cerrar</p>
             <iframe  src={trabajo.video} >
            </iframe>
        </div>
       
    )
}

export default video