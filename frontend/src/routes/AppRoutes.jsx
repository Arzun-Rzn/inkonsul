import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default AppRoutes;