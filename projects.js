/*
  СПИСОК ПРОЕКТОВ JUST STUDIO

  Поля:
  title       — название проекта
  type        — тип проекта
  category    — категория
  status      — статус
  description — описание
  image       — путь к изображению
  links       — массив кнопок
*/

const projects = [
    {
        title: "JP FPS Displayer",
        type: "Minecraft MOD",
        category: "mods",
        status: "Опубликован",
        description:
            "Minecraft-модификация для отображения FPS и дополнительной информации. Проект был опубликован в 2025 году.",
        image: "assets/jp-fps-displayer.png",
        links: [
            {
                label: "Открыть на CurseForge",
                url: "https://www.curseforge.com/minecraft/mc-mods/justproject-fpsdisplayer"
            }
        ]
    },

    {
        title: "JustHUD",
        type: "Minecraft MOD",
        category: "mods",
        status: "В разработке",
        description:
            "Новая HUD-модификация Just Studio с отображением FPS, CPS, координат, информации об игроке и других элементов интерфейса.",
        image: "assets/justhud.png",
        links: []
    },

    {
        title: "Игровой Telegram-бот",
        type: "Telegram Bot",
        category: "bots",
        status: "Завершён",
        description:
            "Индивидуальный Telegram-бот, разработанный по заказу. Проект включает игровую систему, пользовательское меню и взаимодействие с пользователями.",
        image: "assets/custom-bot.png",
        links: []
    }
];
