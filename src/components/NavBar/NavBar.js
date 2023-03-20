import Nav from "./styled";
import logoNav from "../../img/TrackIt.png";
import { ImageContext } from "../../Hook/context";
import { useContext, useEffect } from "react";

export default function NavBar() {
  const { profilerPic, setProfilerPic } = useContext(ImageContext);

  useEffect(() => {
    const storedImage = JSON.parse(localStorage.getItem("ImageContext"));
    setProfilerPic(storedImage);
  }, [setProfilerPic]);

  return (
    <Nav data-test="header">
      <img className="logo" alt="logoNav" src={logoNav} />
      <img className="profilerPic" alt="profilerPic" src={profilerPic} />
    </Nav>
  );
}
