import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllShoes = createAsyncThunk(
  "shoe/fetchAllShoes",
  async (_, _thunkAPI) => {
    const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}`);
    console.log("a", response);
    return response.data;
  }
);

const initialState = {
  shoes: [],
  loading: false,
  error: "",
};

export const shoeSlice = createSlice({
  name: "shoe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllShoes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllShoes.fulfilled, (state, action) => {
      state.loading = false;
      state.shoes = action.payload;
    });
    builder.addCase(fetchAllShoes.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});
