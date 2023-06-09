export interface IQuestion {
  title: string;
  answers: string[];
}

export const QUESTIONS: IQuestion[] = [
  {
    title: "Какие предметы в школе/университете вам были наиболее интересны?",
    answers: [
      "Математика и физика",
      "Информатика и программирование",
      "Языки и литература",
      "История и обществознание",
      "Биология и химия",
    ],
  },
  {
    title: "Что вас больше всего привлекает в работе?",
    answers: [
      "Анализ данных и статистика",
      "Создание новых приложений и программ",
      "Работа с базами данных и информационными системами",
      "Разработка системного ПО",
      "Создание и поддержка веб-сайтов и приложений",
    ],
  },
  {
    title: "Какой опыт у вас есть в программировании?",
    answers: [
      "Знаком с языками программирования и умею писать код",
      "Имею опыт разработки мобильных приложений",
      "Работал с базами данных и информационными системами",
      "Имею опыт разработки системного ПО",
      "Имею опыт создания и поддержки веб-сайтов и приложений",
    ],
  },
  {
    title: "Как вы относитесь к работе в команде?",
    answers: [
      "Люблю работать вместе с другими людьми и обмениваться идеями",
      "Работаю только в одиночку",
      "Предпочитаю работать самостоятельно, но готов сотрудничать при необходимости",
      "Зависит от задачи и проекта",
      "Не имеет значения для меня",
    ],
  },
  {
    title: "Как вы относитесь к обучению и изучению новых технологий?",
    answers: [
      "Люблю изучать новые технологии и применять их в работе",
      "Интересуюсь новыми технологиями, но не всегда готов уделять им время",
      "Предпочитаю работать с уже известными мне технологиями",
      "Не люблю изучать новые технологии и предпочитаю работать со старыми",
      "Не имеет значения для меня",
    ],
  },
];