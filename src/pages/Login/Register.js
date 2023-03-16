import { FormLogin } from "./styled";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";

export default function Register() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [disableButton, setDisableButton] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (registerForm.email && registerForm.password > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [registerForm]);

  function handleRegister(e) {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  }

  function sendForm(e) {
    e.preventDefault();

    const promise = axios.post(`${URL_BASE}/auth/sign-up`, registerForm);
    promise.then((res) => {
      console.log(res.data);
      navigate("/");
    });
    promise.catch((err) => {
      alert(err.response.data.response);
      setDisableButton(true);
    });
  }

  return (
    <FormLogin onSubmit={sendForm}>
      <img alt="logo" src={logo} />
      <input
        placeholder="email"
        type="email"
        name="email"
        pattern="^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$"
        title="Email invalido. Exemplo: (nome@dominio.com)"
        value={registerForm.email}
        onChange={handleRegister}
        required
        data-test="email-input"
      />
      <input
        placeholder="senha"
        type="password"
        name="password"
        value={registerForm.password}
        onChange={handleRegister}
        required
        data-test="password-input"
      />
      <input
        placeholder="nome"
        type="text"
        name="name"
        value={registerForm.name}
        onChange={handleRegister}
        required
        data-test="user-name-input"
      />
      <input
        placeholder="foto"
        type="url"
        name="image"
        value={registerForm.image}
        onChange={handleRegister}
        required
        data-test="user-image-input"
      />
      <button type="submit" disabled={disableButton} data-test="signup-btn" >
        Cadastrar
      </button>
      <Link to={`/`} data-test="login-link">Não tem uma conta? Cadastre-se!</Link>
    </FormLogin>
  );
}
