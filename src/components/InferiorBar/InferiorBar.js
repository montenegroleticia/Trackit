import { Bar, ProgressBar, Inferior } from "./styled";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function InferiorBar() {
  const percentage = 66;
  return (
    <Bar data-test="menu">
      <ProgressBar>
        <Link to={"/hoje"} data-test="today-link">
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#ffffff",
              pathColor: "#ffffff",
              trailColor: "transparent",
            })}
          />
        </Link>
      </ProgressBar>
      <Inferior>
        <Link to={"/habitos"} data-test="habit-link">
          Hábitos
        </Link>
        <Link to={"/historico"} data-test="history-link">
          Histórico
        </Link>
      </Inferior>
    </Bar>
  );
}
