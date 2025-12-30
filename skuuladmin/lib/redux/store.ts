// import { configureStore } from "@reduxjs/toolkit";
// import teacherReducer from "./slices/teacherSlice";

// export const store = configureStore({
//   reducer: {
//     teacher: teacherReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import teacherReducer from "./slices/teacherSlice";

const teacherPersistConfig = {
  key: "teacher",
  storage,
  whitelist: ["selectedTeacher"], // 👈 only persist this
};

const persistedTeacherReducer = persistReducer(
  teacherPersistConfig,
  teacherReducer
);

export const store = configureStore({
  reducer: {
    teacher: persistedTeacherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
