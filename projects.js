/*
  СПИСОК ПРОЕКТОВ JUST STUDIO
  Добавляйте новые объекты в массив ниже, разделяя их запятыми.

  Поля:
  title       — название проекта
  type        — тип: MOD, BOT, PLUGIN, GAME и т.д.
  status      — например: Available, In development
  description — описание проекта
  image       — путь к фото (например assets/my-project.png) или прямая ссылка на изображение
  links       — массив кнопок: { label: "Открыть", url: "https://..." }

  Для Telegram-бота используйте type: "BOT", а в links добавьте
  { label: "Открыть бота", url: "https://t.me/имя_бота" }.
*/
const projects = [
  {
    title: "JP FPS Displayer",
    type: "Minecraft MOD",
    category: "mods",
    status: "Опубликован",
    description: "Модификация для Minecraft, опубликованная в 2025 году под названием JustProject. Подробности и загрузка доступны на CurseForge.",
    image: "",
    download: "assets/fpsdisplayer-1.0.0.jar",
    links: [
      { label: "Страница проекта", url: "https://www.curseforge.com/minecraft/mc-mods/justproject-fpsdisplayer" }
    ]
  }
];
