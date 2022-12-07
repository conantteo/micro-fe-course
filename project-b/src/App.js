import React, { useEffect, useState } from "react";
import './App.css';
import { listener} from "./lib/messaging";

const App = () => {
  const [parentMessage, setParentMessage] = useState("");

  useEffect(() => {
    listener(window, (event) => {
      if(event.data) {
        if(event.data.type === "parent-message") setParentMessage(event.data.data)
      }
    });
}, []);

  return (
    <div style={{ backgroundColor: "red"}}>{parentMessage}</div>
  );
}

export default App;
