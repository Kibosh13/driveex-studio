import { useState } from "react";
import { asset } from "../data";
import { useSite } from "../site";

const tabs = [
  ["texts", "Тексты"],
  ["equipment", "Техника"],
  ["categories", "Главная"],
  ["seo", "SEO"],
  ["contacts", "Контакты"],
];

export function Admin() {
  const { content, setContent } = useSite();
  const [tab, setTab] = useState("texts");
  const [authed, setAuthed] = useState(false);
  const [login, setLogin] = useState("admin");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState(null);

  async function signIn(event) {
    event.preventDefault();
    const response = await fetch(asset("api/auth.php"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
    const data = await response.json().catch(() => ({}));
    if (data.ok) {
      setAuthed(true);
      setStatus("");
    } else setStatus(data.error || "Не удалось войти");
  }

  async function save(next = content) {
    setContent(next);
    const response = await fetch(asset("api/content.php"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    const data = await response.json().catch(() => ({}));
    setStatus(data.ok ? "Сохранено" : data.error || "Сервер не принял изменения");
  }

  function patch(partial) {
    const next = { ...content, ...partial };
    setContent(next);
    return next;
  }

  if (!authed) {
    return (
      <main className="admin">
        <form className="admin-card" onSubmit={signIn}>
          <p className="eyebrow">DriveEX</p>
          <h1>Админ-панель</h1>
          <label>Логин<input value={login} onChange={(event) => setLogin(event.target.value)} /></label>
          <label>Пароль<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
          <button className="btn btn-orange" type="submit">Войти</button>
          {status && <p>{status}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="admin">
      <aside>
        <p className="eyebrow">DriveEX</p>
        <h1>Управление сайтом</h1>
        {tabs.map(([id, label]) => (
          <button key={id} type="button" className={tab === id ? "is-on" : ""} onClick={() => setTab(id)}>{label}</button>
        ))}
        <button className="btn btn-orange" type="button" onClick={() => save()}>Сохранить</button>
        <a href={asset("")}>Открыть сайт</a>
        {status && <p>{status}</p>}
      </aside>
      <section>
        {tab === "texts" && (
          <TextEditor
            content={content}
            onChange={(directorName, directorRole, directorText, faqs) => patch({ directorName, directorRole, directorText, faqs })}
          />
        )}
        {tab === "equipment" && (
          <EquipmentEditor
            items={content.equipment}
            editing={editing}
            setEditing={setEditing}
            onChange={(equipment) => patch({ equipment })}
          />
        )}
        {tab === "categories" && (
          <CategoryEditor items={content.homeCategories} onChange={(homeCategories) => patch({ homeCategories })} />
        )}
        {tab === "seo" && (
          <label className="admin-block">
            Заголовок страницы
            <input value={content.seo.title} onChange={(event) => patch({ seo: { ...content.seo, title: event.target.value } })} />
            Описание
            <textarea value={content.seo.description} onChange={(event) => patch({ seo: { ...content.seo, description: event.target.value } })} />
          </label>
        )}
        {tab === "contacts" && (
          <ContactsEditor content={content} onChange={patch} />
        )}
      </section>
    </main>
  );
}

function TextEditor({ content, onChange }) {
  const faqs = content.faqs.map((item) => [...item]);
  return (
    <div className="admin-block">
      <label>Имя директора<input value={content.directorName} onChange={(event) => onChange(event.target.value, content.directorRole, content.directorText, faqs)} /></label>
      <label>Должность<input value={content.directorRole} onChange={(event) => onChange(content.directorName, event.target.value, content.directorText, faqs)} /></label>
      <label>Текст о руководителе<textarea value={content.directorText} onChange={(event) => onChange(content.directorName, content.directorRole, event.target.value, faqs)} /></label>
      <h2>Вопросы</h2>
      {faqs.map((item, index) => (
        <div key={index} className="admin-pair">
          <input value={item[0]} onChange={(event) => { faqs[index][0] = event.target.value; onChange(content.directorName, content.directorRole, content.directorText, faqs); }} />
          <textarea value={item[1]} onChange={(event) => { faqs[index][1] = event.target.value; onChange(content.directorName, content.directorRole, content.directorText, faqs); }} />
        </div>
      ))}
    </div>
  );
}

function EquipmentEditor({ items, editing, setEditing, onChange }) {
  function update(next) {
    onChange(next);
  }
  function saveItem(item) {
    const exists = items.some((entry) => entry.slug === item.slug);
    update(exists ? items.map((entry) => (entry.slug === item.slug ? item : entry)) : [item, ...items]);
    setEditing(null);
  }
  return (
    <div>
      <button className="btn btn-ink" type="button" onClick={() => setEditing(blankItem())}>Добавить технику</button>
      <div className="admin-list">
        {items.map((item) => (
          <article key={item.slug}>
            <img src={asset(item.image)} alt="" />
            <div>
              <strong>{item.name}</strong>
              <span>{item.categoryLabel}</span>
            </div>
            <button type="button" onClick={() => setEditing(item)}>Изменить</button>
            <button type="button" onClick={() => update(items.filter((entry) => entry.slug !== item.slug))}>Удалить</button>
          </article>
        ))}
      </div>
      {editing && <ItemForm item={editing} onClose={() => setEditing(null)} onSave={saveItem} />}
    </div>
  );
}

function blankItem() {
  return {
    slug: `item-${Date.now()}`,
    name: "Новая техника",
    category: "excavators",
    categoryLabel: "Техника",
    image: "media/jcb-3cx.jpg",
    price: 0,
    hourPrice: 0,
    minimum: "Срок по задаче",
    specs: [["Параметр", "Значение"]],
    description: "",
  };
}

function ItemForm({ item, onClose, onSave }) {
  const [draft, setDraft] = useState(item);
  function set(key, value) {
    setDraft({ ...draft, [key]: value });
  }
  async function upload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const body = new FormData();
    body.append("file", file);
    const response = await fetch(asset("api/upload.php"), { method: "POST", body });
    const data = await response.json().catch(() => ({}));
    if (data.path) set("image", data.path);
  }
  return (
    <form className="admin-modal" onSubmit={(event) => { event.preventDefault(); onSave({ ...draft, price: Number(draft.price) || 0, hourPrice: Number(draft.hourPrice) || 0 }); }}>
      <div>
        <h2>Карточка техники</h2>
        <label>Название<input value={draft.name} onChange={(event) => set("name", event.target.value)} /></label>
        <label>Адрес карточки<input value={draft.slug} onChange={(event) => set("slug", event.target.value)} /></label>
        <label>Категория<input value={draft.categoryLabel} onChange={(event) => set("categoryLabel", event.target.value)} /></label>
        <label>Код категории<input value={draft.category} onChange={(event) => set("category", event.target.value)} /></label>
        <label>Цена смены<input type="number" value={draft.price} onChange={(event) => set("price", event.target.value)} /></label>
        <label>Цена часа<input type="number" value={draft.hourPrice} onChange={(event) => set("hourPrice", event.target.value)} /></label>
        <label>Описание<textarea value={draft.description} onChange={(event) => set("description", event.target.value)} /></label>
        <label>Картинка<input type="file" accept="image/*" onChange={upload} /></label>
        <img src={asset(draft.image)} alt="" />
        <div className="admin-actions">
          <button className="btn btn-orange" type="submit">Готово</button>
          <button type="button" onClick={onClose}>Закрыть</button>
        </div>
      </div>
    </form>
  );
}

function CategoryEditor({ items, onChange }) {
  return (
    <div className="admin-block">
      {items.map((item, index) => (
        <div key={item.name} className="admin-pair">
          <input value={item.name} onChange={(event) => onChange(items.map((entry, i) => i === index ? { ...entry, name: event.target.value } : entry))} />
          <input value={item.meta} onChange={(event) => onChange(items.map((entry, i) => i === index ? { ...entry, meta: event.target.value } : entry))} />
          <input value={item.price} onChange={(event) => onChange(items.map((entry, i) => i === index ? { ...entry, price: event.target.value } : entry))} />
        </div>
      ))}
    </div>
  );
}

function ContactsEditor({ content, onChange }) {
  return (
    <div className="admin-block">
      <label>Телефон<input value={content.phone} onChange={(event) => onChange({ phone: event.target.value })} /></label>
      <label>Почта<input value={content.email} onChange={(event) => onChange({ email: event.target.value })} /></label>
      <label>Адрес<input value={content.address} onChange={(event) => onChange({ address: event.target.value })} /></label>
      <label>Регион<input value={content.region} onChange={(event) => onChange({ region: event.target.value })} /></label>
      {content.socials.map((item, index) => (
        <label key={item.id}>{item.label}<input value={item.href} onChange={(event) => onChange({ socials: content.socials.map((entry, i) => i === index ? { ...entry, href: event.target.value } : entry) })} /></label>
      ))}
      <label>Пометка о ценах<textarea value={content.offerNote} onChange={(event) => onChange({ offerNote: event.target.value })} /></label>
    </div>
  );
}
