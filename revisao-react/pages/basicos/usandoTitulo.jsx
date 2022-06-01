// Seção 2 - Aula 22: Propriedade Componente

// importante o componente para dentro da página
import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return(
        <div>
            <Titulo
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />
            <hr />
            <Titulo
                principal="Página de Login"
                secundario="Informe seu email e senha"
                pequeno={true}
            />
            <hr />
            <Titulo
                principal="Página de compras"
                secundario="Compre seus produtos"
                pequeno
            />
        </div>
    )
}