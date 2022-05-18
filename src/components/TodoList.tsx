import React from "react";
import { Todo } from "../Todo.model";
import "./TodoList.css";
interface TodoListProps {
  items: Todo[];
  onClick: (id: string) => void;
}
const TodoList: React.FC<TodoListProps> = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/* <button onClick={onClick.bind(null, todo.id)}>DELETE</button> */}
          <button
            onClick={() => {
              onClick(todo.id);
            }}
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
