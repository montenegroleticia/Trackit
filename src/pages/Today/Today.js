import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import ContentToday from "../../components/ContentToday/ContentToday";
import { Content, Header, Body } from "../../components/ContentToday/styled";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { Token } from "../../Hook/context";

export default function Today() {
  const [listHabitsToday, setListHabitsToday] = useState([]);
  const { token, setToken } = useContext(Token);
  const [habitsChek, setHabitsChek] = useState([]);
  const [isLoadingToken, setIsLoadingToken] = useState(true);
  const today = new Date();

  function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locale = 'pt-BR';
    return date.toLocaleDateString(locale, options);
  }

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
    
      const promise = axios.post(`${URL_BASE}/habits/${id}/uncheck`, {}, config);
      promise.then((res) => console.log(res.data));
      promise.catch((err) => alert(err.response.data.message));

    } else {
      const updateHabitsCheck = [...habitsChek, id];
      setHabitsChek(updateHabitsCheck);
    
      const promise = axios.post(
        `${URL_BASE}/habits/${id}/check`,
        {},
        config
      );
      promise.then((res) => {console.log(res.data);
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
          <h2 data-test="today"> {formatDate(today)}</h2>
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
