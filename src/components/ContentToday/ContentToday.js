import { BsCheck } from "react-icons/bs";
import { CardHabit, Infos, Sequence } from "../ContentToday/styled";
import { URL_BASE } from "../../constants/url";
import axios from "axios";
import { Percentege, Token } from "../../Hook/context";
import { useEffect, useContext } from "react";

export default function ContentToday({ listHabitsToday }) {
  const { token } = useContext(Token);
  const { setPercentege } = useContext(Percentege);

  useEffect(() => {
    const habitsCompleted = listHabitsToday.filter(
      (habit) => habit.done
    ).length;
    const totalHabits = listHabitsToday.length;
    const updatePercentege =
      habitsCompleted > 0
        ? Math.round((habitsCompleted / totalHabits) * 100)
        : 0;
    setPercentege(updatePercentege);
  }, [listHabitsToday, setPercentege]);

  function doneHabit(done, id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!done) {
      const promise = axios.post(`${URL_BASE}/habits/${id}/check`, {}, config);
      promise.then((res) => {
        console.log(res.data);
        window.location.reload();
      });
      promise.catch((err) => alert(err.response.data.message));
    } else {
      const promise = axios.post(
        `${URL_BASE}/habits/${id}/uncheck`,
        {},
        config
      );
      promise.then((res) => {
        console.log(res.data);
        window.location.reload();
      });
      promise.catch((err) => alert(err.response.data.message));
    }
  }

  return (
    <>
      {listHabitsToday.map((t) => (
        <CardHabit data-test="today-habit-container" key={t.id}>
          <Infos>
            <h2 data-test="today-habit-name">{t.name}</h2>
            <Sequence>
              <p data-test="today-habit-sequence">Sequência atual:</p>
              <p className={t.done === true ? "green" : ""}>
                {t.currentSequence} dias
              </p>
            </Sequence>
            <Sequence>
              <p data-test="today-habit-record">Seu recorde:</p>
              <p
                className={
                  t.currentSequence === t.highestSequence && t.highestSequence !== 0 ? "green" : ""
                }
              >
                {t.highestSequence} dias
              </p>
            </Sequence>
          </Infos>
          <button
            onClick={() => doneHabit(t.done, t.id)}
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
