import './App.css';
import ContadorColores from './componentes/ContadorColores';

function App() {
  
  const botonera = [
                        {texto : 'LeftUp', valor: 0},
                        {texto: 'LeftDown', valor: 0},
                        {texto: 'RightUp', valor: 0},
                        {texto: 'RightDown', valor: 0}
                    ];

  return (
    <div>
      <p>Tarea UT8</p>
      <ContadorColores></ContadorColores>
    </div>
  )
}

export default App
