import React, { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current);
    //console.log(...datos.entries());

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    //console.log(objetoDatos);

    const { todoDescripcion, todoName } = objetoDatos;
    if (todoDescripcion.trim() === "") {
      console.log("La descripcion no es valida");
      return;
    }

    console.log("Paso validacion");
  };

  return (
    <div>
      <h2>Form No Controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="TodoName"
          className="form-control mb-2"
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
        />
        <select name="todoEstado" className="form-control mb-2">
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className=" btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormNoControlado;
