import { Routes, Route } from "react-router-dom";
import { Layout } from "containers/Layout";
import { SearchPage } from "containers/SearchPage";

export const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SearchPage />} />
      </Route>
    </Routes>
  </>
);
