interface TodoItemProps {
    id: string
    title: string
    deleteTodo: (id: string) => void
}

export function TodoItem({ id, title, deleteTodo }: TodoItemProps) {
    return (
      <li>
        <label>
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
  }
  