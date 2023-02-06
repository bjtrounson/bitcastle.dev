import {atom} from "nanostores";

export const isDarkMode = atom<boolean>(localStorage.theme === 'dark');