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


import Subir from './componentes/Ej_Tabs/Subir';
import Ver from './componentes/Ej_Tabs/Ver';
import Descargar from './componentes/Ej_Tabs/Descargar';
import { useState } from 'react';
import Acordeon from './componentes/Acordeon/Acordeon';
import menuAcordeon from './mocks/mock-menu';
import Fotografia from './paginas/Fotografia';

import ListaPost from './componentes/ListaPosts/ListaPost';
import Loader from './componentes/Loader/Loader';

function App() {

  return (
    <div>
      <ListaPost></ListaPost>
    </div>    
  );
}

export default App;

      {/* <MenuCiudades></MenuCiudades> */}
      {/*
      <Acordeon lista = {menuAcordeon}></Acordeon>

      <Routes>
        <Route path="/fotografia" element={<Fotografia></Fotografia>} />
      </Routes>

      
      {/*
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/:ciudad" element={<Ciudad></Ciudad>} />
      </Routes>
      */}
    
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

        
    
