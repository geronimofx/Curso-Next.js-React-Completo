// Seção 2 - Aula 30: Projeto Tabuleiro #03

import styles from '../styles/Subdivisao.module.css';

export default function Subdivisao(props) {
    return (
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff"
            }}
        className={styles.subdivisao}>

        </div>
    )
}