import { useState, useRef } from "react";

function Centralizador({children, hg=400, wh=400}) {
  return (
    <>
    <div className="centralizado">
      <div
      className="conteudo"
      style={{
        height:hg,
        width:wh,
      }}
      >
        {children}
      </div>
    </div>
    </>
  )
}
export default Centralizador;
