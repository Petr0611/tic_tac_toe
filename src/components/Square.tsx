import type { FC } from "react";
import type { ISquare } from "../utils/constants";

interface IsquareProps {
  value: ISquare;
  move: () => void;
}
const Square: FC<IsquareProps> = ({ value, move }) => {
  return (
    <button style={{ width: "30%" }} onClick={move}>
      {value}
    </button>
  );
};

export default Square;
