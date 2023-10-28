import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { ICharacter } from "utils/Interfaces";
import { getCharacters } from "./actions";

export interface CounterState {
  allCharacters: ICharacter[];
  isLoading: boolean;
  pages: number;
}

const initialState: CounterState = {
  allCharacters: [],
  isLoading: false,
  pages: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      const { results, info } = action.payload;

      state.allCharacters = results;
      state.pages = info.pages;
    });
  },
});

export const characterSelector = (state: RootState) => {
  return state.character;
};

export const {} = characterSlice.actions;

export default characterSlice.reducer;
