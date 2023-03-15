import { Content, Header, Body } from "./styled";

export default function ContentHabits() {
  return (
    <Content>
      <Header>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </Header>
      <Body>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Body>
    </Content>
  );
}
