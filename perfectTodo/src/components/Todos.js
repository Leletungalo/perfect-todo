import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";

import TodoItem from "./TodoItem";

const Todos = () => {
  const [isLoading, setIsloading] = useState(true);

  const todoContext = useContext(TodoContext);
  const {
    displayData,
    loading,
    getData,
    setComplete,
    removeTodo,
  } = todoContext;

  useEffect(() => {
    getData();
    if (!loading) setIsloading(false);
  }, [loading]);

  if (isLoading) return <h1>lelethu loading</h1>;
  const dataArr = displayData.map((element) => {
    if (!element.deleted) {
      return (
        <TodoItem
          key={element._id}
          id={element._id}
          completed={element.completed}
          todo={element.todo}
          setComplete={setComplete}
          removeTodo={removeTodo}
        />
      );
    }
  });
  return <div>{dataArr}</div>;
};

export default Todos;
