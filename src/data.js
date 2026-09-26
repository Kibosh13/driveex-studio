export const phone = "+7 (495) 123-45-67";
export const phoneHref = "tel:+74951234567";
export const email = "info@drivex.ru";
export const emailHref = "mailto:info@drivex.ru";
export const address = "Москва, ул. Строителей, 12";
export const region = "Москва и Московская область";

export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${String(path).replace(/^\//, "")}`;
}

export function money(value) {
  return `${Number(value).toLocaleString("ru-RU")} ₽`;
}

export function priceLabel(item) {
  if (!item?.price) return "по запросу";
  return `от ${money(item.hourPrice)}/час`;
}

export function shiftLabel(item) {
  if (!item?.price) return "по запросу";
  return money(item.price);
}

export const socials = [
  { id: "telegram", label: "Telegram", href: "https://t.me/drivexru" },
  { id: "max", label: "Max", href: "https://max.ru/" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/74951234567" },
];

export const seo = {
  title: "DriveEX — аренда спецтехники в Москве",
  description: "Аренда спецтехники с оператором, топливом и доставкой по Москве и области. Указанные цены не являются публичной офертой.",
};

export const equipment = [
  {
    slug: "jcb-3cx",
    name: "Экскаватор-погрузчик JCB 3CX",
    category: "excavators",
    categoryLabel: "Экскаваторы-погрузчики",
    image: "media/jcb-3cx.jpg",
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
    image: "media/hitachi-zx200.jpg",
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
    image: "media/hyundai-hl740.jpg",
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
    image: "media/xcmg-qy25k.jpg",
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
    image: "media/kamaz-kanglim.jpg",
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
    image: "media/volvo-l120.jpg",
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
    image: "media/bomag-bw213.jpg",
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
    image: "media/kamaz-6520.jpg",
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
  card("front-loader", "Фронтальные погрузчики", "loaders", "Погрузчики", "media/volvo-l120.jpg", "Ковш до 4,5 м³. Погрузка сыпучих, планировка и работа на складе."),
  card("mini-loader", "Мини-погрузчики", "loaders", "Погрузчики", "media/hyundai-hl740.jpg", "Компактные машины для города, дворов и стеснённых площадок."),
  card("grader", "Грейдеры", "earth", "Землеройная техника", "media/hitachi-zx200.jpg", "Профилирование дорог, откосов и площадок."),
  card("mini-excavator", "Мини-экскаваторы", "excavators", "Экскаваторы", "media/jcb-3cx.jpg", "Траншеи, коммуникации и работа в ограниченном пространстве."),
  card("bulldozer", "Бульдозеры", "earth", "Землеройная техника", "media/hitachi-zx200.jpg", "Срезка грунта, планировка и перемещение масс."),
  card("auger", "Ямобур", "earth", "Землеройная техника", "media/jcb-3cx.jpg", "Бурение лунок под опоры, столбы и фундаменты."),
  card("pile-driver", "Сваебойная установка", "earth", "Землеройная техника", "media/xcmg-qy25k.jpg", "Погружение свай на строительных объектах."),
  card("aerial-18", "Автовышка 18 м", "cranes", "Автовышки", "media/xcmg-qy25k.jpg", "Высотные работы, монтаж и обслуживание."),
  card("aerial-22", "Автовышка 22 м", "cranes", "Автовышки", "media/xcmg-qy25k.jpg", "Работы на фасадах и линиях."),
  card("aerial-45", "Автовышка 45 м", "cranes", "Автовышки", "media/liebherr-crane.jpg", "Высотный доступ на крупных объектах."),
  card("aerial-60", "Автовышка 60 м", "cranes", "Автовышки", "media/liebherr-crane.jpg", "Максимальная высота подачи люльки."),
  card("aerial-offroad", "Автовышка вездеход", "cranes", "Автовышки", "media/kamaz-6520.jpg", "Подача на грунтовые и труднодоступные площадки."),
  card("crane-16", "Автокран 16 т", "cranes", "Автокраны", "media/xcmg-qy25k.jpg", "Монтаж и разгрузка на городских объектах."),
  card("crane-25", "Автокран 25 т", "cranes", "Автокраны", "media/xcmg-qy25k.jpg", "Грузоподъёмность 25 тонн."),
  card("crane-32", "Автокран 32 т", "cranes", "Автокраны", "media/liebherr-crane.jpg", "Грузоподъёмность 32 тонны."),
  card("crane-40", "Автокран 40 т", "cranes", "Автокраны", "media/liebherr-crane.jpg", "Грузоподъёмность 40 тонн."),
  card("crane-50", "Автокран 50 т", "cranes", "Автокраны", "media/liebherr-crane.jpg", "Грузоподъёмность 50 тонн."),
  card("liebherr-250", "Автокран Liebherr 250 т", "cranes", "Автокраны", "media/liebherr-crane.jpg", "Тяжёлый жёлтый автокран Liebherr, 250 тонн."),
  card("liebherr-500", "Автокран Liebherr 500 т", "cranes", "Автокраны", "media/liebherr-crane.jpg", "Тяжёлый автокран Liebherr, 500 тонн."),
  card("manipulator-7", "Манипулятор 7 т", "transport", "Манипуляторы", "media/kamaz-kanglim.jpg", "Перевозка и самопогрузка до 7 тонн."),
  card("manipulator-10", "Манипулятор 10 т", "transport", "Манипуляторы", "media/kamaz-kanglim.jpg", "Борт и стрела для стройматериалов и бытовок."),
  card("manipulator-offroad", "Манипулятор вездеход", "transport", "Манипуляторы", "media/kamaz-kanglim.jpg", "Подача на грунтовые площадки."),
  card("concrete-pump", "Автобетононасосы", "cranes", "Грузоподъёмная техника", "media/xcmg-qy25k.jpg", "Подача бетона на объект."),
  card("scissor-lift", "Ножничный подъёмник", "cranes", "Грузоподъёмная техника", "media/hyundai-hl740.jpg", "Работы на ровной площадке внутри и снаружи."),
  card("forklift", "Вилочный погрузчик", "loaders", "Погрузчики", "media/hyundai-hl740.jpg", "Склад, паллеты и разгрузка."),
  card("telehandler", "Телескопический погрузчик", "loaders", "Погрузчики", "media/volvo-l120.jpg", "Высота выгрузки и работа со стрелой."),
  card("tral-30", "Трал 30 т", "transport", "Тралы", "media/kamaz-6520.jpg", "Перевозка техники, 30 тонн."),
  card("tral-40", "Трал 40 т", "transport", "Тралы", "media/kamaz-6520.jpg", "Перевозка техники, 40 тонн."),
  card("tral-45", "Трал 45 т", "transport", "Тралы", "media/kamaz-6520.jpg", "Перевозка техники, 45 тонн."),
  card("tral-50", "Трал 50 т", "transport", "Тралы", "media/kamaz-6520.jpg", "Перевозка техники, 50 тонн."),
  card("long-truck", "Длинномер / шаланда", "transport", "Грузовой транспорт", "media/kamaz-6520.jpg", "Перевозка длинномерных грузов."),
  card("road-roller", "Дорожный каток", "road", "Асфальтовая техника", "media/bomag-bw213.jpg", "Уплотнение асфальтобетонных покрытий."),
  card("soil-roller", "Грунтовый каток", "road", "Асфальтовая техника", "media/bomag-bw213.jpg", "Уплотнение грунта и оснований."),
  card("miller", "Дорожные фрезы", "road", "Асфальтовая техника", "media/bomag-bw213.jpg", "Снятие старого покрытия."),
  card("paver", "Асфальтоукладчик", "road", "Асфальтовая техника", "media/bomag-bw213.jpg", "Укладка асфальтобетонной смеси."),
  card("washer", "Поливомоечная машина", "utility", "Коммунальная техника", "media/kamaz-6520.jpg", "Полив и мойка дорог и площадок."),
  card("vacuum", "Илососы", "utility", "Коммунальная техника", "media/kamaz-6520.jpg", "Откачка ила, колодцев и ёмкостей."),
  card("snow", "Снегоуборочная техника", "utility", "Коммунальная техника", "media/volvo-l120.jpg", "Уборка снега и вывоз."),
  card("compressor", "Компрессоры", "utility", "Коммунальная техника", "media/excavator-work.jpg", "Сжатый воздух для инструмента и продувки."),
  card("tow", "Эвакуатор", "utility", "Коммунальная техника", "media/kamaz-kanglim.jpg", "Эвакуация техники и транспорта."),
];

function card(slug, name, category, categoryLabel, image, description) {
  return {
    slug,
    name,
    category,
    categoryLabel,
    image,
    price: 0,
    hourPrice: 0,
    minimum: "Срок по задаче",
    specs: [
      ["Подача", "Москва и область"],
      ["Экипаж", "Оператор"],
    ],
    description,
  };
}

export const categoryFilters = [
  ["all", "Вся техника"],
  ["excavators", "Экскаваторы"],
  ["earth", "Землеройная"],
  ["loaders", "Погрузчики"],
  ["cranes", "Подъёмная"],
  ["transport", "Перевозка"],
  ["road", "Асфальтовая"],
  ["utility", "Коммунальная"],
];

export const homeCategories = [
  { name: "Экскаваторы", meta: "Гусеничные и колёсные", price: "от 14 000 ₽/смена", image: "media/hitachi-zx200.jpg", href: "/catalog?category=excavators" },
  { name: "Экскаваторы-погрузчики", meta: "Для города и стройплощадки", price: "от 12 000 ₽/смена", image: "media/jcb-3cx.jpg", href: "/catalog?category=excavators" },
  { name: "Автокран Liebherr", meta: "250 и 500 тонн", price: "по запросу", image: "media/liebherr-crane.jpg", href: "/catalog/liebherr-250" },
  { name: "Автокраны", meta: "16–50 тонн", price: "от 15 000 ₽/смена", image: "media/xcmg-qy25k.jpg", href: "/catalog?category=cranes" },
  { name: "Фронтальные погрузчики", meta: "Ковш до 4,5 м³", price: "от 11 000 ₽/смена", image: "media/volvo-l120.jpg", href: "/catalog?category=loaders" },
  { name: "Мини-погрузчики", meta: "Стеснённые площадки", price: "по запросу", image: "media/hyundai-hl740.jpg", href: "/catalog/mini-loader" },
  { name: "Самосвалы", meta: "Вывоз грунта и сыпучих", price: "от 16 000 ₽/смена", image: "media/kamaz-6520.jpg", href: "/catalog?category=transport" },
  { name: "Катки", meta: "Грунт и асфальт", price: "по запросу", image: "media/bomag-bw213.jpg", href: "/catalog?category=road" },
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
    image: "media/hitachi-zx200.jpg",
  },
  {
    title: "Монтаж металлоконструкций складского комплекса",
    place: "Домодедово",
    scope: "4 автокрана в смену",
    image: "media/xcmg-qy25k.jpg",
  },
  {
    title: "Подготовка площадки под промышленный объект",
    place: "Подольск",
    scope: "12 единиц техники",
    image: "media/jcb-3cx.jpg",
  },
  {
    title: "Благоустройство территории бизнес-парка",
    place: "Красногорск",
    scope: "26 рабочих смен",
    image: "media/bomag-bw213.jpg",
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
      ["Фронтальные погрузчики", "/catalog?category=loaders"],
      ["Мини-погрузчики", "/catalog/mini-loader"],
      ["Грейдеры", "/catalog/grader"],
      ["Мини-экскаваторы", "/catalog/mini-excavator"],
      ["Бульдозеры", "/catalog/bulldozer"],
      ["Ямобур", "/catalog/auger"],
      ["Сваебойная установка", "/catalog/pile-driver"],
    ],
  },
  {
    title: "Грузоподъёмная техника",
    links: [
      ["Автовышки", "/catalog?category=cranes"],
      ["Автокраны", "/catalog?category=cranes"],
      ["Liebherr 250 и 500 т", "/catalog/liebherr-250"],
      ["Манипуляторы", "/catalog?category=transport"],
      ["Автобетононасосы", "/catalog/concrete-pump"],
      ["Ножничный подъёмник", "/catalog/scissor-lift"],
      ["Вилочный погрузчик", "/catalog/forklift"],
      ["Телескопический погрузчик", "/catalog/telehandler"],
    ],
  },
  {
    title: "Грузовой транспорт",
    links: [
      ["Тралы", "/catalog/tral-40"],
      ["Самосвалы", "/catalog/kamaz-6520"],
      ["Длинномер / шаланда", "/catalog/long-truck"],
    ],
  },
  {
    title: "Асфальтовая и коммунальная",
    links: [
      ["Дорожный каток", "/catalog/road-roller"],
      ["Грунтовый каток", "/catalog/soil-roller"],
      ["Дорожные фрезы", "/catalog/miller"],
      ["Асфальтоукладчик", "/catalog/paver"],
      ["Поливомоечная машина", "/catalog/washer"],
      ["Илососы", "/catalog/vacuum"],
      ["Снегоуборочная техника", "/catalog/snow"],
      ["Компрессоры", "/catalog/compressor"],
      ["Эвакуатор", "/catalog/tow"],
    ],
  },
];

export const catalogSections = [
  {
    id: "earth",
    title: "Землеройная техника",
    href: "/catalog?category=earth",
    links: rentalGroups[0].links,
    equipmentSlugs: ["hitachi-zx200", "jcb-3cx", "front-loader", "bulldozer"],
  },
  {
    id: "lifting",
    title: "Грузоподъёмная техника",
    href: "/catalog?category=cranes",
    links: rentalGroups[1].links,
    equipmentSlugs: ["liebherr-250", "xcmg-qy25k", "kamaz-kanglim"],
  },
  {
    id: "transport",
    title: "Грузовой транспорт",
    href: "/catalog?category=transport",
    links: rentalGroups[2].links,
    equipmentSlugs: ["kamaz-6520", "tral-40", "long-truck"],
  },
  {
    id: "road",
    title: "Асфальтовая техника",
    href: "/catalog?category=road",
    links: rentalGroups[3].links.slice(0, 4),
    equipmentSlugs: ["bomag-bw213", "road-roller", "paver"],
  },
  {
    id: "utility",
    title: "Коммунальная техника",
    href: "/catalog?category=utility",
    links: rentalGroups[3].links.slice(4),
    equipmentSlugs: ["washer", "vacuum", "tow"],
  },
  {
    id: "services",
    title: "Услуги спецтехники",
    href: "/services",
    links: services.map((service) => [service.title, `/services#${service.slug}`]),
    serviceSlugs: ["earthworks", "demolition", "lifting"],
  },
];

export const included = ["Топливо включено", "Доставка на объект", "Техника исправна", "Полный комплект документов"];

export function findEquipment(slug) {
  return equipment.find((item) => item.slug === slug);
}
