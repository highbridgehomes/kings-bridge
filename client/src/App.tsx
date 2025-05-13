import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollRestoration from "./components/ScrollRestoration";
import TermsOfService from "./pages/TermsofService";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RealEstateServices from "./pages/ServicesPages/RealEstateServices";
import FacilityManagement from "./pages/ServicesPages/FacilityManagement";
import ConstructionServices from "./pages/ServicesPages/ConstructionServices";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/construction-services"
          element={<ConstructionServices />}
        />
        <Route
          path="/facility-management-services"
          element={<FacilityManagement />}
        />
        <Route path="/real-estate-services" element={<RealEstateServices />} />
      </Routes>
    </>
  );
}

export default App;
