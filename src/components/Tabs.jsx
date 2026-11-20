import { useState, useRef } from "react";

function Tabs({children}) {

  const [ActiveTab, setActiveTab] = useState(0)
  const abas = Array.isArray(children) ? children : [children]

  return (
    <>
      <div className="tabs">
        {abas.map((aba, index) => ( 
          <button
          type="button"
          key={index}
          onClick={ () => setActiveTab(index)}
          className={ActiveTab === index ? "active" : ""}
          >
          {aba.props.Titulo}
          </button>
        ))}
      </div>
      <div className="conteudo">
        {abas[ActiveTab]}
      </div>
    </>
  )  
}

export default Tabs;
