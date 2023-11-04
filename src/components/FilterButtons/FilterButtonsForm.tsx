import React, { ReactNode } from "react";
import { Field, useFormikContext } from "formik";
import {
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { INITIAL_VALUES_TYPES, optionsArray } from "utils/Data";
import styles from "./FilterButtons.module.scss";
import RenderInputsFIelds from "./RenderInputsFIelds";
import { getParameterField } from "utils/Helpers";

type FilterButtonsFormProps = {
  isOpen: boolean;
  isOpenOverlay: boolean;
  setIsOpen: React.Dispatch<boolean>;
  setIsOpenOverlay: React.Dispatch<boolean>;
};

const FilterButtonsForm = ({
  isOpen,
  setIsOpen,
  setIsOpenOverlay,
  isOpenOverlay,
}: FilterButtonsFormProps) => {
  const { values, setFieldValue } = useFormikContext<INITIAL_VALUES_TYPES>();
  const handleChangeValue = (
    e: SelectChangeEvent<string[]>,
    option: ReactNode,
  ) => {
    const optionValue = (option as React.ReactElement<{ value: string }>).props
      .value;
    if (!values.select.includes(optionValue)) {
      setFieldValue("select", [...values.select, optionValue]);
    } else {
      const newValue = [
        ...values.select.filter((optionItem) => optionItem !== optionValue),
      ];
      setFieldValue("select", newValue);
    }
  };

  const handleOpenSelect = () => {
    setIsOpen(true);
    setIsOpenOverlay(true);
  };

  return (
    <>
      <Field
        component={Select}
        onChange={handleChangeValue}
        name={"select"}
        multiple
        open={isOpen}
        onClick={handleOpenSelect}
        value={["Select Item"]}
        placeholder={"Select Item"}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected: string[]) => selected?.join(", ")}
      >
        {optionsArray.map((name) => (
          <MenuItem key={name} value={name}>
            <ListItemText primary={name} />
            <Checkbox checked={values.select.includes(name)} />
          </MenuItem>
        ))}
      </Field>
      <div className={styles.filter__inputs} onClick={() => setIsOpen(false)}>
        {values.select.map((item) => {
          return (
            <RenderInputsFIelds
              key={item}
              isOpenOverlay={isOpenOverlay}
              isOpen={isOpen}
              filter_parameter_field={getParameterField(item)}
              nameParameter={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default FilterButtonsForm;
