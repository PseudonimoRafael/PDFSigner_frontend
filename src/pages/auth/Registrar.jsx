import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router"
  
function Registrar() {
  const [nome, setNome] = useState("")  
  const [email, setEmail] = useState("")  
  const [senha, setSenha] = useState("")
  const [confSenha, setConfSenha] = useState("") 
//  const [boolSenha, setBoolSenha] = useState(false) 
  
  const navigate = useNavigate() 
  function handleSubmit() {
    console.log("Happe!")
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
        <h1>Crie uma conta</h1>
          <div>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            palceholder="Digite seu nome"/> 
          </div>  
          <div>
            <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            palceholder="Digite seu nome"/> 
          </div> 
          <div>
            <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            palceholder="Digite a senha"/> 
          </div>  
          <div>
            <input
            type="password"
            value={confSenha}
            onChange={(e) => setConfSenha(e.target.value)}
            palceholder="Confirme a senha"/> 
          </div>  
          <div>
            <button type="submit" className="btn">Registrar</button>
          </div>  
        </form>
        <div>
          <p>Já possui conta?</p>
          <button type="button" onClick={() => navigate("/login")}>Log In</button>
        </div>
      </div>
    </>
  )
}

export default Registrar;
