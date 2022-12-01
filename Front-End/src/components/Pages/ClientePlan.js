import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Filtrar } from "../Filtrar";
import { NavLink } from "react-router-dom";

import fetch from "cross-fetch";

function ClientePlan() {

    let {ci} = useParams();

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

  //FILTRAR CLIENTES
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
              <b>Seleccione el plan deseado</b>
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
                          to={ "/Cli/" + ci +"/Plan/"+ plan.id}                  
                          activeClassName="active"
                          className="nav-links" 
                        >
                          <Button variant="info" size="sm" >
                            Seleccionar
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
      </div>
    </div>
  );
}

export default ClientePlan;
