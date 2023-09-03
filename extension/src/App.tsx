import { FC, useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";
import  Header from "./header";
import AddMenu from "./AddMenu";

export interface TodoItemProp {
  id: string;
  title: string;
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
      { id: crypto.randomUUID(), title},
    ]);
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos: TodoItemProp[]) =>
      currentTodos.filter((todo: TodoItemProp) => todo.id !== id)
    );
  }

  const addProfile = () => {
    addSampleTodo();
    setMenuOpen(false);

  };

  const handleButtonClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  const handleCloseMenu = () => {
    setMenuOpen(false);
  }

  const addSampleTodo = () => {
    setTodos((currentTodos: TodoItemProp[]) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: "Sample Todo"},
    ]);
  }
 
  return (
    <>
      <Header onButtonClick={handleButtonClick}/> 
      {isMenuOpen && <AddMenu onClose={handleCloseMenu} addProfile={addTodo} />}
      {/* <NewTodoForm onSubmit={addTodo} /> */}
      {/* <h1 className="header">Todo List</h1> */}
      <TodoList todos={todos} deleteTodo={deleteTodo} /> {/* toggleTodo={toggleTodo}*/}
    </>
  );
};

export default App;
