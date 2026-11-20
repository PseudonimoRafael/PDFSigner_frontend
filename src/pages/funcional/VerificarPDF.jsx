import { useState, useRef } from "react";
import EnviarPDF from "./EnviarPDF"
function VerificarPDF() {
  return (
    <>
    <div>
      <h1> Verificar PDF </h1>
      <h2> selecione o arquivo para Verificar </h2>
      <EnviarPDF/>
    </div>
    </>
  )  
}

export default VerificarPDF;
