import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container contain">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <Todoitems></Todoitems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
