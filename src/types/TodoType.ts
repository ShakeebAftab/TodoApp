export type Todo = {
    _id: String,
    completed: boolean,
    body: String
}

export type TodoProps = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[] | undefined>>
}