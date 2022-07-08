// Seção 2 - Aula 31: Repetição #01

export default function repeticao1() {

    const listaAprovados = [
        "joão",
        "maria",
        "Ana",
        "Bea",
        "Daniel",
    ]

    function renderizarLListaArray() {
        const itens = []

        for (let index = 0; index < listaAprovados.length; index++) {
            itens.push(<li key={index}>{listaAprovados[index]}</li>)            
        }

        return itens
    }

    function renderizarLListaMap() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <div>
            <p>Usando Array</p>
            <ul>
                {renderizarLListaArray()}
            </ul>
            <p>Usando Map</p>
            <ul>
                {renderizarLListaMap()}
            </ul>
        </div>
    )
}