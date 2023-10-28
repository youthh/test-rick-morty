import React, { useEffect, useState } from "react";
import { TopButtons, CharacterList } from "components";
import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../utils/Hooks/reduxHooks";
import { getCharacters } from "../store/Characters/actions";
import { characterSelector } from "../store/Characters/reducers";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { allCharacters, pages, isLoading } = useAppSelector(characterSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(getCharacters(page));
  }, [page]);

  return (
    <div>
      <TopButtons />
      <CharacterList allCharacters={allCharacters} />
      <Pagination
        onChange={(event, page) => setPage(page)}
        page={page}
        count={pages}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};
