import React, { useState } from "react";
import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      e.target[0].focus();
      return Swal.fire({
        title: "Error!",
        text: "Nombre obligatorio",
        icon: "error",
      });
    }
    if (!descripcion.trim()) {
      e.target[1].focus();
      return Swal.fire({
        title: "Error!",
        text: "Descripcion obligatorio",
        icon: "error",
      });
    }

    Swal.fire({
      title: "Éxito",
      text: "¡Todo agregado!",
      icon: "success",
    });

    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad: prioridad,
      id: Date.now(),
    });

    reset();
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <h3>Agregar Todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form form-control mb-2"
          name="nombre"
          placeholder="Nombre Todo"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="Ingrese descripcion"
          name="descripcion"
          className="form-control mb-2"
          value={descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            id="idCheckbox"
            className="form-check-input mb-2"
            checked={prioridad}
            onChange={handleChange}
          />
          <label htmlFor="idCheckbox" className="form-check-label">
            Dar prioridad
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formulario;
