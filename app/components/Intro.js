import styles from './Intro.module.css';

export default function Intro() {
    return (
        <>
            <h1 className={styles.header}>Welcome to teachey.dev</h1>
            <h2>IT professional.</h2>
            <h2>Aspiring developer.</h2>
            <h2>Mediocre chess player.</h2>

            <div className={styles.moon}>
                <h2 className={styles.glitch}>BRIAN TEACHEY</h2>
            </div>
        </>
    )
}