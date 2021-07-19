import React from 'react';
import { Typography, Toolbar, AppBar, createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    heading: {
        width: '100%',
        textAlign: 'center'  
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='primary'>
        <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" className={classes.heading}>
                TodoApp
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

<<<<<<< HEAD
export default Header
=======
export default Header 
>>>>>>> c3a139d (Connected with backend)
