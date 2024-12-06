import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Explore from "./pages/Explore";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import AboutMe from "./pages/AboutMe";
import MobileNavbar from "./Navbar/MobileNavbar";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <Explore />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutMe />
            </>
          }
        />
      </Routes>

      <Footer />

      <div className="mobile-navbar">
        <MobileNavbar />
      </div>
    </Router>
  );
};

export default App;
