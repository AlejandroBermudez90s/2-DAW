import './App.css';

import Contador from './componentes/Contador/Contador';
import ContadorIconos from './componentes/ContadorIconos/ContadorIconos';

function App() {

  return (
    <div>
      <Contador contador={5}></Contador>
      <ContadorIconos contador={2}></ContadorIconos>

    </div>
  );
}

export default App;
