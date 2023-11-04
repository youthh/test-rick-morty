export type Character = {
  id?: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
};

export type Location = {
  name: string;
  type: string;
  dimension: string;
  residents?: string[];
};

export type Episodes = {
  name: string;
  episodes: string;
  characters?: string[];
};

export type GetCharactersByIdsTypes = {
  queryCharacter: Character;
  queryLocation: string;
  queryEpisodes: string;
};

export type Filter = {
  characters?: Character;
  location?: Location;
  episodes?: Episodes;
};

export type FilterHistorySearch = {
  characters?: string[];
  location?: string[];
  episodes?: string[];
};
