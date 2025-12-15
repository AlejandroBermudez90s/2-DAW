import './App.css';
import Semaforo1 from './componentes/Semaforo1';
import Semaforo2 from './componentes/Semaforo2';
import Semaforo3 from './componentes/Semaforo3';

function App() {
  
  let contador = 0;

  return (
    <div>
      <p>Tarea UT8</p>
      {/*<Semaforo1></Semaforo1>*/}
      {/*<Semaforo2></Semaforo2>*/}
      <Semaforo3></Semaforo3>
    </div>
  )
}

export default App
