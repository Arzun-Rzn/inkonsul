import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../components/layout/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;