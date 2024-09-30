import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day!</p>
  );
};
export default WelcomeMessage;
