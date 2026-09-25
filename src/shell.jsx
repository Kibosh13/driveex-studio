import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { address, asset, catalogSections, email, emailHref, equipment, money, phone, phoneHref, region, rentalGroups, services } from "./data";
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
  const [catalogOpen, setCatalogOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
    setOpenPanel("");
    setCatalogOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setCatalogOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} onMouseLeave={() => setCatalogOpen(false)}>
      <div className="topbar">
        <span>{region}</span>
        <span className="dot" aria-hidden="true" />
        <span>На связи 24/7</span>
        <a href={phoneHref}>{phone}</a>
      </div>
      <div className={`header-card ${catalogOpen ? "is-open" : ""}`}>
      <div className="header-bar">
        <Link to="/" className="logo" aria-label="DriveEX — главная">
          <img src={asset("media/logo.png")} alt="DriveEX" />
        </Link>

        <nav className="desk-nav" aria-label="Основная навигация">
          <button
            className={`nav-catalog ${catalogOpen ? "is-on" : ""}`}
            type="button"
            aria-expanded={catalogOpen}
            onMouseEnter={() => {
              setOpenPanel("");
              setCatalogOpen(true);
            }}
            onClick={() => setCatalogOpen(true)}
          >
            Аренда спецтехники
          </button>

          <div
            className={`nav-drop ${openPanel === "services" ? "is-open" : ""}`}
            onMouseEnter={() => {
              setCatalogOpen(false);
              setOpenPanel("services");
            }}
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
            onMouseEnter={() => {
              setCatalogOpen(false);
              setOpenPanel("about");
            }}
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
          <button className="btn btn-orange btn-sm" type="button" onClick={() => lead.show()}>
            Заказать звонок
          </button>
          <button className="burger" type="button" aria-label={menu ? "Закрыть меню" : "Открыть меню"} aria-expanded={menu} onClick={() => setMenu((value) => !value)}>
            <span />
            <span />
          </button>
        </div>
      </div>

      <CatalogShelf
        open={catalogOpen}
        setOpen={setCatalogOpen}
        query={query}
        setQuery={setQuery}
        onSearch={search}
      />
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

function CatalogShelf({ open, setOpen, query, setQuery, onSearch }) {
  const [sectionId, setSectionId] = useState(catalogSections[0].id);
  const [suggest, setSuggest] = useState(false);
  const section = catalogSections.find((item) => item.id === sectionId) ?? catalogSections[0];
  const picks = equipment.filter((item) => section.equipmentSlugs?.includes(item.slug));
  const servicePicks = services.filter((item) => section.serviceSlugs?.includes(item.slug));
  const needle = query.trim().toLowerCase();
  const matches = needle
    ? equipment.filter((item) => `${item.name} ${item.categoryLabel}`.toLowerCase().includes(needle)).slice(0, 5)
    : [];

  function close() {
    setOpen(false);
    setSuggest(false);
  }

  return (
    <div className="catalog-shelf">
      <div className="shell catalog-row">
        <button
          className={open ? "is-on" : ""}
          type="button"
          aria-expanded={open}
          onMouseEnter={() => setOpen(true)}
          onClick={() => {
            const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            if (canHover) setOpen(true);
            else setOpen((value) => !value);
          }}
        >
          <svg className="grid-icon" viewBox="0 0 16 16" aria-hidden="true">
            <rect x="1" y="1" width="6" height="6" rx="1.2" />
            <rect x="9" y="1" width="6" height="6" rx="1.2" />
            <rect x="1" y="9" width="6" height="6" rx="1.2" />
            <rect x="9" y="9" width="6" height="6" rx="1.2" />
          </svg>
          Каталог
        </button>
        <form className="catalog-search" onSubmit={(event) => { onSearch(event); close(); }}>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSuggest(true);
            }}
            onFocus={() => {
              if (query.trim()) setSuggest(true);
            }}
            placeholder="Техника или модель"
            aria-label="Найти технику в аренду"
          />
          <button type="submit">Найти</button>
          {suggest && needle ? (
            <div className="suggest" role="listbox">
              {matches.length ? (
                matches.map((item) => (
                  <Link key={item.slug} to={`/catalog/${item.slug}`} onClick={close}>
                    <img src={asset(item.image)} alt="" />
                    <span>{item.name}</span>
                    <b>от {money(item.hourPrice)}/час</b>
                  </Link>
                ))
              ) : (
                <button type="submit">Искать «{query.trim()}» в каталоге</button>
              )}
            </div>
          ) : null}
        </form>
      </div>

      <div className={`catalog-fold ${open ? "is-open" : ""}`}>
        <div className="catalog-fold-inner">
          <div className="catalog-board">
            <aside>
              <p>Основные разделы</p>
              {catalogSections.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={item.id === section.id ? "is-on" : ""}
                  onMouseEnter={() => setSectionId(item.id)}
                  onFocus={() => setSectionId(item.id)}
                  onClick={close}
                >
                  {item.title}
                  <i aria-hidden="true">›</i>
                </Link>
              ))}
              <Link className="catalog-all" to="/catalog" onClick={close}>
                Весь каталог <i aria-hidden="true">→</i>
              </Link>
            </aside>
            <div className="catalog-subs">
              <p>Подразделы</p>
              <h3>{section.title}</h3>
              <div>
                {section.links.map(([label, href]) => (
                  <Link key={label} to={href} onClick={close}>
                    {label}
                    <i aria-hidden="true">›</i>
                  </Link>
                ))}
              </div>
              <div className="catalog-help">
                <strong>Не знаете, что выбрать?</strong>
                <span>Опишите задачу — подберём машину, навесное оборудование и рассчитаем подачу.</span>
                <Link to="/contacts" onClick={close}>
                  Получить консультацию →
                </Link>
              </div>
            </div>
            <div className="catalog-picks">
              <p>Рекомендуем</p>
              {picks.map((item) => (
                <Link key={item.slug} to={`/catalog/${item.slug}`} onClick={close}>
                  <img src={asset(item.image)} alt="" />
                  <span>
                    <b>{item.name}</b>
                    <em>от {money(item.hourPrice)}/час</em>
                  </span>
                </Link>
              ))}
              {servicePicks.map((item) => (
                <Link key={item.slug} className="pick-text" to={`/services#${item.slug}`} onClick={close}>
                  <b>{item.title}</b>
                  <span>{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <img src={asset("media/logo.png")} alt="DriveEX" />
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
