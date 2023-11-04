import React, { useState } from "react";
//components
import { CustomButton } from "../Button";
//Utils
import { INITIAL_VALUES, INITIAL_VALUES_TYPES } from "utils/Data";
import { Form, Formik, FormikHelpers } from "formik";
import classNames from "classnames";
import FilterButtonsForm from "./FilterButtonsForm";
import { useAppDispatch, useWriteHistory } from "utils/Hooks";
import { getCharacters, getCharactersByIds } from "store/Characters/actions";
import { createCharacterQuery, formatKeyValueStrings } from "utils/Helpers";
//styles
import styles from "./FilterButtons.module.scss";
import { setIsUseFilter, setQueryString } from "store/Characters/reducers";
import { HISTORY_FILTER_LOCAL_STORAGE_KEY } from "utils/Const";
export const FilterButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const dispath = useAppDispatch();
  const { writeActionToHistoryLS } = useWriteHistory();

  const handleSubmitForm = (
    values: INITIAL_VALUES_TYPES,
    { resetForm }: FormikHelpers<INITIAL_VALUES_TYPES>,
  ) => {
    const queryCharacter = createCharacterQuery(values.character);
    const queryLocation = createCharacterQuery(values.location);
    const queryEpisodes = createCharacterQuery(values.episodes);
    const filterParameterToHistory = formatKeyValueStrings(
      values.character,
      values.location,
      values.episodes,
    );
    writeActionToHistoryLS(
      filterParameterToHistory,
      HISTORY_FILTER_LOCAL_STORAGE_KEY,
    );
    dispath(setQueryString(queryCharacter));
    if (!queryEpisodes.length && !queryLocation.length) {
      dispath(setIsUseFilter(false));
      dispath(getCharacters({ page: 1, queryString: queryCharacter }));
    } else {
      dispath(setIsUseFilter(true));
      dispath(
        getCharactersByIds({
          queryCharacter: values.character,
          queryLocation,
          queryEpisodes,
        }),
      );
    }
    setIsOpenOverlay(false);
    setIsOpen(false);
    resetForm();
  };

  return (
    <>
      <div onClick={() => isOpen && setIsOpen(false)}>
        <div
          className={classNames(styles.overlay, {
            [styles.overlay__active]: isOpenOverlay,
          })}
          onClick={() => setIsOpenOverlay(false)}
        ></div>
        <Formik
          initialValues={INITIAL_VALUES}
          enableReinitialize
          onSubmit={handleSubmitForm}
        >
          <Form className={styles.form}>
            <FilterButtonsForm
              isOpenOverlay={isOpenOverlay}
              setIsOpenOverlay={setIsOpenOverlay}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <CustomButton
              type={"submit"}
              sx={{ zIndex: "1000" }}
              variant={"contained"}
              text={"find"}
            />
          </Form>
        </Formik>
      </div>
    </>
  );
};
