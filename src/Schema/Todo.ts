import { Schema, model } from 'mongoose'
import { Todo as TodoType } from '../Types/Todo'

const TodoSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Todo = model<TodoType>('todo', TodoSchema)
export default Todo