import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { ICharacter } from "utils/Interfaces";
import { getCharacters, getCharactersById } from "./actions";

export interface CounterState {
  allCharacters: ICharacter[];
  isLoading: boolean;
  pages: number;
  currentCharacter: ICharacter | null;
}

const initialState: CounterState = {
  allCharacters: [],
  isLoading: false,
  pages: 0,
  currentCharacter: null,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setNullCurrentCharacter: (state) => {
      state.currentCharacter = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      const { results, info } = action.payload;

      state.allCharacters = results;
      state.pages = info.pages;
    });
    builder.addCase(getCharactersById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharactersById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentCharacter = action.payload;
    });
  },
});

export const characterSelector = (state: RootState) => {
  return state.character;
};

export const { setNullCurrentCharacter } = characterSlice.actions;

export default characterSlice.reducer;
