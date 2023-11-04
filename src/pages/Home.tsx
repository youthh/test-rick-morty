import React, { useEffect, useMemo } from "react";
//components
import { TopButtons, CharacterList, FabsBox } from "components";
import { Box, Pagination } from "@mui/material";
//hooks
import { useAppDispatch, useAppSelector } from "utils/Hooks";
//store
import { getCharacters } from "store/Characters/actions";
import { characterSelector, setPage } from "store/Characters/reducers";
import { CHARACTER_PAGINATION_VALUE } from "utils/Const";

export const Home = () => {
  const dispatch = useAppDispatch();
  const {
    allCharacters,
    numberOfMaxPages,
    isLoading,
    queryString,
    isUseFilter,
    page,
  } = useAppSelector(characterSelector);

  useEffect(() => {
    !isUseFilter && dispatch(getCharacters({ page, queryString }));
  }, [page]);

  const charactersFiltered = useMemo(() => {
    const start = (page - 1) * CHARACTER_PAGINATION_VALUE;
    const end = start + CHARACTER_PAGINATION_VALUE;
    const charactersToDisplay = allCharacters.slice(start, end);

    return isUseFilter ? charactersToDisplay : allCharacters;
  }, [page, allCharacters]);

  return (
    <Box>
      <TopButtons />
      <CharacterList isLoading={isLoading} allCharacters={charactersFiltered} />
      <Box sx={{ position: "relative" }}>
        <FabsBox />
        {!!charactersFiltered.length && (
          <Pagination
            onChange={(event, page) => dispatch(setPage(page))}
            page={page}
            count={numberOfMaxPages}
            variant="outlined"
            shape="rounded"
          />
        )}
      </Box>
    </Box>
  );
};
