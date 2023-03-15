import styled from "styled-components";
import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";

export default function Habits() {
  return (
    <>
      <NavBar />
      <Content>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </Content>
      <InferiorBar />
    </>
  );
}
const Content = styled.div`
  top: 98px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e5e5e5;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
    text-align: center;
    color: #ffffff;
  }
`;
