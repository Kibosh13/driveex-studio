import { asset, projects } from "../data";
import { PageHero, usePageTitle } from "../ui";

export function Projects() {
  usePageTitle("Галерея");

  return (
    <>
      <PageHero
        eyebrow="Наши объекты"
        title="Техника в реальной работе"
        text="Примеры комплексных задач: земляные работы, подъём, перевозка и подготовка территорий."
        image="media/crane-truck.jpg"
      />
      <section className="section">
        <div className="shell gallery">
          {projects.map((project, index) => (
            <article key={project.title} className={index === 0 ? "gallery-lead" : ""}>
              <img src={asset(project.image)} alt={project.title} />
              <div>
                <p>Проект {String(index + 1).padStart(2, "0")}</p>
                <h2>{project.title}</h2>
                <span>{project.place}</span>
                <strong>{project.scope}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
