// Seção 2 - Aula 26: Props Somente Leitura
import SomaUm from "../../components/SomaUm"

// As propriedades são somente leitura
export default function propsSomenteLeitura(props) {
    return (
        <SomaUm numero={99}/>
    )
}