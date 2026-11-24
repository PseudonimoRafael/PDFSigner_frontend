// feito pelo ChatGpt
import Centralizador from "./Centralizador.jsx"

function Tab({ titulo, children }) {
    return (
        <>
        <Centralizador hg="500px" wh="600px">
          {children}
        </Centralizador>
        </>
    );
}

export default Tab;
