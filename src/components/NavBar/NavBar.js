import Nav from "./styled";
import logoNav from "../../img/TrackIt.png";
import { ImageContext } from '../../Hook/context';
import { useContext } from "react";

export default function NavBar() {
  const { profilerPic } = useContext(ImageContext);

  return (
    <Nav  data-test="header">
      <img className="logo" alt="logoNav" src={logoNav} />
      <img className="profilerPic" alt="profilerPic" src={profilerPic} />
    </Nav>
  );
}
