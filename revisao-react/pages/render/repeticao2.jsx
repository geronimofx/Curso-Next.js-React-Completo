// Seção 2 - Aula 31: Repetição #02
import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {

    const comBorda = {
        border: "1px solid #000000",
    }

    function renderizarLinhas() {
        return listaProdutos.map(produto => {
            return(
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Códgio</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}