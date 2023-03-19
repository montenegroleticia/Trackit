import { BsCheck } from "react-icons/bs";
import { CardHabit, Infos } from "../ContentToday/styled";

export default function ContentToday({ listHabitsToday, doneHabit }) {
  return (
    <>
      {listHabitsToday.map((t) => (
        <CardHabit key={t.id}>
          <Infos>
            <h2 data-test="today-habit-name">{t.name}</h2>
            <p data-test="today-habit-sequence">
              Sequência atual: {t.currentSequence} dias
            </p>
            <p data-test="today-habit-record">
              Seu recorde: {t.highestSequence} dias
            </p>
          </Infos>
          <button>
            <BsCheck
              onClick={() => doneHabit(t.id)}
              data-test="today-habit-check-btn"
            />
          </button>
        </CardHabit>
      ))}
    </>
  );
}
