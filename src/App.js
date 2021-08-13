import { useState } from "react";
import "./css/App.scss";
import Todo from "./components/Todo";
import darkBg from "./images/bg-desktop-dark.jpg";
import lightBg from "./images/bg-desktop-light.jpg";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <img src={dark ? darkBg : lightBg} alt="background image" className="bg-img" />
      <Todo dark={dark} setDark={setDark} />
    </div>
  );
}

export default App;
