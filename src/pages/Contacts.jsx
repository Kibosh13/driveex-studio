import { address, email, emailHref, phone, phoneHref } from "../data";
import { LeadForm, PageHero, usePageTitle } from "../ui";

const contacts = [
  ["Телефон", phone, phoneHref],
  ["Почта", email, emailHref],
  ["Адрес", address, ""],
  ["Режим работы", "Диспетчерская — круглосуточно", ""],
];

export function Contacts() {
  usePageTitle("Контакты");

  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="На связи круглосуточно"
        text="Позвоните или оставьте заявку. Менеджер уточнит задачу, адрес объекта и доступность нужной техники."
      />
      <section className="section">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Связаться с нами</p>
            <h2>Обсудим ваш объект</h2>
            <ul className="contact-list">
              {contacts.map(([label, value, href]) => (
                <li key={label}>
                  <span>{label}</span>
                  {href ? <a href={href}>{value}</a> : <strong>{value}</strong>}
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-card">
            <h2>Получить расчёт</h2>
            <p>Укажите задачу и телефон. В демонстрационной версии форма показывает сценарий отправки без передачи данных.</p>
            <LeadForm />
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="shell map-card">
          <p>База</p>
          <h2>{address}</h2>
          <span>Схему проезда добавим после получения реального адреса</span>
        </div>
      </section>
    </>
  );
}
