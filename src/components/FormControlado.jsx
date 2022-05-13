import React, { useState } from "react";

const FormControlado = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { todoName, todoDescripcion } = todo;

    if (!todoName.trim() || !todoDescripcion.trim()) {
      setError(true);
      return;
    } else {
      setError(false);
    }
  };

  const PintarError = () => (
    <div className="alert alert-danger">Todos los campos son obligatorios</div>
  );
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="container mt-2">
      FormControlado
      {error && <PintarError />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={todo.todoCheck}
            onChange={handleChange}
            name="todoCheck"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>
        <button className=" btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormControlado;
