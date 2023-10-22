import ThemeButton from "./ThemeButton"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ThemeButton className={styles.button}/>
        </div>
    )
}