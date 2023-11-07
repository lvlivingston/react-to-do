import { useState } from "react";

export default function NewToDoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleAddToDo(evt) {
    evt.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <>
      <h2>New To-Do </h2>
      <form onSubmit={handleAddToDo}>
        <input
          value={newTodo}
          onChange={(evt) => setNewTodo(evt.target.value)}
          placeholder="Add New To-Do Here"
          required
          pattern=".{4,)"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </>
  );
}
