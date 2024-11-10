import {  useRef } from "react";
// import {BiMessageAdd} from "react-icons/io"
import { BiMessageAdd } from "react-icons/bi";

function TodoADD({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElemnet = useRef();
  const handleAddButoon = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElemnet.current.value;
    todoNameElement.current.value = "";
    dueDateElemnet.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container">
      <form className="row" onSubmit={handleAddButoon}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter to-do here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElemnet} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success ak-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default TodoADD;
