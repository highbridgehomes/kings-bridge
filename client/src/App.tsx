import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofService";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollRestoration from "./components/ScrollRestoration";
import OurServices from "./pages/OurServices";
import LearnMore from "./pages/LearnMore";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </>
  );
}

export default App;
