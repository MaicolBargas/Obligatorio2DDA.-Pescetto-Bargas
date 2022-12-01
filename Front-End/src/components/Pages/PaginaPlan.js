import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormInput from "../FormInput";

export const PaginaPlan = () => {

  let {id} = useParams();
  
  const [values, setValues] = useState({
    destino: '',
    fecha: '',
    modalidad: '',
    precio: '',
  });


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


      //METODO LISTAR DATOS DEL PLAN
    useEffect(() => {
      fetch("http://localhost:8080/plan/"+id)
        .then((res) => res.json())
        .then((result) => {
          setValues(result);
        });
    }, []);

  function mostrarId() {
    alert(id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const inputs = [
    {
      id: 2,
      name: "destino",
      type: "text",
      placeholder: "Destino",
      errorMessage:
        "El destino no puede estar vacio",
      pattern: "^[A-Za-z0-9]{5,30}$",
      label: "Destino",
      required: true,
    },
    {
        id: 3,
        name: "fecha",
        type: "date",
        placeholder: "Fecha",
        errorMessage:
          "La fecha no puede estar vacia",
        pattern: "^[A-Za-z0-9]{5,30}$",
        label: "Fecha",
        required: true,
      },
    {
      id: 4,
      name: "modalidad",
      type: "char",
      placeholder: "Modalidad",
      label: "Modalidad",
      required: true,
    },
    {
      id: 5,
      name: "precio",
      type: "number",
      placeholder: "Precio",
      label: "Precio",
      required: true,
    },
  ];
    //METODO PARA MODIFICAR PLAN
    const modificarPlan = (e) => {
      var url = "http://localhost:8080/plan/modify/"+id;
      var data = {
        destino: values.destino,
        fecha: values.fecha,
        modalidad: values.modalidad,
        precio: values.precio
      };
      console.log(data);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((e) => console.error("Error:", e))
        .then((response) => console.log("Success:", response))
        alert("Plan modificado con exito");
        window.location.href = "/planes"
    };

    const eliminarPlan = () => {
      var url = "http://localhost:8080/plan/delete/"+id;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .catch((e) => console.error("Error:", e))
        .then((response) => console.log("Success:", response));
        alert("Plan eliminado con exito");
        window.location.href = "/planes"
    }

  return (
    <div>
      <div className="container">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <Button onClick={mostrarId}>Mostrar CI</Button>
          
          <div className="container-form">
                <form onSubmit={handleSubmit}>
                  <h1>PLAN</h1>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <button className="btn btn-warning" onClick={modificarPlan}>
                    Modificar
                  </button>
                  <button className="btn btn-damger" onClick={eliminarPlan}>
                    Eliminar
                  </button>
                </form>
              </div>
          <br />
          <br />
          </div>
        </div>
      </div>
  );
};
