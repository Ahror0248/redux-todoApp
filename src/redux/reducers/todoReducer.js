import * as types from "../actionTypes";

function todoReducer(
  state = {
    todos: [
      { id: 1, title: "task1", completed: false },
      { id: 2, title: "task2", completed: false },
    ],
  },
  action
) {
  switch (action.type) {
    case types.add_todo:
      let todos = [...state.todos];
      todos.push({
        id: todos.length + 1,
        title: action.payload,
        completed: false,
      });
      state = {
        ...state,
        todos,
      };
      break;

    case types.toggle_todo_completed:
      const arr = state.todos.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, completed: !item.completed };
        }
        return item;
      });

      state = {
        todos: arr,
      };

      break;
  }
  return state;
}

export default todoReducer;
