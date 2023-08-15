import Header from './componentes/header/Header.jsx'
import Principal from './componentes/principal/Principal.jsx';
import Footer from './componentes/footer/Footer.jsx';
import Carpeta from './componentes/carpeta/Carpeta.jsx';
import Gorra from './componentes/gorra/Gorra.jsx';
import Nosotros from './componentes/nosotros/Nosotros.jsx';
import Contacto from './componentes/contacto/Contacto.jsx';
import { Routes, Route } from 'react-router-dom';
import Banco from './componentes/gorra/Banco.jsx';
import NotFound from './componentes/notfound/NotFound.jsx';


function App() {
  return (
<>
  <Header />
   {/* <Principal /> */}
    <Routes>
      <Route index element={ <Principal /> }></Route>
      <Route path='/principal' element= { <Principal />}></Route>
      <Route path='/carpeta' element={ <Carpeta /> }></Route>
      <Route path='/nosotros' element={ <Nosotros /> }></Route>
      <Route path='/gorra' element={ <Gorra /> }></Route>
      <Route path='/contacto' element={ <Contacto /> }></Route>
      <Route path='/banco' element={ <Banco /> }></Route>
      <Route path='*' element={ <NotFound />} ></Route> 
    </Routes>
  <Footer />
</>
  );
}

export default App;
