import { useState, useRef } from "react";
import AssinarPDF from "./AssinarPDF"
import VerificarPDF from "./VerificarPDF"
import Tabs from "../../components/Tabs"
import Tab from "../../components/Tab"


function TelaPrincipal(params) {
  return (
    <>
      <Tabs>
        <Tab Titulo="Assianr PDF"><AssinarPDF/></Tab>
        <Tab Titulo="Verificar PDF"><VerificarPDF/></Tab>
      </Tabs>
    </>
  )  
}

export default TelaPrincipal;
