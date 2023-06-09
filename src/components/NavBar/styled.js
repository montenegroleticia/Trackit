import styled from "styled-components";

export const Nav = styled.div`
  width: 100vw;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1;
  .logo {
    margin-left: 18px;
  }
  .profilerPic {
    margin-right: 10px;
    width: 51px;
    height: 51px;
    border-radius: 100px;
  }
`;

export default Nav;
