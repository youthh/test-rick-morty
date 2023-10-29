import React from "react";
import { ICharacter } from "utils/Interfaces";
import CharacterInfo from "./CharacterInfo";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "utils/Hooks/reduxHooks";
import { characterSelector } from "store/Characters/reducers";
import { FabsBox } from "../FabsBox";
import { Fade } from "@mui/material";
import styles from "./characters.module.scss";

type CharacterItemProps = {
  character: ICharacter;
  additionalClass?: string;
};

export const CharacterItem = ({
  character,
  additionalClass = "",
}: CharacterItemProps) => {
  const { name, image, status, species, location, origin, id } = character;

  const { currentCharacter, isLoading } = useAppSelector(characterSelector);

  return (
    <Fade timeout={700} in={!isLoading}>
      <div className={classnames(styles.character, styles[additionalClass])}>
        <div>
          <img
            className={classnames(
              styles.character__img,
              styles[additionalClass],
            )}
            src={image}
            alt={name}
          />
        </div>
        <div className={styles.info}>
          {currentCharacter ? (
            <h3 className={styles.info__name}>{name}</h3>
          ) : (
            <NavLink to={"/" + id}>
              <h3 className={styles.info__name}>{name}</h3>
            </NavLink>
          )}
          <div className={classnames(styles.status, styles[status])}>
            <div>{status}</div>-<div>{species}</div>
          </div>
          <CharacterInfo
            titleInfo={"Last known location"}
            info={location.name}
          />
          <CharacterInfo titleInfo={"First seen in"} info={origin.name} />
        </div>
        {currentCharacter && <FabsBox isDisabledDownloadBtn />}
      </div>
    </Fade>
  );
};
