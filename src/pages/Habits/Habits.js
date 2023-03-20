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
  const [isLoadingToken, setIsLoadingToken] = useState(true);
  const { token, setToken } = useContext(Token);
  const [isNameValid, setIsNameValid] = useState(true);
  const [disableInput, setDisableInput] = useState(false);

  function handleHabitForm(e) {
    const { name, value } = e.target;
    setHabitForm({ ...habitForm, [e.target.name]: e.target.value });

    if (name === "name" && value.trim() === "") {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  }

  function addDay(day) {
    if (!habitForm.days.includes(day)) {
      const addDays = [...habitForm.days, day];
      const update = { ...habitForm, days: addDays };
      setHabitForm(update);
    } else {
      const filterHabitDay = habitForm.days.filter((d) => d !== day);
      const update = { ...habitForm, days: filterHabitDay };
      setHabitForm(update);
    }
  }

  function sendForm(e) {
    e.preventDefault();

    if (!isNameValid) {
      alert("Insira um nome para o hábito");
      return;
    }

    if (habitForm.days.length === 0) {
      alert("Selecione pelo menos um dia da semana");
      return;
    }

    setDisableInput(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(`${URL_BASE}/habits`, habitForm, config);
    promise.then((res) => {
      console.log(res.data);
      setAddHabit(false);
      window.location.reload();
    });
    promise.catch((err) => {
      setDisableInput(false);
      alert(err.response.data.message);
    });
  }

  function deleteHabit(id) {
    const confim = window.confirm("Deseja excluir esse ítem permanentemente?");
    if (confim) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
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
  }

  useEffect(() => {
    if (isLoadingToken && token === undefined) {
      setToken(JSON.parse(localStorage.getItem("token")));
      setIsLoadingToken(false);
    } else if (isLoadingToken && token) {
      setIsLoadingToken(false);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.get(`${URL_BASE}/habits`, config);
      promise.then((res) => {
        setListHabits(res.data);
        console.log(res.data);
      });
      promise.catch((err) => console.log(err.response.data.message));
    }
  }, [isLoadingToken, token, setToken]);

  return (
    <>
      <NavBar />
      <Content>
        <Header>
          <h2>Meus hábitos</h2>
          <button
            type="button"
            onClick={() => setAddHabit(true)}
            data-test="habit-create-btn"
          >
            +
          </button>
        </Header>
        <Body>
          {addHabit === true ? (
            <AddHabit onSubmit={sendForm} data-test="habit-create-container">
              <input
                placeholder="nome do hábito"
                type="text"
                name="name"
                value={habitForm.name}
                onChange={handleHabitForm}
                disabled={disableInput}
                required
                data-test="habit-name-input"
              />
              <WeekButtons>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(0) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(0)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  D
                </button>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(1) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(1)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  S
                </button>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(2) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(2)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  T
                </button>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(3) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(3)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  Q
                </button>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(4) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(4)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  Q
                </button>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(5) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(5)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  S
                </button>
                <button
                  type="button"
                  className={
                    habitForm.days.includes(6) ? "gray buttons" : "buttons"
                  }
                  onClick={() => addDay(6)}
                  disabled={disableInput}
                  data-test="habit-day"
                >
                  S
                </button>
              </WeekButtons>
              <Choices>
                <button
                  onClick={() => setAddHabit(false)}
                  type="button"
                  className="cancel"
                  disabled={disableInput}
                  data-test="habit-create-cancel-btn"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="save"
                  disabled={disableInput}
                  data-test="habit-create-save-btn"
                >
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
