import { ICharacter } from "./Interfaces";

export const characters: ICharacter[] = [
  {
    id: 361,
    name: "Toxic Rick",
    status: "Dead",
    species: "Humanoid",
    type: "Rick's Toxic Side",
    gender: "Male",
    origin: {
      name: "Alien Spa",
      url: "https://rickandmortyapi.com/api/location/64",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/27"],
    url: "https://rickandmortyapi.com/api/character/361",
    created: "2018-01-10T18:20:41.703Z",
  },
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
];

export const selectOptions = {
  CHARACTER: "Character",
  LOCATION: "Location",
  EPISODES: "Episodes",
};

export const optionsArray = [
  selectOptions.CHARACTER,
  selectOptions.LOCATION,
  selectOptions.EPISODES,
];
