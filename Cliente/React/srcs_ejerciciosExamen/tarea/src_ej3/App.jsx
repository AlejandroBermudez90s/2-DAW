import './App.css';
import misTemas from './mocks/mocks-misTemas';
import Temas from './componentes/Temas';

function App() {

  function muestraTemas(tema) {
    return <Temas key={tema.id} tema={tema}></Temas>
  }

  return (
    <div>
      <ul>
        {misTemas.map(muestraTemas)}
      </ul>
    </div>
  )
}

export default App