import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Filtrar } from "./Filtrar";
import { NavLink } from "react-router-dom";

import "../App.css";
import FormInput from "./FormInput";

import fetch from "cross-fetch";

function Table() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //METODO LISTAR CLIENTES
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/cliente/list")
      .then((res) => res.json())
      .then((result) => {
        setClients(result);
      });
  }, []);
  //------------------------------------------------------------------------------------------

  //METODO POST
  const altaCliente = (e) => {
    var url = "http://localhost:8080/cliente/add";
    var data = {
      ci: values.ci,
      nombre: values.name,
      apellido: values.apellido,
      email: values.email,
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
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
      alert("Cliente dado de alta con exito");
      window.location.href = "/clientes"
  };
  //------------------------------------------------------------------------------------------

  //FORMULARIO ALTA CLIENTE
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [values, setValues] = useState({
    ci: "",
    name: "",
    apellido: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "ci",
      type: "text",
      placeholder: "CI",
      errorMessage:
        "CI should be 7-8 characters and shouldn't include any special character!",
      label: "CI",
      pattern: "^[z0-9]{7,8}$",
      required: true,
    },
    {
      id: 2,
      name: "name",
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
  //------------------------------------------------------------------------------------------

  //FILTRAR CLIENTES
  const [filter, setFilter] = useState("");
  const clientesFiltrados = clients.filter((client) =>
    client.nombre.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  //------------------------------------------------------------------------------------------

  return (
    <div className="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <Filtrar filter={filter} setFilter={setFilter} />
              </form>
            </div>
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Clientes</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Añadir Cliente
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>CI</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {clientesFiltrados.length > 0 ? (
                  clientesFiltrados.map((client) => (
                    <tr key={client.ci}>
                      <td >{client.ci}</td>
                      <td>{client.nombre}</td>
                      <td>{client.apellido}</td>
                      <td>{client.email}</td>
                      <td>                
                        <NavLink                          
                          exact 
                          to={ "/Cliente/" + client.ci}                  
                          activeClassName="active"
                          className="nav-links" 
                          //<PaginaCliente ci={values.ci} nombre={values.nombre}  apellido={values.apellido} email={values.email}/>
                        >
                          <Button variant="info" size="sm" >
                            Editar
                          </Button>
                        </NavLink>
                      </td>
                      <td>
                      <NavLink                          
                          exact 
                          to={ "/ClientePlan/" + client.ci}                  
                          activeClassName="active"
                          className="nav-links">
                          <Button variant="info" size="sm" >
                            Asignar Plan
                          </Button>
                        </NavLink>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h4>
                    No se encontro ningun Cliente con la busqueda
                    <strong>"{filter}"</strong>.
                  </h4>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Añadir Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                  <button className="Mybutton" onClick={altaCliente}>
                    Confirmar
                  </button>
                </form>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default Table;
