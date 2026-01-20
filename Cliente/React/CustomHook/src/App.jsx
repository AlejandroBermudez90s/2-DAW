{/*import './App.css';*/}
import Home from './paginas/Home';
import Bienvenida from './paginas/Bienvenida';
import Contadores from './paginas/Contadores';
import Nosotros from './paginas/Nosotros';
import MenuCiudades from './componentes/Menu/MenuCiudades';
import { Route, Routes } from 'react-router-dom';
import Murcia from './paginas/Murcia';
import Caravaca from './paginas/Caravaca';
import Cartagena from './paginas/Cartagena';
import Lorca from './paginas/Lorca';

import Ciudad from './paginas/Ciudad';

function App() {

  return (
    <div>
      <MenuCiudades></MenuCiudades>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/:ciudad" element={<Ciudad></Ciudad>} />
      </Routes>
    </div>    
  );
}

export default App;

        {/*}
        <Route path="/bienvenida" element={<Bienvenida></Bienvenida>} />
        <Route path="/contadores" element={<Contadores></Contadores>} />
        <Route path="/nosotros/:usuario" element={<Nosotros></Nosotros>} />
        */}
 
{/*
        <Route path="/murcia" element={<Murcia></Murcia>} />
        <Route path="/cartagena" element={<Cartagena></Cartagena>} />
        <Route path="/lorca" element={<Lorca></Lorca>} />
        <Route path="/caravaca" element={<Caravaca></Caravaca>} />
*/}

        
    
