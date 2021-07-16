import React, { createContext, FC, useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core'
import axios from 'axios'

// Theme Import
import { coldTheme, hotTheme, primaryTheme } from './Theme'

// Interface Imports
import { ThemeProps, Temp } from '../types/ThemeTypes'
import ProgressBar from '../Components/ProgressBar/ProgressBar'

const ThemeProviderContext = createContext({})

const ThemeProvider: FC<ThemeProps> = ({ children }) => {

    const [temp, setTemp] = useState<Temp>();
    const [theme, setTheme] = useState<Theme>(primaryTheme)

    const getTheme = () => {
        if(temp && temp.temp <= 20+273.15) {
            setTheme(coldTheme)
        } else if (temp && temp.temp > 20+273.15 && temp.temp < 40+273.15) {
            setTheme(primaryTheme)
        } else {
            setTheme(hotTheme)
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {   
                const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${import.meta.env.VITE_REACT_APP_WEATHERAPI}`)
                setTemp(res.data.main)
                getTheme();
            } catch (err) {
                console.log(err.message)   
            }
        })    
    }, [])
    
    useEffect(() => {
        getTheme()
    }, [temp])

    if(!temp) return <ProgressBar />

    return (
        <ThemeProviderContext.Provider value={[temp]}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeProviderContext.Provider>
    )
}

export default ThemeProvider
