import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharactersById } from "store/Characters/actions";
import { useAppDispatch, useAppSelector } from "utils/Hooks";
import { CharacterItem } from "components";
import {
  characterSelector,
  setNullCurrentCharacter,
} from "store/Characters/reducers";

export const CharacterPage = () => {
  const path = useParams();
  const dispatch = useAppDispatch();
  const { currentCharacter } = useAppSelector(characterSelector);

  useEffect(() => {
    dispatch(getCharactersById({ id: path.id || "" }));

    return () => {
      dispatch(setNullCurrentCharacter());
    };
  }, []);
  return (
    <div>
      {currentCharacter && (
        <CharacterItem
          additionalClass={"current"}
          character={currentCharacter}
        />
      )}
    </div>
  );
};
