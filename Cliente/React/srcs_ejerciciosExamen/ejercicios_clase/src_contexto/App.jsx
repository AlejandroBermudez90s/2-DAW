import './App.css';
import React from 'react';
// Importamos el contexto y los componentes
import BarraHerramientas from './componentes/BarraHerramientas';
import TemaContext from './contextos/TemaContext';
import temas from './mocks/mock-temas';
import TemaName from './componentes/TemaName';

function App() {
  
  return (
    <div>
      {/*Proveedor del contexto con el tema activo*/}
      <TemaContext.Provider value={temas.dark}>
        {/*Componentes*/}
        <BarraHerramientas></BarraHerramientas>
        <TemaName></TemaName>
      </TemaContext.Provider>
    </div>
  )
}

export default App
