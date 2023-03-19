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
  const { token } = useContext(Token);
  const myDate = dayjs(new Date()).format("dddd, DD/MM/YYYY");
  const capitalizedDate = myDate.replace(/^\w/, (c) => c.toUpperCase());
  const [habitsChek, setHabitsChek] = useState();

  function doneHabit(id) {
    if (!habitsChek.includes(id)) {
      setHabitsChek([...habitsChek, id]);
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MTg2OTU2fQ.RD-u__gmRzm9XBq-Oui_GysiayrgtnZuX_0HgcWQNG4`,
        },
      };
      const promise = axios.post(`${URL_BASE}/habits/${id}/check`, config);
      promise.then((res) => {
        console.log(res.data);
      });
      promise.catch((err) => alert(err.response.data.message));
    } else {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MTg2OTU2fQ.RD-u__gmRzm9XBq-Oui_GysiayrgtnZuX_0HgcWQNG4`,
        },
      };
      const promise = axios.post(`${URL_BASE}/habits/${id}/uncheck`, config);
      promise.then((res) => {
        console.log(res.data);
      });
      promise.catch((err) => alert(err.response.data.message));
    }
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MTg2OTU2fQ.RD-u__gmRzm9XBq-Oui_GysiayrgtnZuX_0HgcWQNG4`,
      },
    };
    const promise = axios.get(`${URL_BASE}/habits/today`, config);
    promise.then((res) => {
      setListHabitsToday(res.data);
      console.log(res.data);
    });
    promise.catch((err) => console.log(err.response.data.message));
  }, [token]);
  return (
    <>
      <NavBar />
      <Content>
        <Header>
          <h2 data-test="today">{capitalizedDate} </h2>
          <p data-test="today-counter">Nenhum hábito concluído ainda</p>
        </Header>
        <Body>
          {listHabitsToday && listHabitsToday.length > 0 ? (
            <ContentToday
              listHabitsToday={listHabitsToday}
              doneHabit={doneHabit}
              data-test="today-habit-container"
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
