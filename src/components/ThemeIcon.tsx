import {DarkModeSwitch} from "react-toggle-dark-mode";
import {isDarkMode} from "./themeStore";
import {useStore} from "@nanostores/react";
import useDarkMode from "../hooks/useDarkMode";

const ThemeIcon = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            size={40}
            moonColor={"white"}
            sunColor={"white"}
        />
    )
}

export default ThemeIcon;