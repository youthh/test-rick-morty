import { Character, Episodes, Location } from "../types";

export const selectOptions = {
  CHARACTER: "character",
  LOCATION: "location",
  EPISODES: "episodes",
};

export const optionsArray = [
  selectOptions.CHARACTER,
  selectOptions.LOCATION,
  selectOptions.EPISODES,
];

export const FILTER_PARAMETERS_CHARACTERS: Character = {
  name: "name",
  status: "status",
  species: "species",
  type: "type",
  gender: "gender",
};

export const FILTER_PARAMETERS_LOCATION: Location = {
  name: "name",
  type: "type",
  dimension: "dimension",
};

export const FILTER_PARAMETERS_EPISODES: Episodes = {
  name: "name",
  episodes: "episodes",
};

export const allParameters = {
  character: FILTER_PARAMETERS_CHARACTERS,
  location: FILTER_PARAMETERS_LOCATION,
  episodes: FILTER_PARAMETERS_EPISODES,
};

export type INITIAL_VALUES_TYPES = {
  select: string[];
  character: Character;
  location: Location;
  episodes: Episodes;
};

export const INITIAL_VALUES: INITIAL_VALUES_TYPES = {
  select: ["character"],
  character: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  },
  location: {
    name: "",
    type: "",
    dimension: "",
  },
  episodes: {
    name: "",
    episodes: "",
  },
};
