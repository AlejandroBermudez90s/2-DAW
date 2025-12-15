import './App.css';
import React from 'react'; 
import BarraHerramientas from './componentes/BarraHerramientas';
import TemaContext from './contextos/TemaContext';
import temas from './mocks/mock-temas';


function App() {
  
  return (
    <div>
      <TemaContext.Provider value={temas.light}>
        <BarraHerramientas></BarraHerramientas>
      </TemaContext.Provider>
    </div>
  )
}

export default App
