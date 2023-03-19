import { WeekButtons, Habit, Trash } from "./styled";
import { BsTrash } from "react-icons/bs";

export default function ContentHabitsAdd({ listHabits, deleteHabit }) {
  return (
    <>
      {listHabits.map((h) => (
        <Habit key={h.id}>
          <Trash onClick={() => deleteHabit(h.id)}>
            <h4>{h.name}</h4>
            <BsTrash />
          </Trash>
          <WeekButtons>
            <button className="buttons">D</button>
            <button className="buttons">S</button>
            <button className="buttons">T</button>
            <button className="buttons">Q</button>
            <button className="buttons">Q</button>
            <button className="buttons">S</button>
            <button className="buttons">S</button>
          </WeekButtons>
        </Habit>
      ))}
    </>
  );
}
