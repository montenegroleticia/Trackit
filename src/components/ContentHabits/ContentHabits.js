import { WeekButtons, Habit, Trash } from "./styled";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { URL_BASE } from "../../constants/url";
import { Token } from "../../Hook/context";
import { useContext } from "react";

export default function ContentHabitsAdd({ listHabits }) {
  const { token } = useContext(Token);

  function deleteHabit(id) {
    const confim = window.confirm("Deseja excluir esse ítem permanentemente?");
    if (confim) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.delete(`${URL_BASE}/habits/${id}`, config);
      promise.then((res) => {
        console.log(res.data);
        window.location.reload();
      });
      promise.catch((err) => alert(err.response.data.message));
    }
  }

  return (
    <>
      {listHabits.map((h) => (
        <Habit key={h.id} data-test="habit-container">
          <Trash>
            <h4 data-test="habit-name">{h.name}</h4>
            <BsTrash
              onClick={() => deleteHabit(h.id)}
              data-test="habit-delete-btn"
            />
          </Trash>
          <WeekButtons>
            <button
              className={h.days.includes(0) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              D
            </button>
            <button
              className={h.days.includes(1) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              S
            </button>
            <button
              className={h.days.includes(2) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              T
            </button>
            <button
              className={h.days.includes(3) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              Q
            </button>
            <button
              className={h.days.includes(4) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              Q
            </button>
            <button
              className={h.days.includes(5) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              S
            </button>
            <button
              className={h.days.includes(6) ? "gray buttons" : "buttons"}
              data-test="habit-day"
            >
              S
            </button>
          </WeekButtons>
        </Habit>
      ))}
    </>
  );
}
