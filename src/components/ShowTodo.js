import React from "react";
import SingleTodo from "./SingleTodo";

const ShowTodo = ({ dark }) => {
  return (
    <div className={`showTodo ${dark ? "dark" : ""}`}>
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
      <SingleTodo />
    </div>
  );
};

export default ShowTodo;
