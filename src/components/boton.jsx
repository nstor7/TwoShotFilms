import { Link } from 'react-router'
import style from './boton.module.css'

const boton = ({ texto, link}) => {
    return(
        <Link to={link} className={style.btnNegativo}>{texto}</Link>
    )
    
}

export default boton