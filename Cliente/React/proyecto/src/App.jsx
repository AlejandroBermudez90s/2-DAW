import { useContext, useState } from 'react'
import './App.css'

import losCoches from './mocks/mock-coches'
import ListadoCoches from './componentes/ListadoCoches/ListadoCoches'
import CocheForm from './componentes/CocheForm'

function App() {

  const [listaCoches, setListaCoches] = useState(losCoches)

  function manejarFormulario (coche) {
    setListaCoches([...listaCoches, coche])
  }

  return (
      <div>
        <ListadoCoches todosLosCoches = {losCoches}></ListadoCoches>
        <CocheForm manejarFormulario = {manejarFormulario}></CocheForm>
      </div>
  )
}

export default App

