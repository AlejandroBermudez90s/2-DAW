
import './App.css'
import Author from './componentes/Author';
import Botonera from './componentes/Botonera';
import Mensaje from './componentes/Mensaje';
import Imagen from './componentes/Imagen';

const App = () => {
  const tweet = 'Comenzamos con React en el módulo de Desarrollo web en entorno cliente. 2ª Evaluación';
  const nombre = 'Víctor M. Garrido';
  const nick   ='@vgc02g';
  const cuando = '3h ago ';

  return (
    <div className="tweet">
          <Imagen></Imagen>
            <div className="content">
              <span className="author" >
                <Author nombre = {nombre} nick = {nick} cuando = {cuando}></Author>
              </span>
              <div className="message" >
                <Mensaje tweet = {tweet}></Mensaje>
              </div>    
              <div className="buttons" >
                <Botonera></Botonera>
              </div>            
            </div>                
    </div>
  )
}

export default App
