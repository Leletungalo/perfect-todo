import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";
import {
  GET_TODO,
  ADD_TODO,
  SET_COMPLETE,
  REMOVE_TODO,
  SEARCH_TODO,
} from "./Types";

const TodoState = (props) => {
  const incialState = {
    data: [],
    displayData: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(TodoReducer, incialState);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:4000/todoapi");
      const tojson = await res.json();
      dispatch({
        type: GET_TODO,
        payload: tojson,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const addTodos = (addedData) =>
    dispatch({
      type: ADD_TODO,
      payload: addedData,
    });

  const setComplete = (id) =>
    dispatch({
      type: SET_COMPLETE,
      payload: id,
    });

  const searchTodos = (searcdedString) =>
    dispatch({
      type: SEARCH_TODO,
      payload: searcdedString,
    });

  const removeTodo = (id) =>
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });

  return (
    <TodoContext.Provider
      value={{
        data: state.data,
        displayData: state.displayData,
        loading: state.loading,
        getData,
        addTodos,
        setComplete,
        searchTodos,
        removeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
