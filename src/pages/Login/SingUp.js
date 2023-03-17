import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FormLogin } from "./styled";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { ImageContext, Token } from "../../Hook/context";
import { ThreeDots } from  'react-loader-spinner'

export default function Form() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [disableButton, setDisableButton] = useState(true);
  const [disableInput, setDisableInput] = useState(false);
  const { setProfilerPic } = useContext(ImageContext);
  const { setToken} = useContext(Token);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginForm.email && loginForm.password > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [loginForm]);

  function handleForm(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }

  function login(e) {
    e.preventDefault();

    const promise = axios.post(`${URL_BASE}/auth/login`, loginForm);
    promise.then((res) => {
      navigate("/hoje");
      console.log(res.data);
      setProfilerPic(res.data.image);
      setToken(res.data.token);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setDisableButton(true);
      setDisableInput(false);
    });
  }

  return (
    <FormLogin onSubmit={login}>
      <img alt="logo" src={logo} />
      <input
        placeholder="email"
        type="email"
        name="email"
        value={loginForm.email}
        onChange={handleForm}
        required
        disabled={disableInput}
        data-test="email-input"
      />
      <input
        placeholder="senha"
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleForm}
        required
        disabled={disableInput}
        data-test="password-input"
      />
      <button
        type="submit"
        disabled={disableButton}
        onClick={() => setDisableInput(true)}
        data-test="login-btn"
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
          "Entrar"
        )}
      </button>
      <Link to={`/cadastro`} data-test="signup-link">
        Não tem uma conta? Cadastre-se!
      </Link>
    </FormLogin>
  );
}
