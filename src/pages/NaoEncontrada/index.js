import styles from './NaoEncontrada.module.css';
import icone from './icone.png';

function NaoEncontrada() {
    return(
        <section className={styles.container}>
            <img src={icone} alt="Ícone de erro" className={styles.imagem}/>
            <h2>Ops! Algo deu errado.</h2>
            <p className={styles.mensagem_error}>Página não foi encontrada.</p>
        </section>
    )
}

export default NaoEncontrada;