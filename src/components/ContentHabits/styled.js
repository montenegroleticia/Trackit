import styled from "styled-components";

export const Content = styled.div`
  margin-top: 70px;
  margin-bottom: 70px;
  width: 100vw;
  min-height: 527px;
  max-height: calc(100vh - 527px);
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const AddHabit = styled.form`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 29px;
  input {
    margin-left: 15px;
    width: 290px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 11px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;
export const WeekButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 19px;
  gap: 4px;
  .buttons {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;
export const Choices = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
  gap: 23px;
  .cancel {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
    border: transparent;
    background: #ffffff;
  }
  .save {
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    border: transparent;
  }
`;
export const Habit = styled.div`
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
export const Trash = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  margin-right: 10px;
  h4 {
    margin-left: 19px;
    margin-bottom: 8px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
`;
