import styled from "styled-components";

export const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  img {
    width: 180px;
    height: 179px;
  }
  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
    padding: 8px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52b6ff;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    border: transparent;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
  a {
    margin-top: 17px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
