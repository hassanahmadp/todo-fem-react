import React, { useState, useEffect } from "react";
import SingleTodo from "./SingleTodo";

const ShowTodo = ({ dark, todoData, setTodoData }) => {
  const [filterValue, setFilterValue] = useState("all");

  // forFilterValue: Only render when component is rendered for first time
  useEffect(() => {
    if (localStorage.getItem("filterValue")) {
      setFilterValue(JSON.parse(localStorage.getItem("filterValue")));
    }
  }, []);
  // forFilterValue: render each time state changes
  useEffect(() => {
    localStorage.setItem("filterValue", JSON.stringify(filterValue));
  }, [filterValue]);

  const filterData = () => {
    if (filterValue === "all") {
      return todoData;
    } else if (filterValue === "active") {
      return todoData.filter(todo => todo.checked !== true);
    } else {
      return todoData.filter(todo => todo.checked === true);
    }
  };

  const uncheckCounter = () => {
    return todoData.filter(unqTodo => unqTodo.checked !== true);
  };

  const clearCompHandler = () => {
    setTodoData(prev => prev.filter(todo => !todo.checked));
  };

  return (
    <div className={`showTodo ${dark ? "dark" : ""}`}>
      <div className="body">
        {filterData().map(todoTodo => (
          <SingleTodo
            id={todoTodo.id}
            todoData={todoData}
            setTodoData={setTodoData}
            dark={dark}
            todoTodo={todoTodo}
            key={todoTodo.id}
          />
        ))}
      </div>
      <footer className={dark ? "dark" : ""}>
        <span className="left">{uncheckCounter().length} items left</span>
        <ul className={`filter ${dark ? "dark" : ""}`}>
          <li
            className={`${filterValue === "all" ? "filterValue" : ""}`}
            onClick={() => setFilterValue("all")}
          >
            All
          </li>
          <li
            className={`${filterValue === "active" ? "filterValue" : ""}`}
            onClick={() => setFilterValue("active")}
          >
            Active
          </li>
          <li
            className={`${filterValue === "completed" ? "filterValue" : ""}`}
            onClick={() => setFilterValue("completed")}
          >
            Completed
          </li>
        </ul>
        <span onClick={clearCompHandler} className="clearComp">
          Clear Completed
        </span>
        <span className="inst">Render List</span>
      </footer>
    </div>
  );
};

export default ShowTodo;
