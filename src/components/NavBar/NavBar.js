import Nav from "./styled";
import logoNav from "../../img/TrackIt.png";
import profilerPic from "../../img/profilerPic.png";

export default function NavBar() {
  return (
    <Nav>
      <img className="logo" alt="logoNav" src={logoNav} />
      <img className="profilerPic" alt="profilerPic" src={profilerPic} />
    </Nav>
  );
}
