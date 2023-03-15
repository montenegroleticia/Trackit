import styled from "styled-components";

export const Content = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100vw;
  min-height: 527px;
  background: #f2f2f2;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  button {
    margin-top: 28px;
    margin-right: 18px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    border: transparent;
  }
`;
export const Body = styled.div`
  margin-top: 28px;
  margin-left: 17px;
  margin-right: 20px;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;