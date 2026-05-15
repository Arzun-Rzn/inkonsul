import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/layout/ScrollToTop";

import Home from "../pages/Home";
import AdvanceHRProgram from "../pages/AdvanceHRProgram";
import SoftwareTraining from "../pages/SoftwareTraining";
import DroneTraining from "../pages/DroneTraining";
import SocialLaunchpad from "../pages/SocialLaunchpad";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route 
            path="/training/advance-hr-program" 
            element={<AdvanceHRProgram />} 
          />

          <Route
            path="/training/software-training"
            element={<SoftwareTraining />}
          />

          <Route
            path="/training/drone-training"
            element={<DroneTraining />}
          />

          <Route
            path="/training/social-launchpad"
            element={<SocialLaunchpad />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;