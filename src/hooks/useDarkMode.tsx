import {isDarkMode} from "../components/themeStore";
import {useStore} from "@nanostores/react";
import {useEffect} from "react";

export default function () {
    const $isDarkMode = useStore(isDarkMode)
    const colorTheme = $isDarkMode ? 'light' : 'dark';
    console.log({$isDarkMode})

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add($isDarkMode ? 'dark' : 'light');
        localStorage.setItem('theme', $isDarkMode ? 'dark' : 'light');
    }, [$isDarkMode, colorTheme]);

    return [$isDarkMode, isDarkMode.set];
}