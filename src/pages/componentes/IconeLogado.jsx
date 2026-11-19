import React, { useState, useEffect, useCallback } from "react";
import "./IconeLogado.css"

function IconeLogado({nome, foto}) {
  
  function handleSubmit() {
    console.log("Happe!")
  }
  return (
    <>
    <button className="user-profile" onClick={() => alert("Clicado")} >
      <img
      src={foto}
      alt={`Foto de ${nome}`}
      className="user-profile-foto"
      />
  
      <span className="user-profile-nome">
      {nome}
      </span>
    </button>
    </>
  )
}

export default IconeLogado;
