import { ICharacter } from "../Interfaces";
import { Character, Episodes, Filter, Location } from "../types";
import {
  FILTER_PARAMETERS_CHARACTERS,
  FILTER_PARAMETERS_EPISODES,
  FILTER_PARAMETERS_LOCATION,
} from "../Data";

export const arrayToBlob = (data: ICharacter[]) => {
  const headers = Object.keys(data[0]).join(",") + "\n";
  const csvData = data.map((item) => {
    const formatProperty = (value: unknown) => {
      if (Array.isArray(value)) return value.join(";");
      if (value && typeof value === "object")
        return Object.values(value).join(",");
      return value;
    };

    const row = Object.values(item)
      .map((value) => formatProperty(value))
      .join(",");

    return row;
  });

  const csv = headers + csvData.join("\n");

  return new Blob([csv], { type: "text/csv" });
};

export const createCharacterQuery = (
  character: Character | Episodes | Location,
) => {
  return Object.entries(character)
    .filter(([key, value]) => value !== "" && value !== undefined)
    .map(([key, value]) => `&${key}=${value}`)
    .join("");
};

export const getParameterField = (nameFieldOfParameter: string) => {
  if (nameFieldOfParameter === "character") {
    return FILTER_PARAMETERS_CHARACTERS;
  } else if (nameFieldOfParameter === "location") {
    return FILTER_PARAMETERS_LOCATION;
  }

  return FILTER_PARAMETERS_EPISODES;
};

export const formatKeyValueStrings = (
  character: Character,
  location: Location,
  episodes: Episodes,
): Record<string, string[]> => {
  const result: Record<string, string[]> = {
    location: [],
    episodes: [],
    characters: [],
  };

  Object.entries(character).forEach(([key, value]) => {
    if (value) {
      result.characters.push(`Character was searched by ${key}: ${value}`);
    }
  });

  Object.entries(location).forEach(([key, value]) => {
    if (value) {
      result.location.push(`Character was searched by ${key}: ${value}`);
    }
  });

  Object.entries(episodes).forEach(([key, value]) => {
    if (value) {
      result.episodes.push(`Character was searched by ${key}: ${value}`);
    }
  });

  return result;
};

export const getCharactersIds = (
  location: Location[] | undefined,
  episodes: Episodes[] | undefined,
) => {
  const charactersIdsFromLocation = location
    ? location.flatMap(
        (item: Location) =>
          (item.residents || [])
            .map((item) => (item ? Number(item.split("/").at(-1)) : null))
            .filter((id) => id !== null) as number[],
      )
    : [];

  const charactersIdsFromEpisodes = episodes
    ? episodes.flatMap(
        (item: Episodes) =>
          (item.characters || [])
            .map((item) => (item ? Number(item.split("/").at(-1)) : null))
            .filter((id) => id !== null) as number[],
      )
    : [];

  if (charactersIdsFromLocation.length === 0) {
    return charactersIdsFromEpisodes;
  } else if (charactersIdsFromEpisodes.length === 0) {
    return charactersIdsFromLocation;
  }

  const combinedArray = [
    ...charactersIdsFromLocation,
    ...charactersIdsFromEpisodes,
  ];

  return combinedArray.filter(
    (number, index) => combinedArray.indexOf(number) !== index,
  );
};

export const getFilteredCharacters = (
  characters: ICharacter[],
  filters: Character,
) => {
  return characters.filter((character) => {
    for (const key in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, key)) {
        const typeKey: keyof Character = key as keyof Character;
        const characterValue = character[typeKey] as string | undefined;
        const filterValue = filters[typeKey] as string | undefined;

        if (characterValue && filterValue) {
          if (
            !characterValue.toLowerCase().includes(filterValue.toLowerCase())
          ) {
            return false;
          }
        }
      }
    }
    return true;
  });
};
