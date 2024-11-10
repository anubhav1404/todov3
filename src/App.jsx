import AppName from "./component/AppName";
import TodoADD from "./component/TodoADD";
// import TodoItem from "./component/TodoItem";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  // const initalitem = [
  //   {
  //     name: "ANUBHAV ROCKS",
  //     duedate: "1/07/20204",
  //   },
  //   {
  //     name: "ANUBHAV bhau",
  //     duedate: "1/07/20204",
  //   },
  //   {
  //     name: "ANUBHAV don",
  //     duedate: "1/07/20204",
  //   },
  // ];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItem = [
        ...todoItems,
        { name: itemName, duedate: itemDueDate },
      ];
      return newTodoItem;
    });
  };
  const handleDelete = (todoItemsName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemsName
    );
    setTodoItems(newTodoItems);
    // console.log(`Item deleted : ${todoItemsName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <TodoADD onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
