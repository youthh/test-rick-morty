import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CharacterPage } from "pages";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/:id"} element={<CharacterPage />} />
    </Routes>
  );
};
