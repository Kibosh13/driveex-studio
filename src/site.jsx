import { createContext, useContext, useEffect, useState } from "react";
import { asset, seo, phone, email, address, region, socials, equipment, homeCategories, services, faqs, projects, categoryFilters } from "./data";

const SiteContext = createContext(null);

export function initialContent() {
  return {
    seo,
    phone,
    email,
    address,
    region,
    socials,
    equipment,
    homeCategories,
    services,
    faqs,
    projects,
    categoryFilters,
    directorName: "Монто Максим Александрович",
    directorRole: "Генеральный директор DriveEX",
    directorText: "Руководит развитием компании, отвечает за качество сервиса, состояние автопарка и выполнение обязательств перед заказчиками.",
    offerNote: "Указанные цены не являются публичной офертой",
  };
}

export function SiteProvider({ children }) {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    fetch(asset("content.json"), { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.equipment) setContent({ ...initialContent(), ...data });
      })
      .catch(() => {});
  }, []);

  return <SiteContext.Provider value={{ content, setContent }}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) return { content: initialContent(), setContent: () => {} };
  return value;
}
