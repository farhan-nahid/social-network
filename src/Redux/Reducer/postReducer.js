
import * as Type from "../Actions/type";

const int = [];

const PostReducer = (state = int, action) => {
  switch (action.type) {
    case Type.DELETE_POST:
      let allData = [...state];
      let data = allData.filter((info) => info.id !== action.payload);
      return data;
    case Type.CREATE_POST:
      let todo = [...state];
      todo.push(action.payload);
      return todo;

    case Type.UPDATE_POST:
;
      let allTodo = [...state];
      let newTodos = allTodo.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.updateValue;
          return todo;
        } else {
          return todo;
        }
      });
      return newTodos;

    default:
      return state;
  }
};

export default PostReducer;