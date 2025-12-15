import './App.css';
import Segundero from './componentes/Segundero';

function App() {

  return (
    <div>
      {/*Le pasamos la props con el valor inicial del segundero*/}
      <Segundero contador = {0}> </Segundero>
    </div>
  )
}

export default App;
