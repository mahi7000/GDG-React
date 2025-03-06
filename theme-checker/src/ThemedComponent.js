import React, {useContext} from 'react'
import { ThemeContext} from './ThemeContext'
import './ThemedComponent.css'

export const ThemedComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className={theme === 'light' ? 'light' : 'dark'}>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme: {theme}</button>
        </div>
    )
}
