import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import imageGeneratorService from "../../../services/imageGenerator.service";

const initialState = {
  generateImgStatus: "IDLE",
  generateImgError: "",
  generatedImg: null,
};

export const generateImage = createAsyncThunk(
  "image/generate",
  async (desc: string) => {
    try {
      const res = await imageGeneratorService.generateImage(desc);
      return res.data;
    } catch (err: any) {
      throw new Error(err.response.data.message);
    }
  }
);

export const imageGeneratorSlice = createSlice({
  initialState,
  name: "image generator",
  reducers: {
    removeError: (state) => {
      return {
        ...state,
        generateImgError: "",
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(generateImage.pending, (state) => {
        state.generatedImg = null;
        state.generateImgError = "";
        state.generateImgStatus = "LOADING";
      })
      .addCase(generateImage.fulfilled, (state, data) => {
        state.generatedImg = data.payload;
        state.generateImgError = "";
        state.generateImgStatus = "SUCCESS";
      })
      .addCase(generateImage.rejected, (state, err) => {
        state.generatedImg = null;
        state.generateImgError = err.error.message || "Something Went Wrong";
        state.generateImgStatus = "IDLE";
      });
  },
});

export default imageGeneratorSlice.reducer;
