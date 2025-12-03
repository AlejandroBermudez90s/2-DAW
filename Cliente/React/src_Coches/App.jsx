import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import losCoches from './mocks/mock-coches'
import ListadoCoches from './componentes/ListadoCoches/ListadoCoches'


function App() {

  return (
    <ListadoCoches todosLosCoches = {losCoches}></ListadoCoches>
  )
}

export default App

