import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Frame } from "./shell";
import { LeadProvider } from "./ui";
import { SiteProvider } from "./site";
import { Admin } from "./pages/Admin";
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
      <SiteProvider>
      <LeadProvider>
        <ScrollManager />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Frame><Home /></Frame>} />
          <Route path="/catalog" element={<Frame><Catalog /></Frame>} />
          <Route path="/catalog/:slug" element={<Frame><Equipment /></Frame>} />
          <Route path="/services" element={<Frame><Services /></Frame>} />
          <Route path="/projects" element={<Frame><Projects /></Frame>} />
          <Route path="/price-list" element={<Frame><Price /></Frame>} />
          <Route path="/about" element={<Frame><About /></Frame>} />
          <Route path="/contacts" element={<Frame><Contacts /></Frame>} />
          <Route path="*" element={<Frame><Home /></Frame>} />
        </Routes>
      </LeadProvider>
      </SiteProvider>
    </BrowserRouter>
  );
}
