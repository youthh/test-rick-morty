import React from "react";
import { ICharacter } from "utils/Interfaces";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import { HISTORY_LOCAL_STORAGE_KEY } from "utils/Const";
//components
import CharacterInfo from "./CharacterInfo";
import { FabsBox } from "../FabsBox";
import { Fade } from "@mui/material";
//hooks
import { useAppSelector, useWriteHistory } from "utils/Hooks";
import { characterSelector } from "store/Characters/reducers";
//styles
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

  const { writeActionToHistoryLS } = useWriteHistory();

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
            <NavLink
              onClick={() =>
                writeActionToHistoryLS(
                  "Watched info about " + name,
                  HISTORY_LOCAL_STORAGE_KEY,
                )
              }
              to={"/" + id}
            >
              <h3 className={styles.info__name}>{name}</h3>
            </NavLink>
          )}
          <div className={classnames(styles.status, styles[status])}>
            <div>{status}</div>-<div>{species}</div>
          </div>
          <CharacterInfo
            titleInfo={"Last known location"}
            info={location?.name}
          />
          <CharacterInfo titleInfo={"First seen in"} info={origin?.name} />
        </div>
        {currentCharacter && <FabsBox isDisabledDownloadBtn />}
      </div>
    </Fade>
  );
};
