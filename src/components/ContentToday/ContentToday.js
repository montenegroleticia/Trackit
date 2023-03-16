import { BsCheck } from "react-icons/bs";
import { Content, Header, Body, CardHabit, Infos } from "../ContentToday/styled";

export default function ContentToday() {
  return (
    <Content>
      <Header>
        <h2>Segunda, data</h2>
        <p>Nenhum hábito concluído ainda</p>
      </Header>
      <Body>
        <CardHabit>
          <Infos>
            <h2>Ler um livro</h2>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </Infos>
          <button>
            <BsCheck />
          </button>
        </CardHabit>
      </Body>
    </Content>
  );
}
