import ThemeButton from "./ThemeButton"
import styles from "./Navbar.module.css"

export default function Navbar({setTheme, theme}) {
    return (
        <div className={styles.navbar}>
            <ThemeButton className={styles.button} setTheme={setTheme} theme={theme}/>
        </div>
    )
}