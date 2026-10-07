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
        links: [
            {
                label: "Открыть бота",
                url: "https://t.me/gift_by_kalma_x_bot"
            }
        ]
    }
];

// ================================
// POPULAR PROJECTS
// ================================

document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");
    const projectCount = document.getElementById("project-count");

    if (!projectList || typeof projects === "undefined") {
        return;
    }

    // Показываем проекты на главной
    const popularProjects = projects.slice(0, 3);

    // Счётчик
    if (projectCount) {
        const count = popularProjects.length;

        projectCount.textContent =
            `${String(count).padStart(2, "0")} ${
                count === 1 ? "PROJECT" : "PROJECTS"
            }`;
    }

    // Экранирование HTML
    const escapeHtml = (value) => {
        return String(value ?? "").replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char]));
    };

    // Безопасная ссылка
    const safeUrl = (value) => {
        try {
            const url = new URL(
                String(value || "#"),
                window.location.href
            );

            if (
                url.protocol === "http:" ||
                url.protocol === "https:" ||
                url.protocol === "file:"
            ) {
                return url.href;
            }

            return "#";
        } catch {
            return "#";
        }
    };

    // Рендер карточек
    projectList.innerHTML = popularProjects.map((project) => {

        const image = project.image
            ? `
                <img
                    src="${escapeHtml(safeUrl(project.image))}"
                    alt="${escapeHtml(project.title)}"
                    loading="lazy"
                    onerror="
                        this.style.display='none';
                        this.parentElement.classList.add('placeholder')
                    "
                >
            `
            : "";

        // У тебя links сейчас может быть объектом или массивом,
        // поэтому поддерживаем оба варианта.
        let projectLink = "";

        if (Array.isArray(project.links)) {
            const firstLink = project.links.find(
                link => link && link.url
            );

            if (firstLink) {
                projectLink = firstLink.url;
            }
        } else if (
            project.links &&
            typeof project.links === "object"
        ) {
            const firstLink = Object.values(project.links).find(
                link => typeof link === "string"
            );

            if (firstLink) {
                projectLink = firstLink;
            }
        }

        const mainLink =
            project.download ||
            projectLink ||
            "projects.html";

        const isCatalogLink =
            !project.download && !projectLink;

        return `
            <article class="project-card">

                <div class="project-image ${project.image ? "" : "placeholder"}">
                    ${image}

                    ${
                        !project.image
                            ? `<span>JUST PROJECT</span>`
                            : ""
                    }
                </div>

                <div class="project-body">

                    <div class="project-meta">
                        <span class="project-type">
                            ${escapeHtml(project.type || "PROJECT")}
                        </span>

                        <span class="project-status">
                            ${escapeHtml(project.status || "")}
                        </span>
                    </div>

                    <h3>
                        ${escapeHtml(project.title)}
                    </h3>

                    <p>
                        ${escapeHtml(project.description || "")}
                    </p>

                    <div class="project-actions">

                        <a
                            class="project-link primary-link"
                            href="${escapeHtml(safeUrl(mainLink))}"
                            ${
                                isCatalogLink
                                    ? ""
                                    : `target="_blank" rel="noopener"`
                            }
                        >
                            ${
                                project.download
                                    ? "Открыть проект"
                                    : "Подробнее"
                            }
                            ↗
                        </a>

                    </div>

                </div>

            </article>
        `;
    }).join("");
});
