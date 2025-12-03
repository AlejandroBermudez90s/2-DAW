import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*import Contador2 from './componentes/Contador2'*/
import Semaforo from './componentes/Semaforo'
import SemaforoReducer from './componentes/SemaforoReducer'

/* import ContadorR from './componentes/ContadorR' */

import Segundero from './componentes/Segundero'

import BarraHerrameintas from './componentes/BarraHerramientas'


import TemaContext from './contextos/TemaContext'
import temas from './mocks/mock-temas'

import losCoches from './mocks/mock-coches'
import ListadoCoches from './componentes/ListadoCoches/ListadoCoches'


import ListaTemas from './componentes/ListaTemas'
import losTemas from './mocks/mock-misTemas'

function App() {

  return (
    <ListaTemas todosLosTemas={losTemas}></ListaTemas>
  )
}

export default App
      

      {/* <p>CONTADOR useReducer</p> */}

      {/* <Contador contador = {contador}></Contador> */}

      {/* <Contador2></Contador2> */}

      {/* <SemaforoReducer></SemaforoReducer> */}

      {/* <ContadorR></ContadorR> */}

      {/* <Segundero contador = {0} ></Segundero> */}
      
      {/*
      <TemaContext.Provider value={ temas.light }>
        <BarraHerrameintas></BarraHerrameintas>
        <p> {temas.light.nombre} </p>
      </TemaContext.Provider>
      */}

      {/*  <ListadoCoches todosLosCoches = {losCoches}></ListadoCoches> */}

