import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import ContentToday from "../../components/ContentToday/ContentToday";
import { Content, Header, Body } from "../../components/ContentToday/styled";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { Token } from "../../Hook/context";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

export default function Today() {
  const [listHabitsToday, setListHabitsToday] = useState([]);
  const { token, setToken } = useContext(Token);
  const myDate = dayjs(new Date()).format("dddd, DD/MM/YYYY");
  const capitalizedDate = myDate.replace(/^\w/, (c) => c.toUpperCase());
  const [habitsChek, setHabitsChek] = useState([]);
  const [isLoadingToken, setIsLoadingToken] = useState(true);

  function doneHabit(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (habitsChek.includes(id)) {
      const updateHabitsCheck = habitsChek.filter((habit) => habit !== id);
      setHabitsChek(updateHabitsCheck);
      console.log(updateHabitsCheck);

      const promise = axios.post(`${URL_BASE}/habits/${id}/check`, {}, config);
      promise.then((res) => console.log(res.data));
      promise.catch((err) => alert(err.response.data.message));
    } else {
      const updateHabitsCheck = [...habitsChek, id];
      setHabitsChek(updateHabitsCheck);

      const promise = axios.post(
        `${URL_BASE}/habits/${id}/uncheck`,
        {},
        config
      );
      promise.then((res) => console.log(res.data));
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
      const promise = axios.get(`${URL_BASE}/habits/today`, config);
      promise.then((res) => {
        setListHabitsToday(res.data);
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
          <h2 data-test="today">{capitalizedDate} </h2>
          <p data-test="today-counter">
            {listHabitsToday && listHabitsToday.length > 0
              ? `% dos hábitos concluídos`
              : `Nenhum hábito concluído ainda`}
          </p>
        </Header>
        <Body>
          {listHabitsToday && listHabitsToday.length > 0 ? (
            <ContentToday
              listHabitsToday={listHabitsToday}
              doneHabit={doneHabit}
            />
          ) : (
            ""
          )}
        </Body>
      </Content>
      <InferiorBar />
    </>
  );
}
