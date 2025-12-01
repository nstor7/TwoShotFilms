import Rutas from './rutas.jsx'
import { BrowserRouter} from 'react-router-dom'
import Header from './header.jsx'
import Footer from './footer.jsx'


function App() {


  return (
    <BrowserRouter>
      <Header></Header>
      <Rutas></Rutas>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
