// Seção 2 - Aula 24: Integração com CSS #01

// Não posso importar aqui!
// o import foi feito dentro de _app.js
export default function integrecao() {
    return (
        <>
            {/* Para diferenciar da palavra reservada "class" utilizada para criar uma classe no
            Javascript o react/next utilzia o className para estilizar seus componentes */}
            <div className="vermelha">Texto #01</div>
            <div className="azul">Texto #02</div>
            <div className="branca">Texto #03</div>
        </>
    )
}