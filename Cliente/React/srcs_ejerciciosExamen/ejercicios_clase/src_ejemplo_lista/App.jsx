import './App.css';

import losCoches from './mocks/mock-coches';
import ListadoCoches from './componentes/ListadoCoches/ListadoCoches';

function App() {
  return (
    <div>
      <ListadoCoches todosLosCoches = {losCoches}></ListadoCoches>
    </div>
  )
}

export default App
