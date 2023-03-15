import { Content, Header, Body, AddHabit, WeekButtons, Choices } from "./styled";

export default function ContentHabitsAdd() {
  return (
    <Content>
      <Header>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </Header>
      <Body>
        <AddHabit>
          <input placeholder="nome do hábito" type="text" required />
          <WeekButtons>
            <button className="buttons">D</button>
            <button className="buttons">S</button>
            <button className="buttons">T</button>
            <button className="buttons">Q</button>
            <button className="buttons">Q</button>
            <button className="buttons">S</button>
            <button className="buttons">S</button>
          </WeekButtons>
          <Choices>
            <button className="cancel">Cancelar</button>
            <button className="save">Salvar</button>
          </Choices>
        </AddHabit>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Body>
    </Content>
  );
}