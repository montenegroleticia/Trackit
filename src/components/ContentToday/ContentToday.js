import { BsCheck } from "react-icons/bs";
import { CardHabit, Infos } from "../ContentToday/styled";

export default function ContentToday() {
  return (
        <CardHabit>
          <Infos>
            <h2>Ler um livro</h2>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
          </Infos>
          <button>
            <BsCheck />
          </button>
        </CardHabit>
  );
}
