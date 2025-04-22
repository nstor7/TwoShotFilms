import {Routes, Route, Router} from 'react-router'
import Inicio from './paginas/inicio.jsx'
import Servicio from './paginas/servicio.jsx'
import ServiciosPagina from './paginas/servicios.jsx'
import PortfolioPage from './paginas/portfolioPage.jsx'
import Categoria from './paginas/serviciosCategoria.jsx'
 function Rutas(){
  return(
    
    <Routes>
    <Route path = '/' element= {<Inicio/>}/>
    <Route path = '/servicios/:id' element= {<Servicio/>}></Route>
    <Route path = '/servicios' element= {<ServiciosPagina/>}></Route>
    <Route path = '/portfolio' element= {<PortfolioPage/>}></Route>
    <Route path = '/:categoria' element={<Categoria/>}></Route>
  </Routes>
  )
}

export default Rutas