import React, { createContext, FC, useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'

// Theme Import
import { primaryTheme } from './Theme'

const ThemeProviderContext = createContext({})

interface ThemeProps {
    children: JSX.Element[]
}

const ThemeProvider: FC<ThemeProps> = ({ children }) => {

    const [temp, setTemp] = useState({});

    return (
        <ThemeProviderContext.Provider value={[temp]}>
            <MuiThemeProvider theme={primaryTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeProviderContext.Provider>
    )
}

export default ThemeProvider
