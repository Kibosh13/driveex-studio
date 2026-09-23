import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categoryFilters, equipment } from "../data";
import { MachineCard, PageHero, usePageTitle } from "../ui";

export function Catalog() {
  usePageTitle("Каталог");
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const requested = params.get("category");
    const requestedQuery = params.get("q") || "";
    if (requested && categoryFilters.some(([value]) => value === requested)) setCategory(requested);
    else setCategory("all");
    setQuery(requestedQuery);
  }, [params]);

  const filtered = useMemo(
    () =>
      equipment.filter((item) => {
        const categoryMatch = category === "all" || item.category === category;
        const searchMatch = item.name.toLowerCase().includes(query.trim().toLowerCase());
        return categoryMatch && searchMatch;
      }),
    [category, query],
  );

  function updateCategory(value) {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete("category");
    else next.set("category", value);
    setParams(next, { replace: true });
  }

  function updateQuery(value) {
    setQuery(value);
    const next = new URLSearchParams(params);
    if (value.trim()) next.set("q", value);
    else next.delete("q");
    setParams(next, { replace: true });
  }

  return (
    <>
      <PageHero
        eyebrow="Каталог"
        title="Спецтехника в аренду"
        text="Сравните характеристики и стоимость. Если не уверены в выборе, опишите задачу — мы подберём машину под условия объекта."
        image="media/hero-excavator.jpg"
      />
      <section className="section">
        <div className="shell">
          <div className="catalog-tools">
            <label className="search-line">
              <input
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Найти технику по названию"
                aria-label="Поиск по каталогу"
              />
            </label>
            <p>Найдено: {filtered.length}</p>
          </div>
          <div className="chips" role="group" aria-label="Категории техники">
            {categoryFilters.map(([value, label]) => (
              <button key={value} type="button" className={category === value ? "is-on" : ""} onClick={() => updateCategory(value)}>
                {label}
              </button>
            ))}
          </div>
          {filtered.length ? (
            <div className="machine-grid">
              {filtered.map((item) => (
                <MachineCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>Ничего не нашли</h2>
              <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
