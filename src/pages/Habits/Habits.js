import { useEffect, useState, useContext } from "react";
import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import { URL_BASE } from "../../constants/url";
import axios from "axios";
import { Token } from "../../Hook/context";
import {
  Content,
  Header,
  Body,
  AddHabit,
  WeekButtons,
  Choices,
} from "../../components/ContentHabits/styled";
import ContentHabits from "../../components/ContentHabits/ContentHabits";

export default function Habits() {
  const [listHabits, setListHabits] = useState();
  const [addHabit, setAddHabit] = useState(false);
  const { token } = useContext(Token);

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MDg4ODY3fQ.G32Uddmk5mEEnZsreC748HWadxVi_T5BGNlLxyk1uvA`,
      },
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
          <button onClick={() => setAddHabit(true)}>+</button>
        </Header>
        <Body>
          {addHabit === true ? (
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
                <button
                  onClick={() => setAddHabit(false)}
                  type="button"
                  className="cancel"
                >
                  Cancelar
                </button>
                <button type="submit" className="save">
                  Salvar
                </button>
              </Choices>
            </AddHabit>
          ) : (
            ""
          )}
          {listHabits > 0 ? (
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
