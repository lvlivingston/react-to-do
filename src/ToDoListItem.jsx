import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }) {
  // Application logic that's necessary etc. goes here

  // return the UI as jsx
  return (
    <li
      className={"ToDoListItem"}
      style={{
        backgroundColor: index % 2 ? "lavender" : "plum"
      }}
    >
      <div className="flex-ctr-ctr">{index + 1}</div>
      {todo}
    </li>
  );
}
