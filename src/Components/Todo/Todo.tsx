import React, { useState, FC } from 'react';
import { makeStyles, Card, CardHeader, Checkbox, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoProps } from '../../types/TodoType';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        color: "#fff",
    },
    body: {
        color: 'gray',
        textDecoration: 'line-through'
    }
}));

const Todo: FC<TodoProps> = ({ todo, todos, setTodos }) => {
    const classes = useStyles();

    const { _id, body, completed } = todo

    const [checked, setChecked] = useState(completed);

    const handleChange = async () => {
        setChecked(!checked)
        await axios.put(`${import.meta.env.VITE_API_URL}/${_id}`, { completed: !checked })
    }

    const handleDelete = async () => {
        await axios.delete(`${import.meta.env.VITE_API_URL}/${_id}`)
        setTodos(todos.filter(t => t._id !== todo._id))
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="secondary"
                        />
                        <IconButton aria-label="delete" onClick={() => handleDelete()}>
                            <DeleteIcon color="secondary" />
                        </IconButton>
                    </>
                }
                title={checked ? <Typography className={classes.body}>{body}</Typography> : <Typography>{body}</Typography>}
            />
        </Card>
    );
}

export default Todo;