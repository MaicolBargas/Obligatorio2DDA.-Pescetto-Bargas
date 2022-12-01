import { useState } from "react";
import "../App.css";
import FormInput from "./FormInput";

function Cliente() {
  const [values, setValues] = useState({
    ci: "",
    email: "",
    name: "",
    // password: "",
    // confirmPassword: "",
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
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 5-30 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{5,30}$",
      label: "Name",
      required: true,
    },
    // {
    //   id: 4,
    //   name: "password",
    //   type: "password",
    //   placeholder: "Password",
    //   errorMessage:
    //     "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    //   label: "Password",
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //   required: true,
    // },
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
        <h1>Cliente</h1>
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

export { Cliente };
