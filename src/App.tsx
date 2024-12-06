import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Explore from "./pages/Explore";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import AboutMe from "./pages/AboutMe";
import MobileNavbar from "./Navbar/MobileNavbar";

const App: React.FC = () => {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <>
      {!isLandingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/explore"
          element={
            <>
              <Explore />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutMe />
              <Footer />
            </>
          }
        />
      </Routes>
      {!isLandingPage && (
        <div className="mobile-navbar">
          <MobileNavbar />
        </div>
      )}
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
