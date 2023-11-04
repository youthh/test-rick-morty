import React from "react";
import { CharacterItem } from "./CharacterItem";
import { ICharacter } from "utils/Interfaces";
import { OverlayLoading } from "../OverlayLoading";
import styles from "./characters.module.scss";

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
        {allCharacters?.length ? (
          allCharacters?.map((character) => {
            return (
              <li className={styles.list__item} key={character.id}>
                <CharacterItem character={character} />
              </li>
            );
          })
        ) : (
          <div>Not Found</div>
        )}
      </ul>
    </OverlayLoading>
  );
};
