import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTodo = ({ dark, setTodoData, text, setText }) => {
  const handleKeyPress = e => {
    if (text) {
      if (e.key === "Enter") {
        setTodoData(prev => prev.concat({ checked: false, text, id: uuidv4() }));
        setText("");
      }
    }
  };

  return (
    <div onKeyPress={handleKeyPress} className={`creation ${dark ? "dark" : ""}`}>
      <div className="roundUseless"></div>
      <input value={text} onChange={e => setText(e.target.value)} type="text" className={`${dark ? "dark" : ""}`} placeholder="Create a new todo..." />
    </div>
  );
};

export default CreateTodo;
