import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { asset, money } from "./data";

const LeadContext = createContext(null);

export function useLead() {
  return useContext(LeadContext);
}

export function LeadProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [equipmentName, setEquipmentName] = useState("");

  const api = useMemo(
    () => ({
      open,
      equipmentName,
      show(name = "") {
        setEquipmentName(name);
        setOpen(true);
      },
      close() {
        setOpen(false);
      },
    }),
    [open, equipmentName],
  );

  return <LeadContext.Provider value={api}>{children}</LeadContext.Provider>;
}

export function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("is-in");
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-in");
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return (
    <Tag ref={setNode} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — DriveEX` : "DriveEX — аренда спецтехники в Москве";
  }, [title]);
}

function formatPhone(raw) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (digits && !digits.startsWith("7")) digits = `7${digits}`;
  digits = digits.slice(0, 11);
  const area = digits.slice(1, 4);
  const mid = digits.slice(4, 7);
  const tailA = digits.slice(7, 9);
  const tailB = digits.slice(9, 11);
  let out = "+7";
  if (area) out += ` (${area}`;
  if (area.length === 3) out += ")";
  if (mid) out += ` ${mid}`;
  if (tailA) out += `-${tailA}`;
  if (tailB) out += `-${tailB}`;
  return digits ? out : "";
}

export function LeadForm({ equipmentName = "", compact = false }) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [task, setTask] = useState(equipmentName ? `Интересует ${equipmentName}` : "");

  useEffect(() => {
    setTask(equipmentName ? `Интересует ${equipmentName}` : "");
    setSent(false);
  }, [equipmentName]);

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span className="success-mark" aria-hidden="true">
          ✓
        </span>
        <h3>Заявка принята</h3>
        <p>Перезвоним, уточним объект и подготовим расчёт.</p>
      </div>
    );
  }

  return (
    <form
      className={compact ? "lead-form compact" : "lead-form"}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        <span>Ваше имя</span>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Ваше имя" required autoComplete="name" />
      </label>
      <label>
        <span>Телефон</span>
        <input
          value={phone}
          onChange={(event) => setPhone(formatPhone(event.target.value))}
          placeholder="+7 (___) ___-__-__"
          inputMode="tel"
          autoComplete="tel"
          required
        />
      </label>
      <label>
        <span>Описание задачи</span>
        <textarea
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Что нужно сделать и где находится объект?"
          rows={compact ? 3 : 4}
        />
      </label>
      <button className="btn btn-orange" type="submit">
        Получить расчёт <i aria-hidden="true">→</i>
      </button>
      <p className="fine">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
    </form>
  );
}

export function LeadModal() {
  const lead = useLead();

  useEffect(() => {
    if (!lead?.open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") lead.close();
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("lock");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("lock");
    };
  }, [lead]);

  if (!lead?.open) return null;

  return (
    <div className="modal-root" role="presentation" onMouseDown={lead.close}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={lead.close} aria-label="Закрыть">
          ×
        </button>
        <p className="eyebrow light">Быстрый расчёт</p>
        <h2 id="lead-title">Что нужно сделать на объекте?</h2>
        <p className="modal-copy">Опишите задачу — подберём машину и подготовим предварительную стоимость.</p>
        <LeadForm equipmentName={lead.equipmentName} />
      </div>
    </div>
  );
}

export function MachineCard({ item }) {
  const lead = useLead();
  return (
    <article className="machine">
      <Link to={`/catalog/${item.slug}`} className="machine-media">
        <img src={asset(item.image)} alt={item.name} />
        <span>В наличии</span>
      </Link>
      <div className="machine-body">
        <p className="kicker">{item.categoryLabel}</p>
        <h3>
          <Link to={`/catalog/${item.slug}`}>{item.name}</Link>
        </h3>
        <ul>
          {item.specs.slice(0, 2).map(([label, value]) => (
            <li key={label}>
              <span>{label}</span>
              <b>{value}</b>
            </li>
          ))}
        </ul>
        <div className="machine-foot">
          <div>
            <strong>от {money(item.hourPrice)}/час</strong>
            <span>{item.minimum}</span>
          </div>
          <button type="button" onClick={() => lead.show(item.name)}>
            Заказать
          </button>
        </div>
      </div>
    </article>
  );
}

export function PageHero({ eyebrow, title, text, image = "media/hero-construction.jpg" }) {
  return (
    <header className="page-hero">
      <img src={asset(image)} alt="" />
      <div className="shell">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </header>
  );
}
