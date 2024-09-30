import { createContext, useReducer } from "react";
import { TodoItemsContext } from "./todo-item-store";

export const todoItemsContext = createContext({
  newTodoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoitemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        name: action.payload.itemdueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const todoItemsContextprovider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoitemReducer, []);

  const addNewItem = (itemName, itemdueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemdueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName, itemdueDate) => {
    const deleteItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default todoItemsContextprovider;
