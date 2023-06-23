import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return(
        <section className={styles.container}>
            <h2>Ops! Algo deu errado.</h2>
            <p>Página não foi encontrada.</p>
        </section>
    )
}

export default NaoEncontrada;