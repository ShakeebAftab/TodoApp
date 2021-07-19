import React, { useState, useEffect } from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import Header from './Components/Header/Header'
import Todo from './Components/Todo/Todo'
import Input from './Components/Input/Input'
import { Todo as TodoType } from './types/TodoType'
import axios from 'axios'
import ProgressBar from './Components/ProgressBar/ProgressBar'

const App = () => {

  const [todos, setTodos] = useState<TodoType[]>();

  useEffect(() => {
      const fetchTodos = async () => {
        const data = await axios.get(`${import.meta.env.VITE_API_URL}`)
        setTodos(data.data)
      }
      fetchTodos()
  }, [])

  if (!todos) return <ProgressBar />

  return (
    <Box overflow='hidden'>
      <Grid container direction='column' spacing={4}>
        <Grid item xs={12}>
          <Header />
        </Grid>
          <Container maxWidth='md'>
            <Grid container item xs={12} spacing={2}>
              <Grid item xs ={12}>
                <Input todos={todos} setTodos={setTodos} />
              </Grid>
              {todos.map(todo => (
                <Grid item xs={12}>
                    <Todo todo={todo} todos={todos} setTodos={setTodos} />
                </Grid>
              ))}
              <Grid item xs={12} />
            </Grid>
          </Container>
      </Grid>
    </Box>
  )
}

export default App
