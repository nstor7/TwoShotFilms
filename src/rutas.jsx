import {Routes, Route, Router} from 'react-router'
import Inicio from './paginas/inicio.jsx'
import Servicio from './paginas/servicio.jsx'
import Servicios from './paginas/servicios.jsx'
import PortfolioPage from './paginas/portfolioPage.jsx'
 function Rutas(){
  return(
    
    <Routes>
    <Route path = '/' element= {<Inicio/>}/>
    <Route path = '/servicios/:id' element= {<Servicio/>}></Route>
    <Route path = '/servicios' element= {<Servicios/>}></Route>
    <Route path = '/portfolio' element= {<PortfolioPage/>}></Route>
  </Routes>
  )
}

export default Rutas