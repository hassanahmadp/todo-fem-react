import React from "react";
import check from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

const SingleTodo = ({ dark, todoData, todoTodo, setTodoData, id }) => {
  const delTodo = () => {
    setTodoData(prev => prev.filter(todo => todo.id !== id));
  };

  const checkTodo = () => {
    const newTodoData = todoData.map(todoCheck => {
      if (todoCheck.id === id) {
        if (todoCheck.checked) {
          return { ...todoCheck, checked: false };
        } else {
          return { ...todoCheck, checked: true };
        }
      } else {
        return { ...todoCheck };
      }
    });

    setTodoData(newTodoData);
  };
  return (
    <div className={`singleTodo ${todoTodo.checked ? "checked" : ""}`}>
      <div onClick={checkTodo} className={`checker ${todoTodo.checked ? "checked" : ""}`}>
        <img src={check} alt="check" />
      </div>
      <p className={`${dark ? "dark" : ""} ${todoTodo.checked ? "checked" : ""}`}>{todoTodo.text}</p>
      <img src={cross} alt="cross" className="cross" onClick={delTodo} />
    </div>
  );
};

export default SingleTodo;
