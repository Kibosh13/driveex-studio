import { Link } from "react-router-dom";
import { asset, benefits, equipment, faqs, homeCategories, money, steps } from "../data";
import { LeadForm, Reveal, useLead, usePageTitle } from "../ui";

export function Home() {
  usePageTitle("");
  const lead = useLead();

  return (
    <>
      <section className="hero">
        <video autoPlay muted loop playsInline preload="auto" poster={asset("media/hero-construction.jpg")}>
          <source src={asset("media/hero-equipment.mp4")} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="pills">
              <span>Собственный автопарк</span>
              <span>Подача от 2 часов</span>
            </div>
            <h1>
              Техника,
              <br />
              которая
              <br />
              <em>работает</em>
            </h1>
            <p>Аренда спецтехники с опытным оператором, топливом и доставкой на объект по Москве и области.</p>
            <div className="hero-actions">
              <button className="btn btn-orange" type="button" onClick={() => lead.show()}>
                Подобрать технику <i aria-hidden="true">→</i>
              </button>
              <Link className="btn btn-ghost" to="/catalog">
                Открыть каталог
              </Link>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>200+</dt>
                <dd>единиц техники</dd>
              </div>
              <div>
                <dt>10 лет</dt>
                <dd>работаем на объектах</dd>
              </div>
              <div>
                <dt>4,9</dt>
                <dd>рейтинг клиентов</dd>
              </div>
            </dl>
          </div>
          <aside className="hero-card">
            <p className="eyebrow">Быстрый расчёт</p>
            <h2>Что нужно сделать на объекте?</h2>
            <p>Опишите задачу — подберём машину и подготовим предварительную стоимость.</p>
            <LeadForm compact />
          </aside>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          {Array.from({ length: 2 }).map((_, copy) => (
            <p key={copy}>
              {equipment.map((item) => (
                <span key={`${copy}-${item.slug}`}>
                  {item.name}
                  <i />
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Каталог</p>
              <h2>Техника под вашу задачу</h2>
            </div>
            <Link className="text-link" to="/catalog">
              Весь каталог →
            </Link>
          </div>
          <div className="bento">
            {homeCategories.map((category, index) => (
              <Reveal key={category.name} delay={index * 70} className={index === 0 ? "bento-lead" : ""}>
                <Link to={category.href} className="bento-card">
                  <img src={asset(category.image)} alt={category.name} loading="lazy" decoding="async" />
                  <span className="avail">В наличии</span>
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.meta}</p>
                    <strong>{category.price}</strong>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell benefit-grid">
          {benefits.map(([num, title, text], index) => (
            <Reveal key={num} delay={index * 60}>
              <article>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Популярная техника</p>
              <h2>Готова выйти на объект</h2>
              <p className="lede">Показываем ключевые характеристики и ориентировочную стоимость — без скрытых пунктов в карточке.</p>
            </div>
          </div>
          <div className="rail">
            {equipment.slice(0, 4).map((item) => (
              <Link key={item.slug} to={`/catalog/${item.slug}`} className="rail-card">
                <img src={asset(item.image)} alt={item.name} loading="lazy" decoding="async" />
                <div>
                  <p>{item.categoryLabel}</p>
                  <h3>{item.name}</h3>
                  <strong>от {money(item.hourPrice)}/час</strong>
                  <span>{item.minimum}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell process">
          <Reveal>
            <p className="eyebrow light">Как мы работаем</p>
            <h2>От заявки до закрывающих документов</h2>
            <p>Один менеджер ведёт заказ, контролирует подачу и остаётся на связи во время работ.</p>
          </Reveal>
          <ol>
            {steps.map(([num, title, text], index) => (
              <Reveal as="li" key={num} delay={index * 80}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <Reveal className="split-photo">
            <img src={asset("media/hitachi-zx200.jpg")} alt="Работа спецтехники на городском объекте" loading="lazy" decoding="async" />
            <div>
              <b>2 400+</b>
              <span>заказов выполнено за прошлый год</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Надёжный подрядчик</p>
            <h2>Берём объект под контроль</h2>
            <p className="lede">
              Работаем с подрядчиками, девелоперами, промышленными предприятиями и частными заказчиками. Если задача требует несколько видов техники, организуем комплексную подачу и единый документооборот.
            </p>
            <ul className="checks">
              <li>Техника проходит осмотр перед каждой сменой</li>
              <li>Логистику согласуем до подтверждения заявки</li>
              <li>Цена фиксируется в договоре</li>
            </ul>
            <Link className="btn btn-ink" to="/about">
              Подробнее о компании <i aria-hidden="true">→</i>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Вопросы</p>
            <h2>Что важно знать до заказа</h2>
            <p className="lede">Не нашли ответ? Опишите задачу — менеджер перезвонит и всё рассчитает.</p>
            <button className="btn btn-ink" type="button" onClick={() => lead.show()}>
              Задать вопрос <i aria-hidden="true">→</i>
            </button>
          </div>
          <div className="faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="director" id="director-message">
        <div className="shell director-grid">
          <img src={asset("media/general-director.jpg")} alt="Генеральный директор DriveEX" loading="lazy" decoding="async" />
          <div>
            <p className="eyebrow light">Обращение генерального директора</p>
            <blockquote>
              Мы строим работу так, чтобы техника выходила на объект вовремя, а заказчик был уверен в результате.
            </blockquote>
            <p className="who">
              <strong>Имя Фамилия</strong>
              <span>Генеральный директор DriveEX</span>
            </p>
            <Link className="btn btn-orange" to="/about#team">
              Подробнее о компании <i aria-hidden="true">→</i>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <div>
            <p className="eyebrow">Нужна техника?</p>
            <h2>Рассчитаем заказ за 15 минут</h2>
          </div>
          <button className="btn btn-ink" type="button" onClick={() => lead.show()}>
            Получить расчёт <i aria-hidden="true">→</i>
          </button>
        </div>
      </section>
    </>
  );
}
