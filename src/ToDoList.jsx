import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos, index }) {
  // Application logic that's necessary etc. goes here

  // const str = "SEI";
  // const score = 94;
  // const person = {name: 'Fred'};
  // const misc = ["Mr. Sandman", 1, true, <div>Hey there!</div>];
  // return the UI as jsx

  // const toDoListItems = todos.map(t => <ToDoListItem />);
  // const toDoListItems = todos.map(t => <ToDoListItem todo={t} key={t} />);
  const toDoListItems = todos.map((t, idx) => (
    <ToDoListItem todo={t} index={idx} key={idx} />
  ));

  return (
    <ol className="ToDoList">
      {toDoListItems}
      {/* {todos.map(t => <ToDoListItem />} */}
      {/* <ToDoListItem />
      <ToDoListItem /> */}
      {/* <li>Number: {score}</li>
      <li>String: {str}</li>
      <li>Math.random(): {Math.random() * 100}</li>
      <li>Template Literal: {`${str} Rocks!`}</li>
      <li>Ternary: {score > 90 ? "A" : "B or less"}</li>
      <li>Booleans, null & undefined: {true}{false}{null}{undefined}</li>
      <li>Logical &&: {score > 90 && <div>Got an 'A'!</div>}</li>
      <li>{person.name}</li> */}
      {/* <li>{misc} </li> */}
    </ol>
  );
}
