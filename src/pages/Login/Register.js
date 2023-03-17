import { FormLogin } from "./styled";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [disableButton, setDisableButton] = useState(true);
  const [disableInput, setDisableInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      registerForm.email &&
      registerForm.password &&
      registerForm.name &&
      registerForm.image !== ""
    ) {
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

    setDisableInput(true);

    const promise = axios.post(`${URL_BASE}/auth/sign-up`, registerForm);
    promise.then((res) => {
      console.log(res.data);
      navigate("/");
    });
    promise.catch((err) => {
      console.log(err.response.data);
      alert(err.response.data.response);
      setDisableButton(true);
      setDisableInput(false);
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
        disabled={disableInput}
        data-test="email-input"
      />
      <input
        placeholder="senha"
        type="password"
        name="password"
        value={registerForm.password}
        onChange={handleRegister}
        required
        disabled={disableInput}
        data-test="password-input"
      />
      <input
        placeholder="nome"
        type="text"
        name="name"
        value={registerForm.name}
        onChange={handleRegister}
        required
        disabled={disableInput}
        data-test="user-name-input"
      />
      <input
        placeholder="foto"
        type="url"
        name="image"
        pattern="^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$"
        value={registerForm.image}
        onChange={handleRegister}
        required
        disabled={disableInput}
        data-test="user-image-input"
      />
      <button
        type="submit"
        disabled={disableButton}
        onClick={() => setDisableInput(true)}
        data-test="signup-btn"
      >
        {setDisableInput === true ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          "Cadastrar"
        )}
      </button>
      <Link to={`/`} data-test="login-link">
        Não tem uma conta? Cadastre-se!
      </Link>
    </FormLogin>
  );
}
