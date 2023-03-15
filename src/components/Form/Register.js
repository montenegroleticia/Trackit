import { FormLogin } from "./styled";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <FormLogin>
      <img alt="logo" src={logo} />
      <input placeholder="email" type="email" required />
      <input placeholder="senha" type="password" required />
      <input placeholder="nome" type="text" required />
      <input placeholder="foto" type="url" required />
      <button type="submit">Entrar</button>
      <Link>Não tem uma conta? Cadastre-se!</Link>
    </FormLogin>
  );
}
