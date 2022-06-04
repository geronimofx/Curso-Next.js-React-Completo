// Seção 2 - Aula 26: Props Somente Leitura

export default function SomaUm(props) {
    // props.numero++; Não da para fazer operações com com as props, somente leitura delas
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}