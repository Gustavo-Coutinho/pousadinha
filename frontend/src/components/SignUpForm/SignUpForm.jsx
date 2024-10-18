import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import userSignUp from "../../services/userSignUp";
import FormFieldset from "../FormFieldset";

function SignUpForm({ onError }) {
  const [{ username, email, password }, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setAuthState } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    userSignUp({ username, email, password })
      .then(setAuthState)
      .then(() => navigate("/"))
      .catch(onError);
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormFieldset
        name="username"
        required
        placeholder="Nome completo"
        value={username}
        handler={inputHandler}
      ></FormFieldset>

      <FormFieldset
        name="email"
        type="email"
        required
        placeholder="E-mail"
        value={email}
        handler={inputHandler}
      ></FormFieldset>

      <FormFieldset
        name="password"
        type="password"
        required
        placeholder="Senha"
        value={password}
        handler={inputHandler}
      ></FormFieldset>
      <button className="btn btn-lg btn-primary pull-xs-right">Criar conta</button>
    </form>
  );
}

export default SignUpForm;
