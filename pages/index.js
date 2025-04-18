import { useState } from "react"
import Soma from "./soma"


export default function Inicio() {
    const [contador, setContador] = useState(10)

    function adicionaContador() {
        setContador(contador + 1)
        
    }

    return (
        <div>
            <h1>
                Página Home Next
            </h1>
            <div>
                <p>{contador}</p>
                <button onClick={adicionaContador}>Adicionar</button>
                {Teste(150)}
                <Soma />
            </div>    
        </div>
    )
}

function Teste(x) {
    const valor = x
    //getContador = getContador + valor
    return (
        <div>
            Valor? { valor }
        </div>
    )
}