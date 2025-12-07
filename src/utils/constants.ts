// функция которая определяет выйгрышную комбинацию
export function calculateWinner(squares: string[]): string | null {
  const lines = [
    // по горизонтали
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // по вертикали
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // по диагонали
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return `Победитель ${squares[a]}`;
    }
  }

  if (!squares.filter((e) => e === "").length) return "Ничья";
  return null;
}
export type ISquare = "X" | "O" | "";
