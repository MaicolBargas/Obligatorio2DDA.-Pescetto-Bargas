import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";


import fetch from "cross-fetch";
import { useEffect } from "react";

function AltaClientePlan() {

    let {ci,id} = useParams();
    
   
  //RELACIONAR CLIENTE CON PLAN A TRAVES DE SU CI E ID 
   useEffect (()=> {
    var url = "http://localhost:8080/cliente/asignarPlan";
          var data = {
        ci: ci,
        id: id,
      };
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
      alert("El cliente ha sido asignado al plan");
     // window.location.href = "/clientes"
  },[ci,id]);
  //------------------------------------------------------------------------------------------


  return (
    <div>
    </div>
  );
}

export default AltaClientePlan;
