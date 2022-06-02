// Seção 2 - Aula 25: Integração com CSS #02

// a palavrar "classes" a gente que escolhe o que colocar para importar, pode ser "styles" por exemplo
import classes from "./integracao2.module.css"

export default function integracao2() {
    return (
        <div id={classes.integracao2}>
            <>
            <div className={classes.vermelha}>Texto #01</div>
            <div className={classes.azul}>Texto #02</div>
            <div className={classes.branca}>Texto #03</div>
        </>
        </div>
    )
}