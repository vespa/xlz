import { Routes, Route, Outlet } from "react-router-dom";

export const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  </>
);

const Layout = () => {
  return (
    <div>
      this is only a test
      <Outlet />
    </div>
  );
};
