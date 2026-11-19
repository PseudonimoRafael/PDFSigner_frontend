import { useState, useRef } from "react";

function Centralizador({children, hg=400, wh=400}) {
  return (
    <>
      <div
      className="centralizado"
      style={{
        height:hg,
        width:wh,
      }}
      >
        {children}
      </div>
    </>
  )
}
export default Centralizador;
