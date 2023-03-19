import { WeekButtons, Habit, Trash } from "./styled";
import { BsTrash } from "react-icons/bs";

export default function ContentHabitsAdd({ listHabits, deleteHabit }) {
  return (
    <>
      {listHabits.map((h) => (
        <Habit key={h.id} data-test="habit-container">
          <Trash onClick={() => deleteHabit(h.id)} data-test="habit-delete-btn">
            <h4 data-test="habit-name">{h.name}</h4>
            <BsTrash />
          </Trash>
          <WeekButtons>
            <button className="buttons" data-test="habit-day">
              D
            </button>
            <button className="buttons" data-test="habit-day">
              S
            </button>
            <button className="buttons" data-test="habit-day">
              T
            </button>
            <button className="buttons" data-test="habit-day">
              Q
            </button>
            <button className="buttons" data-test="habit-day">
              Q
            </button>
            <button className="buttons" data-test="habit-day">
              S
            </button>
            <button className="buttons" data-test="habit-day">
              S
            </button>
          </WeekButtons>
        </Habit>
      ))}
    </>
  );
}
