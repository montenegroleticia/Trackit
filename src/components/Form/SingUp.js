import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FormLogin } from "./styled";

export default function Form() {
  return (
    <FormLogin>
      <img alt="logo" src={logo} />
      <input placeholder="email" type="email" required />
      <input placeholder="senha" type="password" required />
      <button type="submit">Entrar</button>
      <Link>Não tem uma conta? Cadastre-se!</Link>
    </FormLogin>
  );
}