import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api/axiosConfig";

export const getCharacters = createAsyncThunk(
  "getCharacters/character",
  async (page) => {
    const data = await instance.get("character?page=" + page);
    return data.data;
  },
);
