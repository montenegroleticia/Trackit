import { BsCheck } from "react-icons/bs";
import { CardHabit, Infos } from "../ContentToday/styled";


export default function ContentToday({ listHabitsToday, doneHabit }) {

  return (
    <>
      {listHabitsToday.map((t) => (
        <CardHabit data-test="today-habit-container" key={t.id}>
          <Infos>
            <h2 data-test="today-habit-name">{t.name}</h2>
            <p data-test="today-habit-sequence">
              Sequência atual: {t.currentSequence} dias
            </p>
            <p data-test="today-habit-record">
              Seu recorde: {t.highestSequence} dias
            </p>
          </Infos>
          <button
            onClick={() => doneHabit(t.id)}
            style={{
              backgroundColor: t.done === true ? "#8FC549" : "#ebebeb",
            }}
            data-test="today-habit-check-btn"
          >
            <BsCheck />
          </button>
        </CardHabit>
      ))}
    </>
  );
}
