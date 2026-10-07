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
        description: "Minecraft-модификация для отображения FPS и дополнительной информации. Проект был опубликован в 2025 году.",
        image: "assets/jp-fps-displayer.png",
        download: "https://www.curseforge.com/minecraft/mc-mods/justproject-fpsdisplayer",
        links: {
            curseforge: "https://www.curseforge.com/minecraft/mc-mods/justproject-fpsdisplayer"
        }
    },

    {
        title: "JustHUD",
        type: "Minecraft MOD",
        category: "mods",
        status: "В разработке",
        description: "Новая HUD-модификация Just Studio с отображением FPS, CPS, координат, информации об игроке и других элементов интерфейса.",
        image: "assets/justhud.png",
        download: "",
        links: {}
    },

    {
        title: "Игровой Telegram-бот",
        type: "Telegram Bot",
        category: "bots",
        status: "Завершён",
        description: "Индивидуальный Telegram-бот, разработанный по заказу. Проект включает игровую систему, пользовательское меню и взаимодействие с пользователями.",
        image: "assets/custom-bot.png",
        download: "",
        links: {}
    }
];
