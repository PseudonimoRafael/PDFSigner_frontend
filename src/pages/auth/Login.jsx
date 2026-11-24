import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router"

function Login() {
  const [nome, setNome] = useState("")  
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
        <h1>Entre em sua conta</h1>
          <div>
            <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            <button type="submit" className="button">Logar</button>
          </div>  
        </form>
        <div>
          <p>Não possui conta?</p>
          <button type="button" onClick={() => navigate("/register")}>Registrar</button>
        </div>
      </div>
    </>
  )
}

export default Login;
