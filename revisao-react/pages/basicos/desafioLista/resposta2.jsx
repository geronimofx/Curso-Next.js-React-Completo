/* eslint-disable react/jsx-key */
// Seção 2 - Aula 18: Desafio Lista - Resposta #02

export default function lista2() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}

// Warning de missing "key" prop
function gerarLista() {
    const lista = [
        <span>1 <br /> </span>,
        <span>2 <br /> </span>,
        <span>3 <br /> </span>,
        <span>4 <br /> </span>,
        <span>5 <br /> </span>,
        <span>6 <br /> </span>,
        <span>7 <br /> </span>,
        <span>8 <br /> </span>,
        <span>9 <br /> </span>,
        <span>10 </span>,
    ]

    return lista;
}