import React from "react";
import FormControlado from "./components/FormControlado";
import FormNoControlado from "./components/FormNoControlado";
import TodoApp from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <TodoApp />
      {/* <FormNoControlado /> */}
      {/* <FormControlado /> */}
    </div>
  );
};

export default App;
