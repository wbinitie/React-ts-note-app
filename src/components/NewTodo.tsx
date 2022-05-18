import React, { useRef } from "react";
import "./NewTodo.css";

type Component = {
  toDoHandler: (text: string) => void;
};
const NewTodo: React.FC<Component> = ({ toDoHandler }) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let enteredText = textInputRef.current!.value;
    toDoHandler(enteredText);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
