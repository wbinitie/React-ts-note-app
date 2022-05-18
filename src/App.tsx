import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./Todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: "1", text: "Finish this course" }];
  const toDoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos((prevTodos) => [...prevTodos, { ...todos, id, text }]);
  };
  const onClickDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todos) => todos.id !== id));
  };

  return (
    <div className="App">
      <NewTodo toDoHandler={toDoHandler} />
      <TodoList items={todos} onClick={onClickDelete} />
    </div>
  );
};

export default App;
