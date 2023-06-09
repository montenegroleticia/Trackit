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
    localStorage.setItem("percentege", JSON.stringify(updatePercentege));
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
            <Sequence data-test="today-habit-sequence">
              <p>Sequência atual:</p>
              <p className={t.done === true ? "green" : ""}>
                {t.currentSequence} dias
              </p>
            </Sequence>
            <Sequence data-test="today-habit-record">
              <p>Seu recorde:</p>
              <p
                className={
                  t.currentSequence === t.highestSequence &&
                  t.highestSequence !== 0
                    ? "green"
                    : ""
                }
              >
                {t.highestSequence} dias
              </p>
            </Sequence>
          </Infos>
          <button
            data-test="today-habit-check-btn"
            onClick={() => doneHabit(t.done, t.id)}
            style={{
              backgroundColor: t.done === true ? "#8FC549" : "#ebebeb",
            }}
          >
            <BsCheck />
          </button>
        </CardHabit>
      ))}
    </>
  );
}
