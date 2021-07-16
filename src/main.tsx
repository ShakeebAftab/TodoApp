import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Font Import
import '@fontsource/roboto'

// Material UI Imports
import { CssBaseline } from '@material-ui/core'

// Custom Theme Provider
import ThemeProvider from './ThemeProvider/ThemeProvider'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
