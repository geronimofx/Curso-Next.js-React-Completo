// Seção 2 - Aula 15: JSX #04

export default function jsx4() {
    const subtitulo = "Estou no Javascript";

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>3² = {3 * 3}</h3>
            <h4>O máximo entre 13 e 31 é: {Math.max(13, 31)}</h4>
            <h5>O valor 1 está entre o valor dos númenos de 1 a 100? <br></br> {entre(30, 1, 100)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "Sim";
    } else {
        return "Não";
    }
}