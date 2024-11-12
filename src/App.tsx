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

const ShowNavbar: React.FC = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <Navbar />;
};

const ShowFooter: React.FC = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <Footer />;
};

const App: React.FC = () => {
  return (
    <Router>
      <ShowNavbar /> {/* Conditionally render Navbar */}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
      <ShowFooter /> {/* Conditionally render Footer */}
    </Router>
  );
};

export default App;
