import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import ContentToday from "../../components/ContentToday/ContentToday";
import { Content, Header, Body } from "../../components/ContentToday/styled";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { Percentege, Token } from "../../Hook/context";

export default function Today() {
  const [listHabitsToday, setListHabitsToday] = useState([]);
  const { token, setToken } = useContext(Token);
  const [isLoadingToken, setIsLoadingToken] = useState(true);
  const { percentege } = useContext(Percentege);

  const today = new Date();

  function formatDate(date) {
    const options = {
      weekday: "long",
      month: "numeric",
      day: "numeric",
    };
    const locale = "pt-BR";
    const formattedDate = date.toLocaleDateString(locale, options);

    const firstLetter = formattedDate.slice(0, 1);
    const restOfDate = formattedDate.slice(1);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    return capitalizedFirstLetter + restOfDate;
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
          <p
            data-test="today-counter"
            className={percentege > 0 ? "green" : ""}
          >
            {percentege > 0
              ? `${percentege} % dos hábitos concluídos`
              : `Nenhum hábito concluído ainda`}
          </p>
        </Header>
        <Body>
          {listHabitsToday && listHabitsToday.length > 0 ? (
            <ContentToday listHabitsToday={listHabitsToday} />
          ) : (
            ""
          )}
        </Body>
      </Content>
      <InferiorBar />
    </>
  );
}
