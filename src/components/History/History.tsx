import React from "react";
import { Modal } from "@mui/material";
import { CustomButton } from "../Button";
import styles from "./history.module.scss";
import {
  HISTORY_FILTER_LOCAL_STORAGE_KEY,
  HISTORY_LOCAL_STORAGE_KEY,
} from "utils/Const";
import { useWriteHistory } from "utils/Hooks";
import { Filter, FilterHistorySearch } from "utils/types";
import HistoryFilterCategory from "./HistoryFilterCategory";
type HistoryProps = {
  open: boolean;
  handleClose: () => void;
};

export const History = ({ open, handleClose }: HistoryProps) => {
  const { getLocalStorageData } = useWriteHistory();

  const historyItems = getLocalStorageData<string[]>(HISTORY_LOCAL_STORAGE_KEY);

  const firstFilter = (getLocalStorageData<FilterHistorySearch[]>(
    HISTORY_FILTER_LOCAL_STORAGE_KEY,
  ) ?? [])[0];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.history}>
          <h4 className={styles.history__title}>History</h4>
          <HistoryFilterCategory
            nameOfCategory={"Characters"}
            actions={firstFilter?.characters || []}
          />
          <HistoryFilterCategory
            nameOfCategory={"Location"}
            actions={firstFilter?.location || []}
          />
          <HistoryFilterCategory
            nameOfCategory={"Episodes"}
            actions={firstFilter?.episodes || []}
          />
          <HistoryFilterCategory
            nameOfCategory={"Viewed Info characters"}
            actions={historyItems || []}
          />

          <CustomButton
            onClick={handleClose}
            sx={{
              color: "black",
              fontWeight: "500",
              justifyContent: "flex-start",
              paddingLeft: "0",
            }}
            text={"Close"}
            variant={"outlined"}
          />
        </div>
      </Modal>
    </>
  );
};
