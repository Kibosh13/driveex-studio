import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { address, asset, email, emailHref, phone, phoneHref, region, rentalGroups, services } from "./data";
import { LeadModal, useLead } from "./ui";

const aboutLinks = [
  ["О компании", "/about"],
  ["Наши объекты", "/projects"],
  ["Условия аренды", "/price-list"],
  ["Контакты", "/contacts"],
];

export function Frame({ children }) {
  const location = useLocation();
  return (
    <>
      <Header />
      <main key={location.pathname} className="view">
        {children}
      </main>
      <Footer />
      <LeadModal />
    </>
  );
}

function Header() {
  const lead = useLead();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [openPanel, setOpenPanel] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
    setOpenPanel("");
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("lock", menu);
    return () => document.body.classList.remove("lock");
  }, [menu]);

  function search(event) {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/catalog?q=${encodeURIComponent(value)}` : "/catalog");
    setQuery("");
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="topbar">
        <span>{region}</span>
        <span className="dot" aria-hidden="true" />
        <span>На связи 24/7</span>
        <a href={phoneHref}>{phone}</a>
      </div>
      <div className="header-bar shell">
        <Link to="/" className="logo" aria-label="DriveEX — главная">
          <img src={asset("media/driveex-logo-cropped.png")} alt="DriveEX" />
        </Link>

        <nav className="desk-nav" aria-label="Основная навигация">
          <div
            className={`nav-drop ${openPanel === "tech" ? "is-open" : ""}`}
            onMouseEnter={() => setOpenPanel("tech")}
            onMouseLeave={() => setOpenPanel("")}
          >
            <button type="button" aria-expanded={openPanel === "tech"} onClick={() => setOpenPanel(openPanel === "tech" ? "" : "tech")}>
              Аренда спецтехники
            </button>
            <div className="mega">
              {rentalGroups.map((group) => (
                <div key={group.title}>
                  <p>{group.title}</p>
                  {group.links.map(([label, href]) => (
                    <Link key={label} to={href}>
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link className="mega-all" to="/catalog">
                Весь каталог →
              </Link>
            </div>
          </div>

          <div
            className={`nav-drop ${openPanel === "services" ? "is-open" : ""}`}
            onMouseEnter={() => setOpenPanel("services")}
            onMouseLeave={() => setOpenPanel("")}
          >
            <button type="button" aria-expanded={openPanel === "services"} onClick={() => setOpenPanel(openPanel === "services" ? "" : "services")}>
              Услуги
            </button>
            <div className="mini-menu">
              {services.map((service) => (
                <Link key={service.slug} to={`/services#${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/projects">Галерея</NavLink>
          <NavLink to="/price-list">Прайс-лист</NavLink>

          <div
            className={`nav-drop ${openPanel === "about" ? "is-open" : ""}`}
            onMouseEnter={() => setOpenPanel("about")}
            onMouseLeave={() => setOpenPanel("")}
          >
            <button type="button" aria-expanded={openPanel === "about"} onClick={() => setOpenPanel(openPanel === "about" ? "" : "about")}>
              О компании
            </button>
            <div className="mini-menu">
              {aboutLinks.map(([label, href]) => (
                <Link key={label} to={href}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>

        <div className="header-actions">
          <form className="head-search" onSubmit={search}>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Техника или модель"
              aria-label="Найти технику в аренду"
            />
            <button type="submit">Найти</button>
          </form>
          <button className="btn btn-orange btn-sm" type="button" onClick={() => lead.show()}>
            Заказать звонок
          </button>
          <button className="burger" type="button" aria-label={menu ? "Закрыть меню" : "Открыть меню"} aria-expanded={menu} onClick={() => setMenu((value) => !value)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      {menu && (
        <div className="mobile-menu">
          <form className="head-search mobile-search" onSubmit={search}>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Техника или модель"
              aria-label="Найти технику в аренду"
            />
            <button type="submit">Найти</button>
          </form>
          <details>
            <summary>Аренда спецтехники</summary>
            {rentalGroups.map((group) => (
              <div key={group.title} className="mobile-group">
                <p>{group.title}</p>
                {group.links.map(([label, href]) => (
                  <Link key={label} to={href}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </details>
          <details>
            <summary>Услуги</summary>
            {services.map((service) => (
              <Link key={service.slug} to={`/services#${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </details>
          <Link to="/projects">Галерея</Link>
          <Link to="/price-list">Прайс-лист</Link>
          <details>
            <summary>О компании</summary>
            {aboutLinks.map(([label, href]) => (
              <Link key={label} to={href}>
                {label}
              </Link>
            ))}
          </details>
          <Link to="/contacts">Контакты</Link>
          <a href={phoneHref}>{phone}</a>
          <button className="btn btn-orange" type="button" onClick={() => lead.show()}>
            Заказать звонок
          </button>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <img src={asset("media/driveex-logo-cropped.png")} alt="DriveEX" />
          <p>Аренда спецтехники с оператором, топливом и доставкой на объект.</p>
        </div>
        <div>
          <h3>Разделы</h3>
          <Link to="/catalog">Аренда спецтехники</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/projects">Галерея</Link>
          <Link to="/price-list">Прайс-лист</Link>
          <Link to="/about">О компании</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
        <div>
          <h3>Техника</h3>
          <Link to="/catalog?category=excavators">Экскаваторы</Link>
          <Link to="/catalog?category=loaders">Погрузчики</Link>
          <Link to="/catalog?category=cranes">Автокраны</Link>
          <Link to="/catalog?category=transport">Самосвалы</Link>
        </div>
        <div>
          <h3>Контакты</h3>
          <a href={phoneHref}>{phone}</a>
          <a href={emailHref}>{email}</a>
          <span>{address}</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 DriveEX</span>
        <span>Информация не является публичной офертой</span>
      </div>
    </footer>
  );
}
