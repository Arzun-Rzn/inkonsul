import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import AdvanceHRProgram from "../pages/AdvanceHRProgram";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/training/advance-hr-program" element={<AdvanceHRProgram />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;