import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import HolidayPackagesPage from "./pages/HolidayPackagesPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/holiday-packages" element={<HolidayPackagesPage />} />
        <Route path="/holiday-packages/:id" element={<ExperienceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;