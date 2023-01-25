import { configureStore } from "@reduxjs/toolkit";
import imageGeneratorReducer from "../components/imageGenerator/state/ImageGeneratorSlice";

export const store = configureStore({
  reducer: {
    imageGenerator: imageGeneratorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
