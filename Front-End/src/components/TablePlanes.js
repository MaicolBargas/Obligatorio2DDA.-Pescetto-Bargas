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

  //METODO LISTAR PLANES
  const [plans, setPlanes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/plan/list")
      .then((res) => res.json())
      .then((result) => {
        setPlanes(result);
      });
  }, []);
  //------------------------------------------------------------------------------------------

  //METODO POST
  const altaPlan = (e) => {
    var url = "http://localhost:8080/plan/add";
    var data = {
      destino: values.destino,
      fecha: values.fecha,
      modalidad: values.modalidad,
      precio : values.precio,
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
      alert("Plan guardado con exito");
      window.location.href = "/planes"
  };
  //------------------------------------------------------------------------------------------

  //FORMULARIO ALTA CLIENTE
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [values, setValues] = useState({
    id: "",
    destino: "",
    fecha: "",
    modalidad: "",
    precio:"",
  });

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
  //------------------------------------------------------------------------------------------

  //FILTRAR PLANES
  const [filter, setFilter] = useState("");
  const planesFiltrados = plans.filter((plan) =>
    plan.destino.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
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
              <b>Planes</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Añadir Plan
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Destino</th>
                  <th>Fecha</th>
                  <th>Modalidad</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {planesFiltrados.length > 0 ? (
                  planesFiltrados.map((plan) => (
                    <tr>
                      <td>{plan.id}</td>
                      <td>{plan.destino}</td>
                      <td>{plan.fecha}</td>
                      <td>{plan.modalidad}</td>
                      <td>{plan.precio}</td>
                      <td>                
                        <NavLink
                          exact
                          to={"/plan/" + plan.id}
                          activeClassName="active"
                          className="nav-links"
                        >
                          <Button variant="info" size="sm">
                            Editar
                          </Button>
                        </NavLink>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h5>
                    No se encontro ningun Plan con la busqueda{" "}
                    <strong>"{filter}"</strong>.
                  </h5>
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
              <Modal.Title>Añadir Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container-form">
                <form onSubmit={handleSubmit}>
                  <h1>Plan</h1>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <button className="Mybutton" onClick={altaPlan}>
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
