import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

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

export const coldTheme = createTheme({
    palette: {
        background: {
            default: 'blue'
        }
    }
})

export const hotTheme = createTheme({
    palette: {
        background: {
            default: 'red'
        }
    }
})