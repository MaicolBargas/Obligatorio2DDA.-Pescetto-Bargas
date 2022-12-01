import { useState } from "react";
import "../App.css";
import FormInput from "./FormInput";

function Plan() {
  const [values, setValues] = useState({
    destino: "",
    fecha: "",
    modalidad: "",
    precio: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "destino",
      type: "text",
      placeholder: "Destino",
      errorMessage:
        "---",
      label: "Destino",
      pattern: "^[A-Za-z0-9]{1,20}$",
      required: true,
    },
    {
      id: 2,
      name: "fecha",
      type: "date",
      placeholder: "Fecha",
      errorMessage: "---",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "modalidad",
      type: "text",
      placeholder: "Modalidad",
      // errorMessage:
      //   "Name should be 5-30 characters and shouldn't include any special character!",
      // pattern: "^[A-Za-z0-9]{5,30}$",
      label: "Modalidad",
      required: true,
    },
    {
      id: 4,
      name: "precio",
      type: "double",
      placeholder: "Precio",
      errorMessage:
        "---",
      label: "Precio",
      pattern: "^[z0-9]{1,10}$",
      required: true,
    },
    // {
    //   id: 5,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <h1>Planes</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="Mybutton">Submit</button>
      </form>
    </div>
  );
}

export { Plan };
