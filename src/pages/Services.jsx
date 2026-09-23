import { Link } from "react-router-dom";
import { asset, services } from "../data";
import { PageHero, useLead, usePageTitle } from "../ui";

export function Services() {
  usePageTitle("Услуги");
  const lead = useLead();

  return (
    <>
      <PageHero
        eyebrow="Услуги"
        title="Работы спецтехникой под ключ"
        text="Берём на себя технику, экипаж, логистику и документы. Для комплексных задач назначаем одного менеджера и собираем парк под график объекта."
        image="media/hitachi-zx200.jpg"
      />
      <section className="section">
        <div className="shell service-list">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug}>
              <span>0{index + 1}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
              <button type="button" onClick={() => lead.show(service.title)}>
                Рассчитать работу →
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="section tight">
        <div className="shell split">
          <div>
            <p className="eyebrow">Комплексный подход</p>
            <h2>Одна заявка вместо шести подрядчиков</h2>
            <p className="lede">
              Соберём комплект техники под этапы проекта, согласуем подачу, замену машин и график операторов. Документы и коммуникация остаются в одном контуре.
            </p>
            <Link className="btn btn-ink" to="/contacts">
              Обсудить объект <i aria-hidden="true">→</i>
            </Link>
          </div>
          <img className="frame-photo" src={asset("media/jcb-3cx.jpg")} alt="Земляные работы спецтехникой" />
        </div>
      </section>
    </>
  );
}
