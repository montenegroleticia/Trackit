import styled from "styled-components";

export const Content = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100vw;
  height: 527px;
  background: #f2f2f2;
`;
export const Header = styled.div`
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
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;
export const CardHabit = styled.div`
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: 69px;
    height: 69px;
    background: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    color: #ffffff;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Infos = styled.div`
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }
`;
