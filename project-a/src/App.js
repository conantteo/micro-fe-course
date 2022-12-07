import React, { useState } from "react";
import './App.css';
import IFrameComponent from './IFrameComponent.js';

const iframes = [
  {
    title: "1",
    src: "http://127.0.0.1:3001"
  },
  {
    title: "2",
    src: "http://127.0.0.1:3001"
  },
  {
    title: "3",
    src: "http://127.0.0.1:3001"
  }
]

const App = () => {
  const [childNum, setChildNum] = useState("1");
  return (
    <div>
      <nav style={{ display: "flex", gap: "1em", backgroundColor: "teal"}}>
        {iframes.map(iframe => (<div key={iframe.title} onClick={() =>setChildNum(iframe.title)} style={{ fontWeight: childNum === iframe.title ? "bold" : ""}}>Child {iframe.title}</div>))}
      </nav>
      <IFrameComponent key={iframes[childNum - 1].title} title={iframes[childNum - 1].title} src={iframes[childNum - 1].src}/>
      <div>Showing Child Number: {childNum}</div>
    </div>
  );
}

export default App;
