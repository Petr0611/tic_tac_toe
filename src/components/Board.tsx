import { calculateWinner } from "../utils/constants";
import Square from "./Square";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { move, restart } from "../redux/gameSlice";
import { useCallback, useMemo } from "react";

const Board = () => {
  // const [squares, setSquares] = useState<ISquare[]>(Array(9).fill(""));
  // const [xIsNext, setXIsNext] = useState<boolean>(true);

  const { score, squares, xIsNext } = useSelector(
    (state: RootState) => state.game
  );
  const dispatch: AppDispatch = useDispatch();

  // Мемоизация значения (кэширует(сохраняет) значение) - чтобы пересчитывать тяжелые функции

  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const status = useMemo(() => winner ? winner : `Ход: ${xIsNext ? "X" : "O"}`, [winner, xIsNext]);

  // useCallback(() => {}, [])
  // Мемоизация функции (кэширует функцию ) - чтобы не пересоздавать функйии каждый рендер

  const handleClick = useCallback(
    (i: number) => {
      if (!winner) dispatch(move(i));
      // setSquares(
      //   squares.map((e, index) => (index === i ? (xIsNext ? "X" : "O") : e))
      // );
      // setXIsNext(!xIsNext);
    },
    [winner, dispatch]
  );

  // const restart = () => {
  //   setSquares(Array(9).fill(""));
  //   setXIsNext(true);
  // };

  return (
    <div>
      <div>
        Нолики{score[0]}: {score.X} Крестики
      </div>
      <div>{status}</div>
      <div
        className="mx-auto d-flex justify-content-around"
        style={{ maxWidth: "400px" }}
      >
        {squares.map((e, i) => (
          <Square key={v4()} value={e} move={() => handleClick(i)} />
        ))}
      </div>

      <button onClick={() => dispatch(restart())}>Again ?</button>
    </div>
  );
};

export default Board;
