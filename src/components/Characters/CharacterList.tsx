import React from "react";
import { CharacterItem } from "./CharacterItem";
import styles from "./characters.module.scss";
import { ICharacter } from "utils/Interfaces";
import { OverlayLoading } from "../OverlayLoading";

type CharacterListProps = {
  allCharacters: ICharacter[];
  isLoading: boolean;
};

export const CharacterList = ({
  allCharacters,
  isLoading,
}: CharacterListProps) => {
  return (
    <OverlayLoading isLoading={isLoading}>
      <ul className={styles.list}>
        {allCharacters?.map((character) => {
          return (
            <li className={styles.list__item} key={character.id}>
              <CharacterItem character={character} />
            </li>
          );
        })}
      </ul>
    </OverlayLoading>
  );
};
