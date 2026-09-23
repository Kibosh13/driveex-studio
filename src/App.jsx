import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Frame } from "./shell";
import { LeadProvider } from "./ui";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Equipment } from "./pages/Equipment";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Price } from "./pages/Price";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";

const basename = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        const timer = window.setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
        return () => window.clearTimeout(timer);
      }
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [location.pathname, location.hash, location.search]);

  return null;
}

export function App() {
  return (
    <BrowserRouter basename={basename}>
      <LeadProvider>
        <ScrollManager />
        <Frame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:slug" element={<Equipment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/price-list" element={<Price />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Frame>
      </LeadProvider>
    </BrowserRouter>
  );
}
