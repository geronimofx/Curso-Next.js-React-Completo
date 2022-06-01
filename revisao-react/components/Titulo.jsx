// Seção 2 - Aula 22: Usando o Componente

// Pdronizar o nome do arquivo na pasta "Pages" com inicial minúscula
// e o  nome dos arquivos na pasta "Components" com inicial maiúscula

export default function Titulo(props) {
    
    if(props.pequeno) {
        return (
            <>
                <p>{props.principal}</p>
                <p>{props.secundario}</p>
            </>
        )
    } else {
        return (
            <>
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2>
            </>
        )
    }
}