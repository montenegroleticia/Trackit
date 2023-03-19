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
  const [habitForm, setHabitForm] = useState({ name: "", days: [] });
  const { token } = useContext(Token);

  function handleHabitForm(e) {
    setHabitForm({ ...habitForm, [e.target.name]: e.target.value });
  }

  function addDay(day) {
    const addDays = [...habitForm.days, day];
    const update = { ...habitForm, days: addDays };
    setHabitForm(update);
  }

  function sendForm(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MDg4ODY3fQ.G32Uddmk5mEEnZsreC748HWadxVi_T5BGNlLxyk1uvA`,
      },
    };

    const promise = axios.post(`${URL_BASE}/habits`, habitForm, config);
    promise.then((res) => {
      console.log(res.data);
      setAddHabit(false);
      window.location.reload();
    });
    promise.catch((err) => alert(err.response.data.message));
  }

  function deleteHabit(id) {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MDg4ODY3fQ.G32Uddmk5mEEnZsreC748HWadxVi_T5BGNlLxyk1uvA`,
      },
    };
    const promise = axios.delete(`${URL_BASE}/habits/${id}`, config);
    promise.then((res) => {
      console.log(res.data);
      setAddHabit(false);
      window.location.reload();
    });
    promise.catch((err) => alert(err.response.data.message));
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MDg4ODY3fQ.G32Uddmk5mEEnZsreC748HWadxVi_T5BGNlLxyk1uvA`,
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
          <button type="button" onClick={() => setAddHabit(true)}>
            +
          </button>
        </Header>
        <Body>
          {addHabit === true ? (
            <AddHabit onSubmit={sendForm}>
              <input
                placeholder="nome do hábito"
                type="text"
                name="name"
                value={habitForm.name}
                onChange={handleHabitForm}
                required
              />
              <WeekButtons>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(0)}
                >
                  D
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(1)}
                >
                  S
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(2)}
                >
                  T
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(3)}
                >
                  Q
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(4)}
                >
                  Q
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(5)}
                >
                  S
                </button>
                <button
                  type="button"
                  className="buttons"
                  onClick={() => addDay(6)}
                >
                  S
                </button>
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
          {listHabits && listHabits.length > 0 ? (
            <ContentHabits listHabits={listHabits} deleteHabit={deleteHabit} />
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
