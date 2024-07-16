export enum FalsonRoutes {
  HOME = "/",
  COMMANDS = "/commands",
  HISTORY = "/history",
  DONATE = "/donate",
  STATUS = "/status",
}

export const backendUrl = "http://localhost:4000/api";

export const Staff: {
  userId: string;
  role: string;
}[] = [
  // Akakuke
  {
    userId: "920677195976941620",
    role: "Pr manager",
  },
  // Ayomi
  {
    userId: "1129162686194790572",
    role: "Tech lead",
  },
  // Pva
  {
    userId: "935048996722978896",
    role: "Developer",
  },
  // Xantares
  {
    userId: "965710424513347595",
    role: "Discord manager",
  },
];

// TODO: заполнить
export const Advantages: { title: string; description: string }[] = [
  {
    title: "Разнообразная верификация",
    description:
      "Вы сможете настроить верифкацию под свой вкус. У нас имеются: полноценная система голосовой верификации, капча верификация, верификация по кнопкам",
  },
  {
    title: "Удобная настройка",
    description:
      "На сайте вы легко и быстро сможете настроить бота для использования на вашем сервере",
  },
  {
    title: "Хорошая документация",
    description:
      "Хорошо продуманная документация поможет вам с лёгкостью разобраться с панелью настроек и ботом",
  },

  {
    title: "Отзывчивая поддержка",
    description:
      "Наш отдел поддержки и разработчики помогут решить любой ваш вопрос касаемый бота",
  },
  {
    title: "Система Badges",
    description:
      "Вы же любите выделяться среди остальных? Ну конечно, мы же овнера. Вот и в нашем боте вы сможете выделиться благодаря значкам и наградам",
  },
  {
    title: "Система Bug",
    description:
      "Вы нашли Баг? Не хотите идти и писать на сервер поддержки? С помощью 1 команды вы сможете сообщить нам о проблеме. За это можно получить badge <3",
  },
];
