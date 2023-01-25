import { RootState } from "./../../../store/store";
const generateImgStatus = (state: RootState) =>
  state.imageGenerator.generateImgStatus;
const generateImgError = (state: RootState) =>
  state.imageGenerator.generateImgError;
const generatedImg = (state: RootState) => state.imageGenerator.generatedImg;

export const imgGeneratorSelector = {
  generateImgStatus,
  generateImgError,
  generatedImg,
};
