import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./gameSlice";
// Создание Redux-хранилища с помощью RTK.
// Пока что объект reducer пустой — сюда добавляются редьюсеры для управления состоянием.
export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});
// Типы для удобной работы с TypeScript:
// RootState — тип состояния всего хранилища.
// AppDispatch — тип функции dispatch для отправки экшенов.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
