import { useEffect, useState } from "react";
import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import { URL_BASE } from "../../constants/url";
import axios from "axios";
import {
  Content,
  Header,
  Body,
  AddHabit,
  WeekButtons,
  Choices,
} from "../../components/ContentHabits/styled";
import ContentHabits from "../../components/ContentHabits/ContentHabits";

export default function Habits({ token }) {
  const [listHabits, setListHabits] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const promise = axios.get(`${URL_BASE}/habits`, config);
    promise.then((res) => {
      setListHabits(res.data);
      console.log(res.data);
    });
    promise.catch((err) => console.log(err.response.data.message));
  }, [token]);

  return (
    <>
      <NavBar />
      <Content>
        <Header>
          <h2>Meus hábitos</h2>
          <button>+</button>
        </Header>
        <Body>
          <AddHabit>
            <input placeholder="nome do hábito" type="text" required />
            <WeekButtons>
              <button className="buttons">D</button>
              <button className="buttons">S</button>
              <button className="buttons">T</button>
              <button className="buttons">Q</button>
              <button className="buttons">Q</button>
              <button className="buttons">S</button>
              <button className="buttons">S</button>
            </WeekButtons>
            <Choices>
              <button className="cancel">Cancelar</button>
              <button className="save">Salvar</button>
            </Choices>
          </AddHabit>
          {listHabits !== [] ? (
            <ContentHabits listHabits={listHabits} />
          ) : (
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          )}
        </Body>
      </Content>
      <InferiorBar />
    </>
  );
}
