import { Link, useParams } from "react-router-dom";
import { asset, included, shiftLabel } from "../data";
import { useSite } from "../site";
import { MachineCard, useLead, usePageTitle } from "../ui";

export function Equipment() {
  const { slug } = useParams();
  const { content } = useSite();
  const item = content.equipment.find((entry) => entry.slug === slug);
  usePageTitle(item?.name || "Техника");
  const lead = useLead();

  if (!item) {
    return (
      <section className="section">
        <div className="shell empty">
          <h1>Такой машины нет в каталоге</h1>
          <Link className="btn btn-ink" to="/catalog">
            Вернуться в каталог
          </Link>
        </div>
      </section>
    );
  }

  const related = content.equipment.filter((entry) => entry.category === item.category && entry.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="section product">
        <div className="shell">
          <Link className="back" to="/catalog">
            ← Назад в каталог
          </Link>
          <div className="product-grid">
            <div className="product-photo">
              <img src={asset(item.image)} alt={item.name} />
              <span>В наличии</span>
            </div>
            <div>
              <p className="eyebrow">{item.categoryLabel}</p>
              <h1>{item.name}</h1>
              <p className="lede">{item.description}</p>
              <dl className="spec-grid">
                {item.specs.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="price-box">
                <p>Стоимость смены</p>
                <strong>{shiftLabel(item)}</strong>
                <span>
                  {item.price ? `${item.hourPrice.toLocaleString("ru-RU")} ₽/час · ` : ""}
                  {item.minimum}. Итоговая цена зависит от адреса и условий работы. Указанные цены не являются публичной офертой.
                </span>
              </div>
              <button className="btn btn-orange btn-block" type="button" onClick={() => lead.show(item.name)}>
                Заказать технику
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="shell included">
          {included.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>
      </section>
      {related.length > 0 && (
        <section className="section">
          <div className="shell">
            <p className="eyebrow">Похожие модели</p>
            <h2>Можно сравнить</h2>
            <div className="machine-grid">
              {related.map((entry) => (
                <MachineCard key={entry.slug} item={entry} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
