import { useState, useRef } from "react";

function EnviarPDF({ onFileSelect }) {
    const [arquivo, setArquivo] = useState(null);
    const [erro, setErro] = useState("");
    const inputRef = useRef(null);

    function selecionarArquivo(event) {
        const file = event.target.files[0];

        if (!file) return;

        // Verifica o tipo do arquivo
        if (file.type !== "application/pdf") {
            setErro("Por favor, selecione um arquivo PDF.");
            setArquivo(null);
            onFileSelect?.(null);
            event.target.value = "";
            return;
        }

        setErro("");
        setArquivo(file);

        // Envia o arquivo para o componente pai
        onFileSelect?.(file);
    }

    function removerArquivo() {
        setArquivo(null);
        setErro("");
        onFileSelect?.(null);

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return (
        <div className="upload-container">

        <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={selecionarArquivo}
        hidden
        />

        {!arquivo ? (
            <button
            className="upload-button"
            onClick={() => inputRef.current.click()}
            type="button"
            >
            Selecionar PDF
            </button>
        ) : (
            <div className="arquivo-selecionado">
            <div className="arquivo-info">
            <span className="pdf-icon">PDF</span>

            <div className="arquivo-texto">
            <strong>{arquivo.name}</strong>
            <small>
            {(arquivo.size / 1024 / 1024).toFixed(2)} MB
            </small>
            </div>
            </div>

            <span className="arquivo-status">
            ✓ Pronto para upload
            </span>

            <button
            className="remover-button"
            onClick={removerArquivo}
            type="button"
            >
            Remover
            </button>
            <button type="button">Enviar</button>
            </div>
        )}

        {erro && (
            <p className="upload-erro">{erro}</p>
        )}

        </div>
    );
}

export default EnviarPDF;
