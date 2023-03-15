import styled from "styled-components";

export const Inferior = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
`;
export const ProgressBar = styled.div`
  width: 91px;
  height: 91px;
  position: fixed;
  bottom: 10px;
`;
export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;