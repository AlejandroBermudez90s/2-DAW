import './App.css';
import Contador from './componentes/Contador.jsx';

function App() {
  
  let contador = 0;

  return (
    <div>
      <p>Ejemplo de useState</p>
      {/* Muestra el valor del contador */}
      <Contador contador = {contador}/>
    </div>
  )
}

export default App
