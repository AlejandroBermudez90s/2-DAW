import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import BarraHerrameintas from './componentes/BarraHerramientas'


import TemaContext from './contextos/TemaContext'
import temas from './mocks/mock-temas'


function App() {

  return (
    <TemaContext.Provider value={ temas.light }>
        <BarraHerrameintas></BarraHerrameintas>
        <p> {temas.light.nombre} </p>
      </TemaContext.Provider>
  )
}

export default App
      

