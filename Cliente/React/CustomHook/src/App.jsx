import './App.css';
import Home from './paginas/Home';
import Bienvenida from './paginas/Bienvenida';
import Contadores from './paginas/Contadores';
import Nosotros from './paginas/Nosotros';
import Menu from './componentes/Menu/Menu';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/bienvenida" element={<Bienvenida></Bienvenida>} />
        <Route path="/contadores" element={<Contadores></Contadores>} />
        <Route path="/nosotros" element={<Nosotros></Nosotros>} />
      </Routes>
    </div>    
  );
}

export default App;
