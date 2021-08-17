import React, { useState } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import Creation from "./CreateTodo";
import ShowCase from "./ShowTodo";

const Todo = ({ dark, setDark, todoData, setTodoData }) => {
  const [text, setText] = useState("");

  return (
    <div className="actual-todo">
      <div className="head">
        <h1>TODO</h1>
        <img src={dark ? sun : moon} alt="" onClick={() => setDark(!dark)} />
      </div>
      <div className="body">
        <Creation text={text} setText={setText} todoData={todoData} setTodoData={setTodoData} dark={dark} />
        <ShowCase todoData={todoData} setTodoData={setTodoData} dark={dark} />
      </div>
    </div>
  );
};

export default Todo;
