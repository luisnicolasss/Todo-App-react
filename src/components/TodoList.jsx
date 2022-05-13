import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const agregarTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {
    const editarTodos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );

    setTodos(editarTodos);
  };

  return (
    <div>
      <Formulario agregarTodo={agregarTodo} />
      <ul className="list-group list-group-numbered mt-2">
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
