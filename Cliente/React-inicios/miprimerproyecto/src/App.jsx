import './App.css'
import MiNombre from './componentes/MiNombre/MiNombre'

function App() {
  let miNombre = "Alejandro"
  let miApellido = "Bermúdez"
  return (
    <>
      Hola mundo
      <MiNombre nombre = {miNombre} 
                apellido = {miApellido}>
      </MiNombre>
    </>
  )
}

export default App
