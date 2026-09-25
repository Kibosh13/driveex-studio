import { asset } from "../data";
import { PageHero, useLead, usePageTitle } from "../ui";

const principles = [
  ["Надёжность", "Проверяем машину перед подачей и держим резерв на случай замены."],
  ["Ответственность", "Не перекладываем координацию операторов и логистику на заказчика."],
  ["Собственная база", "Обслуживаем парк своими силами и контролируем техническое состояние."],
];

export function About() {
  usePageTitle("О компании");
  const lead = useLead();

  return (
    <>
      <PageHero
        eyebrow="О компании"
        title="Отвечаем за технику и результат"
        text="С 2015 года обеспечиваем строительные и промышленные объекты техникой с экипажем по Москве и Московской области."
        image="media/xcmg-qy25k.jpg"
      />
      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">DriveEX</p>
            <h2>Не просто аренда, а рабочая система</h2>
            <p className="lede">
              Держим технику на собственной базе, сами обслуживаем парк и планируем логистику. Поэтому понимаем реальное состояние каждой машины и можем быстро заменить её при неисправности.
            </p>
            <p className="lede">Один менеджер сопровождает заказ от первого расчёта до закрывающих документов.</p>
            <button className="btn btn-orange" type="button" onClick={() => lead.show()}>
              Обсудить сотрудничество
            </button>
          </div>
          <img className="frame-photo" src={asset("media/kamaz-6520.jpg")} alt="Парк спецтехники компании" />
        </div>
      </section>
      <section className="band">
        <div className="shell stat-row">
          {[
            ["10 лет", "на рынке аренды"],
            ["200+", "машин в парке"],
            ["45", "опытных операторов"],
            ["24/7", "диспетчерская служба"],
          ].map(([value, label]) => (
            <div key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section" id="team">
        <div className="shell">
          <p className="eyebrow">Команда</p>
          <h2>Руководство компании</h2>
          <div className="director-grid team-card">
            <img src={asset("media/general-director.jpg")} alt="Монто Максим Александрович, генеральный директор DriveEX" />
            <div>
              <span className="avail static">Генеральный директор</span>
              <h3>Монто Максим Александрович</h3>
              <p className="lede">Руководит развитием компании, отвечает за качество сервиса, состояние автопарка и выполнение обязательств перед заказчиками.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="shell">
          <p className="eyebrow">Принципы работы</p>
          <h2>На чём держится сервис</h2>
          <div className="principle-grid">
            {principles.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
