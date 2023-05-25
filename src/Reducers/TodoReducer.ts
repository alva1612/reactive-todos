import { ToDo, ToDoAction } from '../Types/todo.interface'

export function todoReducer(todos, action: ToDoAction) {
let todoIndex: number
let newTodos: ToDo[]
    switch (action.type) {
        case 'delete':
            const {text} = action
             todoIndex = todos.findIndex((todo) => todo.text === text);
            newTodos = [...todos];
            newTodos.splice(todoIndex, 1);
            return newTodos
        case 'complete':
            todoIndex = todos.findIndex((todo) => todo.text === text);
            newTodos = [...todos];
            newTodos[todoIndex].completed = !todos[todoIndex].completed;
            return newTodos
        case 'add':
            const {text } = action
            const newTodo: ToDo = {
            text,
      completed: false,
      createDate: new Date()
    };
    newTodos = [...todos, newTodo];

    }
}