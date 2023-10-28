import React from "react";
import styles from "./characters.module.scss";

type CharacterInfoProps = {
  titleInfo: string;
  info: string;
};

const CharacterInfo = ({ titleInfo, info }: CharacterInfoProps) => {
  return (
    <div>
      <div className={styles.info__title_name}>{titleInfo}:</div>
      <div className={styles.info__title_info}>{info}</div>
    </div>
  );
};

export default CharacterInfo;
