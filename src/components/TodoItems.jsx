import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
