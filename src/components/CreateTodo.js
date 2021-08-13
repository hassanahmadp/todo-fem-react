import React from "react";

const CreateTodo = ({ dark }) => {
  return (
    <div className={`creation ${dark ? "dark" : ""}`}>
      <div className="roundUseless"></div>
      <input type="text" className={`${dark ? "dark" : ""}`} />
    </div>
  );
};

export default CreateTodo;
