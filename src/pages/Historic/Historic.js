import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";

export default function Historic() {
  return (
    <>
      <NavBar />
      <Content>
        <Header>
          <h2>Histórico</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Header>
      </Content>
      <InferiorBar />
    </>
  );
}

const Content = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100vw;
  min-height: 527px;
  background: #f2f2f2;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-top: 28px;
    margin-left: 17px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    margin-top: 17px;
    margin-left: 15px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;
