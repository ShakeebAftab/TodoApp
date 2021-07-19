import { FieldHookConfig } from "formik";
import { Todo } from "./TodoType";

export type InputFields = {
    name: FieldHookConfig<String>,
    otherProps: any
}

export type InputType = {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[] | undefined>>
}