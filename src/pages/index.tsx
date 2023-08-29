import { lazy } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

const Main = lazy(() => import("./main"));
const SingleClothPage = lazy(() => import("./single-cloth"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="cloth/:id" element={<SingleClothPage/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};