import { lazy } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

const MainPage = lazy(() => import("./main"));
const SingleClothingPage = lazy(() => import("./single-clothing"));
const CategoryPage = lazy(() => import("./category"));
const CartPage = lazy(() => import("./cart"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cloth/:id" element={<SingleClothingPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};