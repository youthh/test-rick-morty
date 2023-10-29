import React, { useEffect, useState } from "react";
//components
import { TopButtons, CharacterList, FabsBox } from "components";
import { Box, Pagination } from "@mui/material";
//hooks
import { useAppDispatch, useAppSelector } from "utils/Hooks";
//store
import { getCharacters } from "store/Characters/actions";
import { characterSelector } from "store/Characters/reducers";
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
    <Box>
      <TopButtons />
      <CharacterList isLoading={isLoading} allCharacters={allCharacters} />
      <Box sx={{ position: "relative" }}>
        <FabsBox />
        <Pagination
          onChange={(event, page) => setPage(page)}
          page={page}
          count={pages}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};
