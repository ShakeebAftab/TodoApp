import { createTheme } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";

export const primaryTheme = createTheme({
    palette: {
        primary: {
            main: blue[900]
        },
        secondary: {
            main: blue[600]
        },
        background: {
            default: '#171717',
            paper: '#3b3b3b'
        }
    }
})

export const hotTheme = createTheme({
    palette: {
        primary: {
            main: red[900]
        },
        secondary: {
            main: red[300]
        },
        background: {
            default: '#171717',
            paper: '#3b3b3b'
        }
    }
})

export const coldTheme = createTheme({
    palette: {
        primary: {
            main: green[900]
        },
        secondary: {
            main: green[600]
        },
        background: {
            default: '#171717',
            paper: '#3b3b3b'
        }
    }
})