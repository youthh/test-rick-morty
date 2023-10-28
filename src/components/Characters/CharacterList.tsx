import React from "react";
import { CharacterItem } from "./CharacterItem";
import styles from "./characters.module.scss";
import { ICharacter } from "utils/Interfaces";

type CharacterListProps = {
  allCharacters: ICharacter[];
};

export const CharacterList = ({ allCharacters }: CharacterListProps) => {
  return (
    <ul className={styles.list}>
      {allCharacters?.map((character) => {
        return (
          <li className={styles.list__item}>
            <CharacterItem character={character} />
          </li>
        );
      })}
    </ul>
  );
};
