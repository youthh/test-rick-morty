import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "api/axiosConfig";
import { GetCharactersByIdsTypes } from "utils/types";
import { getFilteredCharacters, getCharactersIds } from "utils/Helpers";

export const getCharacters = createAsyncThunk(
  "getCharacters/character",
  async (
    { page, queryString }: { page?: number; queryString?: string },
    { rejectWithValue },
  ) => {
    try {
      const data = await instance.get("character?page=" + page + queryString);
      return data.data;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.message || error.message || error,
      );
    }
  },
);

export const getCharactersById = createAsyncThunk(
  "getCharactersById/character",
  async (payload: { id: string }) => {
    const data = await instance.get("character/" + payload.id);
    return data.data;
  },
);

export const getCharactersByIds = createAsyncThunk(
  "getCharactersByIds/character",
  async (
    { queryCharacter, queryLocation, queryEpisodes }: GetCharactersByIdsTypes,
    { rejectWithValue },
  ) => {
    try {
      const requests = [];
      if (queryLocation) {
        requests.push(instance.get(`/location?${queryLocation}`));
      }

      if (queryEpisodes) {
        requests[1] = instance.get(`/episode?${queryEpisodes}`);
      }

      const [locationResponse, episodeResponse] = await Promise.all(requests);
      const ids = getCharactersIds(
        locationResponse?.data?.results || [],
        episodeResponse?.data?.results || [],
      );

      const data = await instance.get("character/" + ids);
      const filteredData = getFilteredCharacters(data.data, queryCharacter);
      return filteredData;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.message || error.message || error,
      );
    }
  },
);
