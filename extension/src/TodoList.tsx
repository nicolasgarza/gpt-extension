import { TodoItem } from "./todoitem"; 
import { TodoItemProp } from "./App"; 

interface TodoListProps {
    todos: TodoItemProp[];
    deleteTodo: (id: string) => void;
}

export function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
   <ul className="list">
  {todos.length === 0 && "No Todos"}
  {todos.map((todo) => (
    <li className="list-item" key={todo.id}>
      <div className="profile-content">
        <label>{todo.title}</label>
      </div>
      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  ))}
</ul> 
  )
}
