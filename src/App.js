import { useState, useEffect } from "react";
import "./css/App.scss";
import Todo from "./components/Todo";
import Data from "./Data";
import darkBg from "./images/bg-desktop-dark.jpg";
import lightBg from "./images/bg-desktop-light.jpg";

function App() {
  const [dark, setDark] = useState(false);
  const [todoData, setTodoData] = useState(Data());

  // forDark: Only render when component is rendered for first time
  useEffect(() => {
    if (localStorage.getItem("dark")) {
      setDark(JSON.parse(localStorage.getItem("dark")));
    }
  }, []);
  // forDark: render each time state changes
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  // forTodoData: Only render when component is rendered for first time
  useEffect(() => {
    if (localStorage.getItem("todoData")) {
      setTodoData(JSON.parse(localStorage.getItem("todoData")));
    }
  }, []);
  // forTodoData: render each time state changes
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <img src={dark ? darkBg : lightBg} alt="background" className="bg-img" />
      <Todo dark={dark} setDark={setDark} todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
}

export default App;
