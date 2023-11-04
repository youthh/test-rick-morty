import React from "react";
import styles from "./history.module.scss";

type HistoryFilterCategoryProps = {
  nameOfCategory: string;
  actions: string[];
};

const HistoryFilterCategory = ({
  nameOfCategory,
  actions,
}: HistoryFilterCategoryProps) => {
  return (
    <div>
      <div className={styles.history__parameter}>{nameOfCategory}:</div>

      <ul className={styles.history__list}>
        {actions.length
          ? actions.map((item) => {
              return <li key={item}>{item}</li>;
            })
          : "No filter values"}
      </ul>
    </div>
  );
};

export default HistoryFilterCategory;
