import { Routes, Route } from "react-router-dom";
import { Layout } from "containers/Layout";
export const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  </>
);
