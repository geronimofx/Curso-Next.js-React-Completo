/* eslint-disable react/jsx-key */
// Seção 2 - Aula 13: JSX #02

export default function jsx2() {
    
    const array = [
        <li>Rafael</li>,
        <li>Geronimo</li>,
        <li>FX</li>,
    ]

    const conteudo = (
        <div>
            <h1>JSX #02</h1>
        </div>
    );
    return (
        <div>
            {conteudo}
            {array}
        </div>
        
    );
}