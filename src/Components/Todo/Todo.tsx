import React, { useState, FC } from 'react';
import { makeStyles, Card, CardHeader, Checkbox, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { TodoProps } from '../../types/TodoType';

const useStyles = makeStyles({
    root: {
        color: "#fff",
    },
    body: {
        textDecoration: 'line-through'
    }
});

const Todo: FC<TodoProps> = ({ todo }) => {
    const classes = useStyles();

    const { body, checked } = todo

    const [completed, setCompleted] = useState(checked);

    const handleChange = () => {
        setCompleted(!completed)
    }


    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <>
                        <Checkbox
                            checked={completed}
                            onChange={handleChange}
                            color="secondary"
                        />
                        <IconButton aria-label="delete" onClick={() => console.log("This works!")}>
                            <DeleteIcon color="secondary" />
                        </IconButton>
                    </>
                }
                title={completed ? <Typography className={classes.body}>{body}</Typography> : <Typography>{body}</Typography>}
            />
        </Card>
    );
}

export default Todo;