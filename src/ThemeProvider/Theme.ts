import { createTheme } from "@material-ui/core";

export const primaryTheme = createTheme({
    palette: {
        background: {
            default: '#000'
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