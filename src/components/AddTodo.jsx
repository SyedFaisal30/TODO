import { useState } from "react";
import styles from "./AddTodo.module.css";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setdueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonclicked = () => {
    addNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.input}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonclicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
