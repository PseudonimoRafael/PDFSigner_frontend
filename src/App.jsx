import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";


// falta fazer uma faxina nesses arquivos.
import ModeloPagina from './pages/ModeloPagina'
import Registrar from './pages/auth/Registrar'
import AssinarPDF from './pages/funcional/AssinarPDF'
import Login from './pages/auth/Login'
import IconeLogado from './pages/componentes/IconeLogado'
import Centralizador from "./pages/componentes/Centralizador.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Centralizador><Login/></Centralizador>}/>
            <Route path="/register" element={ <Centralizador><Registrar/></Centralizador>}/>
            <Route path="/" element={ <Centralizador wh="600px" hg="600px"><AssinarPDF/></Centralizador>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

// <IconeLogado nome="max" foto=""/>
export default App;
