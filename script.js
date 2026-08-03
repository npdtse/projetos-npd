/* === [CAPÍTULO] BANCO DE DADOS DE SOLUÇÕES (NPD 2026) === */

const NPD_PROJECTS = [
    {
        id: "controle-auditorias",
        title: "Controle das Auditorias e Consultorias",
        type: "planilha",
        status: "delivered",
        url: "https://justicaeleitoral.sharepoint.com/:x:/r/sites/NPD/_layouts/15/Doc.aspx?action=edit&sourcedoc=%7B988c2735-665c-45c2-9b68-717ebedeb6a2%7D&wdExp=TEAMS-TREATMENT&web=1",
        screenshot: "screenshot_controle_auditorias.png",
        objective: "Consolidação e controle gerencial do cronograma de auditorias e consultorias da secretaria planejadas para o exercício de 2026.",
        operation: "Alimentada pelas chefias de seção e coordenadorias diretamente no SharePoint, consolidando em repositório único o andamento de cada fase operacional.",
        benefits: "Garante ao Gabinete da SAU (GAB-SAU) e coordenadorias (COAUD e COAUG) uma visão atualizada dos prazos, facilitando o gerenciamento de alocação de equipes de fiscalização.",
        orgUnits: ["GAB-SAU", "COAUD", "COAUG"]
    },
    {
        id: "faq-planilha",
        title: "FAQ da Planilha de Controle",
        type: "site",
        status: "delivered",
        url: "https://npdtse.github.io/faq-sau/",
        screenshot: "screenshot_faq_planilha.png",
        objective: "Repositório centralizado de dúvidas frequentes, instruções normativas de preenchimento e regras de validação aplicadas à Planilha de Controle.",
        operation: "Hospedado na Intranet/Teams, serve como manual de consulta direta durante a atualização de campos, prazos e marcos de auditoria.",
        benefits: "Toda a SAU. Uniformiza os critérios de inserção de dados pelas seções operacionais, minimizando erros e a necessidade de saneamento posterior das informações.",
        orgUnits: ["Toda a SAU"]
    },
    {
        id: "simulador-prazos",
        title: "Simulador de Prazos",
        type: "planilha",
        status: "delivered",
        url: "https://justicaeleitoral.sharepoint.com/:x:/r/sites/NPD/_layouts/15/Doc.aspx?action=edit&sourcedoc=%7B988c2735-665c-45c2-9b68-717ebedeb6a2%7D&wdExp=TEAMS-TREATMENT&web=1",
        screenshot: "screenshot_simulador_prazos.png",
        objective: "Cálculo parametrizado automático de cronogramas regulamentares e marcos críticos em processos de auditoria ordinária.",
        operation: "O auditor insere a data de abertura do processo e a planilha projeta automaticamente as datas limites para manifestações, relatórios preliminares, julgamento e arquivamento.",
        benefits: "Toda a SAU. Oferece visibilidade de prazos para as seções de auditoria no controle defensivo de prazos, prevenindo perdas de prazos institucionais.",
        orgUnits: ["Toda a SAU"]
    },
    {
        id: "painel-estatistico",
        title: "Painel Estatístico de Auditorias e Consultorias",
        type: "bi",
        status: "delivered",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMTU2MTk0ZmEtM2E3My00NTdiLTkxM2MtY2NkMGJjOTE5ODRhIiwidCI6ImFiNzcyYzYzLWViMzgtNGIxZS1iZWY3LTdiNjBlZDhhY2RmMSJ9&pageName=c33caa8665515898c29b",
        screenshot: "screenshot_painel_estatistico.png",
        objective: "Consolidação gráfica e analítica dos indicadores de resultados de auditoria e monitoramento do passivo de recomendações expedidas.",
        operation: "Consome dados brutos da Planilha de Controle e exibe gráficos interativos estruturados por coordenadoria, seção e nível de atendimento de recomendações pelas unidades auditadas.",
        benefits: "Apoia o Gabinete da SAU (GAB-SAU) na prestação de contas estatísticas da secretaria para a alta gestão do Tribunal de forma automatizada.",
        orgUnits: ["GAB-SAU", "COAUD", "COAUG"]
    },
    {
        id: "sharepoint-teams",
        title: "SharePoint da SAU no Microsoft Teams",
        type: "site",
        status: "delivered",
        url: "https://justicaeleitoral.sharepoint.com/sites/SAU-COMUNICACAO",
        screenshot: "screenshot_sharepoint_teams.png",
        objective: "Unificação de documentos, bibliotecas digitais, atas de reuniões e normativos da SAU em um único portal corporativo acessível via Teams.",
        operation: "Integra o repositório de arquivos de rede corporativa a uma interface colaborativa de busca e edição simultânea em nuvem.",
        benefits: "Toda a SAU. Padroniza o compartilhamento de arquivos entre coordenadorias e seções, mitigando a duplicidade de versões de minutas e relatórios.",
        orgUnits: ["Toda a SAU"]
    },
    {
        id: "plano-tatico",
        title: "Plano Tático da SAU",
        type: "site",
        status: "progress",
        url: "https://npdtse.github.io/mapa-estrategico/",
        screenshot: "screenshot_plano_tatico.png",
        objective: "Exibição estruturada da matriz SWOT, objetivos, metas e indicadores estratégicos táticos vigentes na Secretaria de Auditoria.",
        operation: "Hospedado no ambiente SharePoint, funciona como link externo integrado ao portal corporativo para consulta de objetivos de nível tático.",
        benefits: "Garante ao Gabinete da SAU (GAB-SAU) e coordenadorias o acompanhamento do alinhamento das atividades com as metas institucionais.",
        orgUnits: ["GAB-SAU"]
    },
    {
        id: "automacao-paq-aud",
        title: "Questionários do PAQ-AUD",
        type: "fluxo",
        status: "progress",
        url: "https://forms.cloud.microsoft/Pages/DesignPagev2.aspx?groupid=4e82c954-f1f0-4e7a-89d4-afde72c799eb",
        screenshot: "screenshot_automacao_paq_aud.png",
        objective: "Automação do Programa de Avaliação de Qualidade das Auditorias e Consultorias da SAU (PAQ-AUD).",
        operation: "Dispara questionários aos auditados após homologação de relatórios, monitora retornos, cria pastas dedicadas de backup em rede e consolida dados em planilha gerencial.",
        benefits: "Gabinete da SAU (GAB-SAU). Elimina a necessidade de controle, tabulação e armazenamento manual de questionários por e-mail.",
        orgUnits: ["GAB-SAU"]
    },
    {
        id: "painel-qualidade",
        title: "Painel de Qualidade",
        type: "bi",
        status: "progress",
        url: null,
        screenshot: "screenshot_painel_qualidade.png",
        objective: "Consolidação analítica dos resultados do Programa de Avaliação de Qualidade (PAQ-AUD).",
        operation: "Consome automaticamente a planilha consolidada de respostas do PAQ-AUD gerada pela automação de fluxos, exibindo indicadores qualitativos em tempo real.",
        benefits: "Toda a SAU. Oferece visibilidade direta de pontos fortes e oportunidades de aprimoramento metodológico dos trabalhos de fiscalização.",
        orgUnits: ["Toda a SAU"]
    },
    {
        id: "mapa-processos",
        title: "Mapa de Processos de Auditoria e Consultoria",
        type: "site",
        status: "progress",
        url: "https://npdtse.github.io/fluxograma-processos/",
        screenshot: "screenshot_mapa_processos.png",
        objective: "Modelagem visual sequencial das fases regulamentares de processos de fiscalização conduzidos pela SAU.",
        operation: "Vincula, para cada etapa mapeada (Planejamento, Execução e Comunicação), os respectivos modelos de roteiro e resoluções aplicáveis.",
        benefits: "Toda a SAU. Padroniza a metodologia operacional de fiscalização executada por auditores recém-ingressos ou ativos nas seções.",
        orgUnits: ["Toda a SAU"]
    },
    {
        id: "pre-auditoria-folhas",
        title: "Pré-Auditoria Automatizada de Folhas de Pagamento",
        type: "app",
        status: "progress",
        url: "https://npdtse.github.io/auditoria-de-folhas-de-pagamento/",
        screenshot: "screenshot_pre_auditoria_folhas.png",
        objective: "Cruzamento automatizado e parametrização de bases de dados de pessoal para auditoria prévia de folhas de pagamento.",
        operation: "Realiza a varredura preventiva de arquivos de folha contra regras de acúmulo, tetos salariais e vantagens em reunião conjunta com seções especializadas.",
        benefits: "Seções de Auditoria de Pessoal e de Gestão (SEAUP e SEAUG). Permite identificar inconformidades de folha antes do processamento oficial, reduzindo o tempo de auditoria manual.",
        orgUnits: ["SEAUP", "SEAUG"]
    },
    {
        id: "gestao-competencias",
        title: "Gestão de Competências",
        type: "app",
        status: "queue",
        url: null,
        screenshot: "screenshot_competencias.png",
        objective: "Cadastro de competências técnicas individuais para funções distintas, identificação de gaps e estruturação de Planos de Desenvolvimento Individual (PDI).",
        operation: "Auditores realizam autoavaliação anual de competências específicas. O sistema consolida as lacunas coletivas para subsidiar o planejamento de cursos pela secretaria.",
        benefits: "Toda a SAU. Direciona os recursos de treinamento para as reais necessidades técnicas de fiscalização da secretaria.",
        orgUnits: ["Toda a SAU"]
    },
    {
        id: "maturidade-iacm",
        title: "Maturidade da Auditoria a partir do IA-CM",
        type: "app",
        status: "queue",
        url: null,
        screenshot: "screenshot_iacm_maturidade.png",
        objective: "Diagnóstico e apuração do nível de maturidade da secretaria conforme o modelo de referência internacional IA-CM.",
        operation: "Compila avaliações aplicadas à SAU, alta gestão e órgãos de controle interno do TSE, mapeando o atendimento de requisitos essenciais de governança.",
        benefits: "Toda a SAU e Alta Gestão. Estabelece plano tático estruturado de etapas para o alcance de níveis superiores de governança e profissionalismo na auditoria interna.",
        orgUnits: ["Toda a SAU", "GAB-SAU"]
    },
    {
        id: "ecosistema-portal",
        title: "Acompanhamento do Plano de Ação da SAU",
        type: "app",
        status: "queue",
        url: null,
        screenshot: "screenshot_ecosistema_portal.png",
        objective: "Unificação modular de todas as soluções e ferramentas isoladas do NPD em um único ecossistema web corporativo.",
        operation: "Integra o acesso a planilhas eletrônicas, sites e painéis sob segurança centralizada e barramento único de dados operacionais.",
        benefits: "Toda a SAU. Consolida a experiência do usuário auditor, eliminando redundâncias de dados e otimizando o tempo de manutenção de soluções de TI pelo núcleo.",
        orgUnits: ["Toda a SAU"]
    }
];

/* === [CAPÍTULO] GERENCIAMENTO DE ESTADO E INICIALIZAÇÃO === */

document.addEventListener("DOMContentLoaded", () => {
    // Cache de elementos do DOM
    const elements = {
        portalView: document.getElementById("portal-view"),
        mainArea: document.getElementById("main-area"),
        btnThemeToggle: document.getElementById("btn-theme-toggle"),
        
        // Listas das Colunas do Launchpad (Home)
        listDelivered: document.getElementById("list-delivered"),
        listProgress: document.getElementById("list-progress"),
        listQueue: document.getElementById("list-queue")
    };

    let activeFilter = "all";

    // Inicialização da aplicação Launchpad
    function init() {
        renderCounts();
        renderPortfolioCards();
        registerEvents();
        loadThemePreference();
    }

    /* === [CAPÍTULO] RENDERIZAÇÃO DINÂMICA === */

    // Calcula e insere os contadores de tipos e fases
    function renderCounts() {
        const counts = {
            all: NPD_PROJECTS.length,
            planilha: NPD_PROJECTS.filter(p => p.type === "planilha").length,
            bi: NPD_PROJECTS.filter(p => p.type === "bi").length,
            site: NPD_PROJECTS.filter(p => p.type === "site").length,
            app: NPD_PROJECTS.filter(p => p.type === "app").length,
            fluxo: NPD_PROJECTS.filter(p => p.type === "fluxo").length,
            
            delivered: NPD_PROJECTS.filter(p => p.status === "delivered").length,
            progress: NPD_PROJECTS.filter(p => p.status === "progress").length,
            queue: NPD_PROJECTS.filter(p => p.status === "queue").length
        };

        for (const [key, value] of Object.entries(counts)) {
            const countEl = document.getElementById(`count-${key}`);
            if (countEl) countEl.textContent = value;
        }
    }

    // Retorna a classe Font Awesome correspondente ao tipo
    function getTypeIconClass(type) {
        switch (type) {
            case "planilha": return "fa-solid fa-table";
            case "bi": return "fa-solid fa-chart-column";
            case "site": return "fa-solid fa-globe";
            case "app": return "fa-solid fa-laptop";
            case "fluxo": return "fa-solid fa-diagram-project";
            default: return "fa-solid fa-cube";
        }
    }

    // Renderiza cartões com acionamento de link direto ou alerta de desenvolvimento local
    function renderPortfolioCards() {
        elements.listDelivered.innerHTML = "";
        elements.listProgress.innerHTML = "";
        elements.listQueue.innerHTML = "";

        NPD_PROJECTS.forEach(project => {
            const card = document.createElement("div");
            card.className = "npd-card";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("data-id", project.id);
            card.setAttribute("data-type", project.type);

            const hasValidUrl = project.url && project.url.startsWith("http");
            
            if (hasValidUrl) {
                card.setAttribute("aria-label", `Abrir ${project.title} em nova aba`);
            } else {
                card.setAttribute("aria-label", `${project.title} - Solução em desenvolvimento local`);
            }

            // Ícone do indicador visual de link externo ou informação
            const actionIconHtml = hasValidUrl
                ? `<i class="fa-solid fa-arrow-up-right-from-square npd-card__link-icon" title="Abrir em nova aba"></i>`
                : `<i class="fa-solid fa-clock npd-card__link-icon npd-card__link-icon--pending" title="Em desenvolvimento local"></i>`;

            card.innerHTML = `
                <div class="npd-card__header">
                    <div class="npd-card__type-icon">
                        <i class="${getTypeIconClass(project.type)}"></i>
                    </div>
                    ${actionIconHtml}
                </div>
                <h4 class="npd-card__title">${project.title}</h4>
            `;

            // Ação ao clicar no cartão
            const handleCardAction = () => {
                if (hasValidUrl) {
                    window.open(project.url, "_blank", "noopener,noreferrer");
                } else {
                    Swal.fire({
                        icon: "info",
                        title: "Solução em Desenvolvimento",
                        text: `A ferramenta "${project.title}" encontra-se em fase de desenvolvimento ou estudo local. O link de acesso direto estará disponível em breve.`,
                        confirmButtonColor: "#0073E6"
                    });
                }
            };

            card.addEventListener("click", handleCardAction);
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardAction();
                }
            });

            if (project.status === "delivered") {
                elements.listDelivered.appendChild(card);
            } else if (project.status === "progress") {
                elements.listProgress.appendChild(card);
            } else if (project.status === "queue") {
                elements.listQueue.appendChild(card);
            }
        });
    }

    /* === [CAPÍTULO] FILTROS DO CATÁLOGO DE SOLUÇÕES === */

    function filterPortfolio(filterType) {
        activeFilter = filterType;
        const cards = document.querySelectorAll(".npd-card");

        cards.forEach(card => {
            const cardType = card.getAttribute("data-type");
            if (filterType === "all" || cardType === filterType) {
                card.classList.remove("npd-u-dimmed");
                card.style.pointerEvents = "auto";
                card.style.opacity = "1";
            } else {
                card.classList.add("npd-u-dimmed");
                card.style.pointerEvents = "none";
                card.style.opacity = "0.2";
            }
        });

        document.querySelectorAll(".npd-catalog-card").forEach(btn => {
            const btnFilter = btn.getAttribute("data-filter");
            if (btnFilter === filterType) {
                btn.classList.add("active");
                btn.setAttribute("aria-pressed", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            }
        });
    }

    /* === [CAPÍTULO] MODO ESCURO E PREFERÊNCIAS === */

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("npd-theme-pref", newTheme);

        const icon = elements.btnThemeToggle.querySelector("i");
        const text = elements.btnThemeToggle.querySelector(".npd-btn__text");

        if (newTheme === "dark") {
            icon.className = "fa-solid fa-sun";
            text.textContent = "Modo Claro";
        } else {
            icon.className = "fa-solid fa-moon";
            text.textContent = "Modo Escuro";
        }
    }

    function loadThemePreference() {
        const savedTheme = localStorage.getItem("npd-theme-pref") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);

        const icon = elements.btnThemeToggle.querySelector("i");
        const text = elements.btnThemeToggle.querySelector(".npd-btn__text");

        if (savedTheme === "dark") {
            icon.className = "fa-solid fa-sun";
            text.textContent = "Modo Claro";
        } else {
            icon.className = "fa-solid fa-moon";
            text.textContent = "Modo Escuro";
        }
    }

    /* === [CAPÍTULO] EVENTOS GLOBAIS === */

    function registerEvents() {
        // Catálogo de Filtros
        document.querySelectorAll(".npd-catalog-card").forEach(btn => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");
                filterPortfolio(filter);
            });
        });

        // Alternar Tema
        elements.btnThemeToggle.addEventListener("click", toggleTheme);
    }

    // Dispara a inicialização da aplicação
    init();
});