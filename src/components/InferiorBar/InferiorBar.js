import { Bar, ProgressBar, Inferior } from "./styled"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function InferiorBar() {
  const percentage = 66;
  return (
    <Bar>
      <ProgressBar>
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
      </ProgressBar>
      <Inferior>
        <h3>Hábitos</h3>
        <h3>Histórico</h3>
      </Inferior>
    </Bar>
  );
}
