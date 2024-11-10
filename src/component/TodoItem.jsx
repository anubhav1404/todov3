import { MdDelete } from "react-icons/md";
function TodoItem({ tododate, todoname, onDeleteClick }) {
  // let todoname = "";
  // let tododate = "4/10/2024";
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoname)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
