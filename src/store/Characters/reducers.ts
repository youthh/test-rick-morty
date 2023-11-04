import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { ICharacter } from "utils/Interfaces";
import {
  getCharacters,
  getCharactersById,
  getCharactersByIds,
} from "./actions";

export interface CounterState {
  allCharacters: ICharacter[];
  isLoading: boolean;
  numberOfMaxPages: number;
  currentCharacter: ICharacter | null;
  queryString: string;
  isUseFilter: boolean;
  page: number;
}

const initialState: CounterState = {
  allCharacters: [],
  isLoading: false,
  numberOfMaxPages: 0,
  currentCharacter: null,
  queryString: "",
  isUseFilter: false,
  page: 1,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setNullCurrentCharacter: (state) => {
      state.currentCharacter = null;
    },
    setQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
    setIsUseFilter: (state, action: PayloadAction<boolean>) => {
      state.isUseFilter = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      const { results, info } = action.payload;
      state.isUseFilter = false;

      state.allCharacters = results;
      state.numberOfMaxPages = info.pages;
    });
    builder.addCase(getCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.allCharacters = [];
    });
    builder.addCase(getCharactersById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharactersById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentCharacter = action.payload;
    });
    builder.addCase(getCharactersByIds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharactersByIds.fulfilled, (state, action) => {
      state.isLoading = false;
      state.page = 1;
      state.isUseFilter = true;

      state.allCharacters = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      state.numberOfMaxPages = Math.ceil(action.payload.length / 20);
    });
    builder.addCase(getCharactersByIds.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const characterSelector = (state: RootState) => {
  return state.character;
};

export const {
  setNullCurrentCharacter,
  setQueryString,
  setIsUseFilter,
  setPage,
} = characterSlice.actions;

export default characterSlice.reducer;
