import './App.css';

import {useState} from 'react';

import losCoches from './mocks/mock-coches';
import ListadoCoches from './componentes/ListadoCoches/ListadoCoches';
import CocheForm from './componentes/CocheForm/CocheForm';

function App() {

  const [listaCoches, setListaCoches] = useState (losCoches);

  function manejarFormulario (coche) {
    
    setListaCoches ([...listaCoches, coche])

  }

  return (
    <div>
      <ListadoCoches todosLosCoches = {listaCoches}></ListadoCoches>
      <CocheForm manejarFormulario = {manejarFormulario}></CocheForm>
    </div>
  )
}

export default App
