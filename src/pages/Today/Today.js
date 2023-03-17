import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import ContentToday from "../../components/ContentToday/ContentToday";
import { Content, Header, Body } from "../../components/ContentToday/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../../constants/url";

export default function Today({ token }) {
  const [listHabitsToday, setListHabitsToday] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const promise = axios.get(`${URL_BASE}/today`, config);
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
          <ContentToday listHabitsToday={listHabitsToday} />
        </Body>
      </Content>
      <InferiorBar />
    </>
  );
}
