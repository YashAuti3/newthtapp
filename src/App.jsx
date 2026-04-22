import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BookingSection from "./components/BookingSection";
import Footer from "./components/Footer";
import TruckPages from "./components/TruckPages";

import HolidayPackagesPage from "./pages/HolidayPackagesPage";
import ExperienceDetailPage from "./pages/ExperienceDetailPage";

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BookingSection />
    </>
  );
}

function Layout() {
  const location = useLocation();

  const hideLayout = location.pathname === "/truck";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/truck" element={<TruckPages />} />

        {/* Your holiday routes */}
        <Route path="/holiday-packages" element={<HolidayPackagesPage />} />
        <Route
          path="/holiday-packages/:id"
          element={<ExperienceDetailPage />}
        />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;