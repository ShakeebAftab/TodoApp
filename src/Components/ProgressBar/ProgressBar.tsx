import { Box, CircularProgress, CssBaseline, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const ProgressBar = () => {

    const classes = useStyles()

    return (
        <Box overflow='hidden' className={classes.box}>
            <CssBaseline />
            <CircularProgress color='primary' />
        </Box>
    )
}

export default ProgressBar
