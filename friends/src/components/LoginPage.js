import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

function LoginPage() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState({
        username:'', 
        password: '',
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ... formValues,
            [name]: value,
        });
    };


 const login = (e) => {
    const config = {
      baseURL: "http://localhost:5000",
    };
    e.preventDefault();
    axiosWithAuth(config)
      .post("/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/friends");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          value={formValues.username}
          name="username"
          onChange={handleChanges}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          value={formValues.password}
          type="password"
          name="password"
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
