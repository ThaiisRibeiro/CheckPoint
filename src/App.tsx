import { useState } from 'react'
import './App.css'
import TeladePosts from './componentes/TeladePosts'
import TeladeFoto from './componentes/TeladeFoto'
import TeladeUsuario from './componentes/TeladeUsuario'

function App() {
  

  return (
    <>
     <TeladePosts></TeladePosts>

     <TeladeUsuario></TeladeUsuario>
    </>
  )
}

export default App
