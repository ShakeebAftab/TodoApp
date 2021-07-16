import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import Header from './Components/Header/Header'
import Todo from './Components/Todo/Todo'

const App = () => {
  return (
    <Box overflow='hidden'>
      <Grid container direction='column' spacing={4}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md'>
            <Todo todo={{
              key: "1",
              body: "This is a random todo",
              checked: false
            }} />
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
