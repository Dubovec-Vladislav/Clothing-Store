import { lazy } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

const Main = lazy(() => import("./main"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};