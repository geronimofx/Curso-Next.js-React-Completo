// Seção 2 - Aula 19: Desafio Lista - Resposta #03

export default function lista3() {
    return (
        <div>
            {gerarLista(15)}
        </div>
    )
}

function gerarLista(valorFinal) {
    const lista = [];
    for(let i = 1; i <= valorFinal; i++) {
        lista.push(<span>{i}<br></br></span>);
    }
    return lista;
}