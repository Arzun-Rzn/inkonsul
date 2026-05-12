import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import AdvanceHRProgram from "../pages/AdvanceHRProgram";
import EnquiryPage from "../pages/EnquiryPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/training/advance-hr-program" element={<AdvanceHRProgram />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;