export const phone = "+7 (495) 123-45-67";
export const phoneHref = "tel:+74951234567";
export const email = "info@stroytehnika.ru";
export const emailHref = "mailto:info@stroytehnika.ru";
export const address = "Москва, ул. Строителей, 12";
export const region = "Москва и Московская область";

export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${String(path).replace(/^\//, "")}`;
}

export function money(value) {
  return `${Number(value).toLocaleString("ru-RU")} ₽`;
}

export const equipment = [
  {
    slug: "jcb-3cx",
    name: "Экскаватор-погрузчик JCB 3CX",
    category: "excavators",
    categoryLabel: "Экскаваторы-погрузчики",
    image: "media/excavator-work.jpg",
    price: 25000,
    hourPrice: 3125,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Объём ковша", "1 м³"],
      ["Глубина копания", "5,46 м"],
      ["Масса", "8,1 т"],
      ["Мощность", "92 л.с."],
    ],
    description: "Универсальная машина для земляных, погрузочных и планировочных работ на городских объектах.",
  },
  {
    slug: "hitachi-zx200",
    name: "Гусеничный экскаватор Hitachi ZX200",
    category: "excavators",
    categoryLabel: "Экскаваторы",
    image: "media/hero-excavator.jpg",
    price: 22000,
    hourPrice: 2750,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Объём ковша", "1 м³"],
      ["Глубина копания", "6,67 м"],
      ["Масса", "20,4 т"],
      ["Мощность", "168 л.с."],
    ],
    description: "Производительный экскаватор для разработки котлованов, траншей и перемещения грунта.",
  },
  {
    slug: "hyundai-hl740",
    name: "Фронтальный погрузчик Hyundai HL740",
    category: "loaders",
    categoryLabel: "Погрузчики",
    image: "media/excavator-work.jpg",
    price: 18000,
    hourPrice: 2250,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Объём ковша", "2,1 м³"],
      ["Высота выгрузки", "2,9 м"],
      ["Масса", "12 т"],
      ["Мощность", "145 л.с."],
    ],
    description: "Подходит для погрузки сыпучих материалов, расчистки площадок и планировки территории.",
  },
  {
    slug: "xcmg-qy25k",
    name: "Автокран XCMG QY25K",
    category: "cranes",
    categoryLabel: "Автокраны",
    image: "media/crane-truck.jpg",
    price: 24000,
    hourPrice: 3000,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Грузоподъёмность", "25 т"],
      ["Длина стрелы", "38 м"],
      ["Высота подъёма", "46 м"],
      ["Колёсная формула", "6×4"],
    ],
    description: "Манёвренный автокран для монтажа конструкций, разгрузки оборудования и высотных работ.",
  },
  {
    slug: "kamaz-kanglim",
    name: "Манипулятор КАМАЗ Kanglim",
    category: "transport",
    categoryLabel: "Манипуляторы",
    image: "media/crane-truck.jpg",
    price: 19800,
    hourPrice: 2475,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Борт", "10 т"],
      ["Стрела", "7 т"],
      ["Вылет стрелы", "20 м"],
      ["Платформа", "6,2 м"],
    ],
    description: "Перевозит и самостоятельно загружает стройматериалы, бытовки и оборудование.",
  },
  {
    slug: "volvo-l120",
    name: "Фронтальный погрузчик Volvo L120",
    category: "loaders",
    categoryLabel: "Погрузчики",
    image: "media/hero-excavator.jpg",
    price: 21000,
    hourPrice: 2625,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Объём ковша", "3,3 м³"],
      ["Грузоподъёмность", "5 т"],
      ["Масса", "18 т"],
      ["Мощность", "245 л.с."],
    ],
    description: "Мощный погрузчик для интенсивной работы на складах, карьерах и крупных стройплощадках.",
  },
  {
    slug: "bomag-bw213",
    name: "Грунтовый каток Bomag BW213",
    category: "road",
    categoryLabel: "Дорожная техника",
    image: "media/excavator-work.jpg",
    price: 17000,
    hourPrice: 2125,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Рабочая масса", "13 т"],
      ["Ширина вальца", "2,13 м"],
      ["Амплитуда", "1,9 мм"],
      ["Мощность", "130 л.с."],
    ],
    description: "Уплотнение грунта, щебня и оснований при дорожном строительстве и благоустройстве.",
  },
  {
    slug: "kamaz-6520",
    name: "Самосвал КАМАЗ 6520",
    category: "transport",
    categoryLabel: "Самосвалы",
    image: "media/crane-truck.jpg",
    price: 16000,
    hourPrice: 2000,
    minimum: "Заказ от 8 часов",
    specs: [
      ["Грузоподъёмность", "20 т"],
      ["Объём кузова", "12 м³"],
      ["Колёсная формула", "6×4"],
      ["Мощность", "400 л.с."],
    ],
    description: "Вывоз грунта и строительного мусора, доставка песка, щебня и других сыпучих материалов.",
  },
];

export const categoryFilters = [
  ["all", "Вся техника"],
  ["excavators", "Экскаваторы"],
  ["loaders", "Погрузчики"],
  ["cranes", "Краны"],
  ["transport", "Перевозка"],
  ["road", "Дорожная техника"],
];

export const homeCategories = [
  {
    name: "Экскаваторы",
    meta: "Гусеничные и колёсные",
    price: "от 14 000 ₽/смена",
    image: "media/hero-excavator.jpg",
    href: "/catalog?category=excavators",
  },
  {
    name: "Экскаваторы-погрузчики",
    meta: "Для города и стройплощадки",
    price: "от 12 000 ₽/смена",
    image: "media/excavator-work.jpg",
    href: "/catalog?category=excavators",
  },
  {
    name: "Автокраны",
    meta: "Грузоподъёмность до 100 т",
    price: "от 15 000 ₽/смена",
    image: "media/crane-truck.jpg",
    href: "/catalog?category=cranes",
  },
  {
    name: "Фронтальные погрузчики",
    meta: "Ковш до 4,5 м³",
    price: "от 11 000 ₽/смена",
    image: "media/excavator-work.jpg",
    href: "/catalog?category=loaders",
  },
];

export const services = [
  { slug: "earthworks", title: "Земляные работы", text: "Котлованы, траншеи, планировка и обратная засыпка." },
  { slug: "demolition", title: "Снос и демонтаж", text: "Разбор зданий и конструкций с вывозом отходов." },
  { slug: "transport", title: "Перевозка техники", text: "Тралы и низкорамные платформы по Москве и России." },
  { slug: "waste", title: "Вывоз грунта", text: "Погрузка, перевозка и утилизация с документами." },
  { slug: "roads", title: "Дорожные работы", text: "Подготовка основания, укладка и уплотнение покрытий." },
  { slug: "lifting", title: "Подъёмные работы", text: "Монтаж конструкций и разгрузка оборудования." },
];

export const projects = [
  {
    title: "Разработка котлована для жилого комплекса",
    place: "Москва, САО",
    scope: "48 000 м³ грунта",
    image: "media/hero-excavator.jpg",
  },
  {
    title: "Монтаж металлоконструкций складского комплекса",
    place: "Домодедово",
    scope: "4 автокрана в смену",
    image: "media/crane-truck.jpg",
  },
  {
    title: "Подготовка площадки под промышленный объект",
    place: "Подольск",
    scope: "12 единиц техники",
    image: "media/excavator-work.jpg",
  },
  {
    title: "Благоустройство территории бизнес-парка",
    place: "Красногорск",
    scope: "26 рабочих смен",
    image: "media/hero-construction.jpg",
  },
];

export const faqs = [
  ["Что входит в стоимость аренды?", "Работа техники на объекте, услуги опытного оператора, топливо и стандартный комплект документов. Доставка рассчитывается с учётом адреса и типа машины."],
  ["Какой минимальный срок аренды?", "Обычно одна рабочая смена — 8 часов. Для отдельных видов техники и срочных задач возможны другие условия."],
  ["Можно ли заказать технику сегодня?", "Да, если нужная машина свободна. Менеджер проверит наличие, маршрут и возможность подачи в выбранное время."],
  ["Работаете ли вы с НДС?", "Да. Работаем с юридическими и физическими лицами, предоставляем договор, счёт, акт и закрывающие документы."],
];

export const steps = [
  ["01", "Уточняем задачу", "Адрес, объём работ, сроки и условия въезда."],
  ["02", "Подбираем машину", "Проверяем доступность и рассчитываем стоимость."],
  ["03", "Подаём на объект", "Техника приезжает заправленной и с оператором."],
  ["04", "Закрываем заказ", "Предоставляем акт и полный комплект документов."],
];

export const benefits = [
  ["01", "Доставка точно в срок", "Согласуем маршрут и время подачи"],
  ["02", "Опытные операторы", "Стаж машинистов от 5 лет"],
  ["03", "Исправная техника", "Собственная ремонтная база"],
  ["04", "Всё включено", "Оператор, топливо и документы"],
];

export const rentalGroups = [
  {
    title: "Землеройная техника",
    links: [
      ["Экскаваторы", "/catalog?category=excavators"],
      ["Экскаваторы-погрузчики", "/catalog?category=excavators"],
      ["Мини-экскаваторы", "/catalog?category=excavators"],
      ["Бульдозеры", "/catalog?category=excavators"],
    ],
  },
  {
    title: "Погрузочная и подъёмная",
    links: [
      ["Фронтальные погрузчики", "/catalog?category=loaders"],
      ["Автокраны", "/catalog?category=cranes"],
      ["Манипуляторы", "/catalog?category=transport"],
      ["Автовышки", "/catalog?category=cranes"],
    ],
  },
  {
    title: "Дорожная и грузовая",
    links: [
      ["Дорожные катки", "/catalog?category=road"],
      ["Самосвалы", "/catalog?category=transport"],
      ["Тралы", "/catalog?category=transport"],
      ["Длинномеры", "/catalog?category=transport"],
    ],
  },
];

export const included = ["Топливо включено", "Доставка на объект", "Техника исправна", "Полный комплект документов"];

export function findEquipment(slug) {
  return equipment.find((item) => item.slug === slug);
}
