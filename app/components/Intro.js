import styles from './Intro.module.css';

export default function Intro() {
    return (
        <>
            <h1>Welcome to teachey.dev</h1>
            <p>IT professional.</p>
            <p>Aspiring developer.</p>
            <p>Mediocre chess player.</p>

            <h2 className={styles.glitch}>BRIAN TEACHEY</h2>
        </>
    )
}