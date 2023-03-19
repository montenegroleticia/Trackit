import { BsCheck } from "react-icons/bs";
import { CardHabit, Infos } from "../ContentToday/styled";

export default function ContentToday({ listHabitsToday, doneHabit }) {
  return (
    <>
      {listHabitsToday.map((t) => (
        <CardHabit key={t.id}>
          <Infos>
            <h2>{t.name}</h2>
            <p>Sequência atual: {t.currentSequence} dias</p>
            <p>Seu recorde: {t.highestSequence} dias</p>
          </Infos>
          <button>
            <BsCheck onClick={() => doneHabit(t.id)} />
          </button>
        </CardHabit>
      ))}
    </>
  );
}
