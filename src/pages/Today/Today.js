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
  const { token } = useContext(Token);

  function doneHabit(id) {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MDg4ODY3fQ.G32Uddmk5mEEnZsreC748HWadxVi_T5BGNlLxyk1uvA`,
      },
    };
    const promise = axios.post(`${URL_BASE}/habits/today/${id}`, config);
    promise.then((res) => {
      console.log(res.data);
    });
    promise.catch((err) => console.log(err.response.data.message));
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQyMiwiaWF0IjoxNjc5MDg4ODY3fQ.G32Uddmk5mEEnZsreC748HWadxVi_T5BGNlLxyk1uvA`,
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
          <h2>Segunda, data</h2>
          <p>Nenhum hábito concluído ainda</p>
        </Header>
        <Body>
          {listHabitsToday && listHabitsToday.length > 0 ? (
            <ContentToday listHabitsToday={listHabitsToday} doneHabit={doneHabit} />
          ) : (
            ""
          )}
        </Body>
      </Content>
      <InferiorBar />
    </>
  );
}
