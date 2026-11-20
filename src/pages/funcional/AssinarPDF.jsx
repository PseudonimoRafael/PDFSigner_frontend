import { useState, useRef } from "react";
import EnviarPDF from "./EnviarPDF"
function AssinarPDF(params) {
  return (
    <>
    <div>
      <h1> Assinar PDF </h1>
      <h2> selecione o arquivo para assinar </h2>
      <EnviarPDF/>
    </div>
    </>
  )  
}

export default AssinarPDF;
