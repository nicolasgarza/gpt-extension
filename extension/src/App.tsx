import { FC, useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";
import  Header from "./header";
import AddMenu from "./AddMenu";

export interface TodoItemProp {
  id: string;
  title: string;
  completed: boolean;
}

const App: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [todos, setTodos] = useState<TodoItemProp[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos: TodoItemProp[]) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos: TodoItemProp[]) =>
      currentTodos.map((todo: TodoItemProp) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos: TodoItemProp[]) =>
      currentTodos.filter((todo: TodoItemProp) => todo.id !== id)
    );
  }

  const addProfile = () => {
    setMenuOpen(false);
  };

  const handleButtonClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  }
 
  return (
    <>
      <Header onButtonClick={handleButtonClick}/> 
      {isMenuOpen && <AddMenu onClose={handleCloseMenu} addProfile={addProfile} />}
      {/* <NewTodoForm onSubmit={addTodo} /> */}
      {/* <h1 className="header">Todo List</h1> */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
