import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import Header from './Components/Header/Header'
import Todo from './Components/Todo/Todo'
import Input from './Components/Input/Input'

const App = () => {
  return (
    <Box overflow='hidden'>
      <Grid container direction='column' spacing={4}>
        <Grid item xs={12}>
          <Header />
        </Grid>
          <Container maxWidth='md'>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs ={12}>
                <Input />
              </Grid>
              <Grid item xs={12}>
                  <Todo todo={{
                    key: "1",
                    body: "This is a random todo",
                    checked: false
                  }} />
              </Grid>
              <Grid item xs={12} />
            </Grid>
          </Container>
      </Grid>
    </Box>
  )
}

export default App
