export interface ToDo {
  text: string;
  completed: boolean;
  createDate: Date
}

type action = 'add' | 'delete' | 'complete'
export interface ToDoAction {
  type: action
  text: string
}