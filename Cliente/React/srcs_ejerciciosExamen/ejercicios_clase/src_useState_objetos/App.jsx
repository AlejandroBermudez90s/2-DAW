import './App.css';
import Contador2 from './componentes/Contador2.jsx';

function App() {
  
  let contador = 0;

  return (
    <div>
      <p>Ejemplo de useState con objetos</p>
      {/* Muestra el valor del contador */}
      <Contador2></Contador2>
    </div>
  )
}

export default App
