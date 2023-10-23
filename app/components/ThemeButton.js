'use client'
import { useState } from "react";

export default function ThemeButton({className}) {

    const [theme, setTheme] = useState("dark");

    function toggleTheme(theme) {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <>
            <button className={className} onClick={() => toggleTheme(theme)}>
                {theme == "dark" ? <ion-icon name="moon-outline"/> : <ion-icon name="sunny-outline"/>}
            </button>
        </>
    )
}