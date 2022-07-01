import Subdivisao from "./Subdivisao";
import styles from '../styles/Linha.module.css'

export default function Linha(props) {
    return (
        <div>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
        </div>
    )
}