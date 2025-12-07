import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { calculateWinner, type ISquare } from "../utils/constants";

interface IGameState {
  // информация об игровом поле
  squares: ISquare[];
  // чей следующий ход
  xIsNext: boolean;
  // информация о счете
  score: {
    X: number;
    0: number;
  };
}
const initialState: IGameState = {
  squares: Array(9).fill(""),
  xIsNext: true,
  score: {
    X: 0,
    0: 0,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    move(state, action: PayloadAction<number>) {
      if (calculateWinner(state.squares)) return;

      if (!state.squares[action.payload]) {
        state.squares[action.payload] = state.xIsNext ? "X" : "O";

        //     if (calculateWinner(state.squares) && calculateWinner(state.squares) !== "Ничья") {
        //       if (state.xIsNext) {
        //         state.score.X++;
        //       } else {
        //         state.score[0]++;
        //       }
        //     }
        //     state.xIsNext = !state.xIsNext;
        //   }
        // },

        if (calculateWinner(state.squares) === "Победитель X") {
          state.score.X++;
        }
        if (calculateWinner(state.squares) === "Победитель O") {
          state.score[0]++;
        }

        state.xIsNext = !state.xIsNext;
      }
    },
    restart(state) {
      state.xIsNext = true;
      state.squares = Array(9).fill("");
    },
  },
});
export const { move, restart } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
