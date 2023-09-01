import { lazy } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

const Main = lazy(() => import("./main"));
const SingleClothingPage = lazy(() => import("./single-clothing"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="cloth/:id" element={<SingleClothingPage/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};