import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormInput from "../FormInput";
import DetalleCliente from "../DetalleCliente";

export const PaginaCliente = () => {

   let{ci} = useParams();
  
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
  });


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)
  };


      //METODO LISTAR DATOS DEL CLIENTE
    useEffect(() => {
      fetch("http://localhost:8080/cliente/"+ci)
        .then((res) => res.json())
        .then((result) => {
          setValues(result);
        });
    }, [ci]);

  function mostrarId() {
    alert(ci);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const inputs = [
    {
      id: 2,
      name: "nombre",
      type: "text",
      placeholder: "Nombre",
      errorMessage:
        "Name should be 5-30 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{5,30}$",
      label: "Nombre",
      required: true,
    },
    {
      id: 3,
      name: "apellido",
      type: "text",
      placeholder: "Apellido",
      errorMessage:
        "Name should be 5-30 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{5,30}$",
      label: "Apellido",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
  ];
    
  //METODO PARA MODIFICAR CLIENTE
    const modificarCliente = (e) => {
      var url = "http://localhost:8080/cliente/modify/"+ci;
      var data = {
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
      };
      console.log(data);
      console.log(url);
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
        alert("Cliente modificado con exito");
        window.location.href = "/clientes"
    };

    const eliminarCliente = () => {
      var url = "http://localhost:8080/cliente/delete/"+ci;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .catch((e) => console.error("Error:", e))
        .then((response) => console.log("Success:", response));
        alert("Cliente eliminado con exito");
        window.location.href = "/clientes"
    }

  return (
    <div>
      <div className="container">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <Button onClick={mostrarId}>Mostrar CI</Button>
          
          <div className="container-form">
                <form onSubmit={handleSubmit}>
                  <h1>Cliente</h1>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <button className="btn btn-warning" onClick={modificarCliente}>
                    Modificar
                  </button>
                  <button className="btn btn-damger" onClick={eliminarCliente}>
                    Eliminar
                  </button>
                </form>
              </div>
          <br />
          <br />
          <DetalleCliente  />
          </div>
        </div>
      </div>
  );
};
