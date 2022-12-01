import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import fetch from "cross-fetch";

function DetalleCliente(props) {

    let {ci} = useParams();

  //METODO LISTAR PLANES DE CADA USUARIO POR SU CI
  const [plans, setPlanes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/plan/list/"+ci)
      .then((res) => res.json())
      .then((result) => {
        setPlanes(result);
      });
  }, []);
  //-----------------------------------------------------------------

  const eliminarPlanCliente = () => {
    var url = "http://localhost:8080/cliente/"+ci+"/deletePlan/"//+id;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((e) => console.error("Error:", e))
      .then((response) => console.log("Success:", response));
      alert("Plan del cliente eliminado con exito");
      window.location.href = "/clientes"
  }

  return (
    <div className="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Planes Contratados</b>
            </h2>
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
                {plans.length > 0 ? (
                  plans.map((plan) => (
                    <tr>
                      <td>{plan.id}</td>
                      <td>{plan.destino}</td>
                      <td>{plan.fecha}</td>
                      <td>{plan.modalidad}</td>
                      <td>{plan.precio}</td>
                      <td>                
                          <Button variant="info" size="sm" >
                            Dar de baja
                          </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h5>
                   El cliente no posee ningun plan{" "}
                  </h5>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleCliente;
