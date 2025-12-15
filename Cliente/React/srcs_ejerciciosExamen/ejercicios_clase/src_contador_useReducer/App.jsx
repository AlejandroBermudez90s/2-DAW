import './App.css';
import ContadorReducer from './componentes/ContadorReduce.jsx'

function App() {
  
  let contador = 0;

  return (
    <div>
      <p>Ejemplo de useReducer</p>
      <ContadorReducer contador = {contador}/>
    </div>
  )
}

export default App
