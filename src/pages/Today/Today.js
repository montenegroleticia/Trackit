import InferiorBar from "../../components/InferiorBar/InferiorBar";
import NavBar from "../../components/NavBar/NavBar";
import ContentToday from "../../components/ContentToday/ContentToday";
import { Content, Header, Body } from "../../components/ContentToday/styled";

export default function Today() {
  return (
    <>
      <NavBar />
      <Content>
        <Header>
          <h2>Segunda, data</h2>
          <p>Nenhum hábito concluído ainda</p>
        </Header>
        <Body>
        <ContentToday />
        </Body>
      </Content>
      <InferiorBar />
    </>
  );
}
