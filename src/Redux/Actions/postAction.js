import * as Type from './type';
console.log(Type);
export const createTodo = (data) => (dispatch) => {
	dispatch({ type: Type.CREATE_POST, payload: data });
};

export const deleteTodo = (id) => (dispatch) => {
	dispatch({ type: Type.DELETE_POST, payload: id });
};

export const updateTodo = (data) => (dispatch) => {
	dispatch({ type: Type.UPDATE_POST, payload: data });
};