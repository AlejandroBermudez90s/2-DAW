import { useContext, useState } from 'react'
import './App.css'

import ListaTemas from './componentes/ListaTemas'
import losTemas from './mocks/mock-misTemas'

function App() {

  return (
    <ListaTemas todosLosTemas={losTemas}></ListaTemas>
  )
}

export default App

