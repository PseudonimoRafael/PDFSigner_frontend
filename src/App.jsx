import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";


// falta fazer uma faxina nesses arquivos.
import Registrar from './pages/auth/Registrar'
import TelaPrincipal from './pages/funcional/TelaPrincipal'
import Login from './pages/auth/Login'
import Centralizador from "./components/Centralizador"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Centralizador><Login/></Centralizador>}/>
            <Route path="/register" element={ <Centralizador hg="600px"><Registrar/></Centralizador>}/>
              <Route path="/" element={<TelaPrincipal/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
