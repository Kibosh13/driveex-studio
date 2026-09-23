import { Link } from "react-router-dom";
import { equipment, money } from "../data";
import { PageHero, useLead, usePageTitle } from "../ui";

export function Price() {
  usePageTitle("Прайс-лист");
  const lead = useLead();

  return (
    <>
      <PageHero
        eyebrow="Стоимость аренды"
        title="Прайс-лист на спецтехнику"
        text="Ориентировочные цены за час и рабочую смену. Итоговая стоимость зависит от адреса объекта, срока аренды и условий работы."
      />
      <section className="section">
        <div className="shell">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  {["Техника", "Категория", "За час", "За смену", "Минимальный заказ"].map((heading) => (
                    <th key={heading}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {equipment.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Link to={`/catalog/${item.slug}`}>{item.name}</Link>
                    </td>
                    <td>{item.categoryLabel}</td>
                    <td>{money(item.hourPrice)}</td>
                    <td>{money(item.price)}</td>
                    <td>{item.minimum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="price-cta">
            <div>
              <h2>Нужен точный расчёт?</h2>
              <p>Учтём доставку, продолжительность смены, навесное оборудование и условия на площадке.</p>
              <ul className="checks">
                <li>Цена фиксируется в договоре</li>
                <li>Расчёт без скрытых доплат</li>
              </ul>
            </div>
            <button className="btn btn-orange" type="button" onClick={() => lead.show()}>
              Получить расчёт <i aria-hidden="true">→</i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
