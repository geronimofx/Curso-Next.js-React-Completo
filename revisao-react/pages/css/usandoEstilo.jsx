// Seção 2 - Aula 27: Aplicando EstiloCSS

import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="#514cfb"/>
            <Estilo numero={-13} color="#FFF" direita={true}/>
        </div>
    )
}