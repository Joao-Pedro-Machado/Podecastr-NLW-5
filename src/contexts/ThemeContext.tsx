import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

type ThemeContextData = {
    isDark: boolean;
    changeToDark: () => void;
    changeToLight: () => void;
    toggleTheme: (status) => void;
}

export const ThemeContext = createContext({} as ThemeContextData)

type ThemeContextProviderProps = {
    children: ReactNode;
}

export function ThemeContextProvider ({ children }: ThemeContextProviderProps) {
    const [isDark, setIsDark] = useState(true)

    function changeToDark() {
        setIsDark(true)
        localStorage.setItem("theme", JSON.stringify(true))
    }

    function changeToLight() {
        setIsDark(false)
        localStorage.setItem("theme", JSON.stringify(false))
    }

    function toggleTheme() {
        if (isDark) {
            changeToLight()
        } else {
            changeToDark()
        }
    }

    useEffect(() => {
        let themeInStorage = JSON.parse(localStorage.getItem("theme"))
        if (themeInStorage === true) {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [])

    return (
        <ThemeContext.Provider
        value={{ 
            isDark,
            changeToDark,
            changeToLight,
            toggleTheme,
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme() {
    return useContext(ThemeContext)
}