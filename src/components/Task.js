import React from "react";
export default function Task(props) {
  return (

    <div className="todo-item">
    <div className="checker"><span><input type="checkbox"/></span></div>
    <span>{"  "}{props.name}</span>
  </div>
  );
}

