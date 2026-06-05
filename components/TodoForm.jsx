"use client";

import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") return;
    onAddTodo(text.trim());
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
