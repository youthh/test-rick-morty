import React from "react";
import { ICharacter } from "utils/Interfaces";
import CharacterInfo from "./CharacterInfo";
import classnames from "classnames";
import styles from "./characters.module.scss";

type CharacterItemProps = {
  character: ICharacter;
};

export const CharacterItem = ({ character }: CharacterItemProps) => {
  const { name, image, status, species, location, origin } = character;
  return (
    <div className={styles.character}>
      <div>
        <img className={styles.character__img} src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.info__name}>{name}</h3>
        <div className={classnames(styles.status, styles[status])}>
          <div>{status}</div>-<div>{species}</div>
        </div>
        <CharacterInfo titleInfo={"Last known location"} info={location.name} />
        <CharacterInfo titleInfo={"First seen in"} info={origin.name} />
      </div>
    </div>
  );
};
