import { useState, useRef } from "react";
import EnviarPDF from "./EnviarPDF"
function AssinarPDF(params) {
  return (
    <>
    <div>
      <h1> Assainar PDF </h1>
      <h2> selecione o arquivo para assinar </h2>
      <EnviarPDF/>
    </div>
    <div>
      <h1>Não possui uma conta?</h1>
      <button type="button">criar conta</button>
    </div>
    </>
  )  
}

export default AssinarPDF;
