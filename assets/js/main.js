// =============================================================================
// Portfólio Cassiano Menezes - Orquestração & Interatividade (Clean Editorial)
// =============================================================================

(function () {
  "use strict";

  // Estado da Aplicação
  let activePersona = "all";
  const STORAGE_THEME_KEY = "cassiano_portfolio_theme";

  // Elementos do DOM
  const elements = {
    heroHeadline: document.getElementById("hero-headline"),
    heroTagline: document.getElementById("hero-tagline"),
    heroCvBtn: document.getElementById("hero-cv-btn"),
    projectsGrid: document.getElementById("projects-grid"),
    metricsGrid: document.getElementById("metrics-grid"),
    experienceTimeline: document.getElementById("experience-timeline"),
    educationTimeline: document.getElementById("education-timeline"),
    skillsGrid: document.getElementById("skills-grid"),
    cvGrid: document.getElementById("cv-grid"),
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    langToggleBtn: document.getElementById("lang-toggle-btn"),
    copyEmailBtns: document.querySelectorAll(".btn-copy-email"),
    toast: document.getElementById("editorial-toast"),
    toastMessage: document.getElementById("toast-message")
  };

  // Helper de Tradução
  function t(key) {
    return window.PORTFOLIO_I18N ? window.PORTFOLIO_I18N.t(key) : key;
  }

  function getLang() {
    return window.PORTFOLIO_I18N ? window.PORTFOLIO_I18N.getLang() : "pt";
  }

  // ===========================================================================
  // Gerenciamento de Tema (Dark / Light Editorial - 60/30/10)
  // ===========================================================================
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || "dark";
    applyTheme(savedTheme);

    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME_KEY, theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    if (!elements.themeToggleBtn) return;
    const isDark = theme === "dark";
    elements.themeToggleBtn.setAttribute("aria-label", isDark ? "Alternar para modo claro" : "Alternar para modo escuro");
    elements.themeToggleBtn.innerHTML = isDark
      ? `<svg class="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
      : `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
  }

  // ===========================================================================
  // Alternância Dinâmica de Perfil (Persona Switcher)
  // ===========================================================================
  function initPersonaSwitcher() {
    const pillButtons = document.querySelectorAll(".profile-pill-btn");
    pillButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetPersona = btn.getAttribute("data-persona");
        if (targetPersona && targetPersona !== activePersona) {
          activePersona = targetPersona;
          pillButtons.forEach(b => b.classList.toggle("active", b === btn));
          renderPersonaHero();
          renderProjects();
        }
      });
    });
  }

  function renderPersonaHero() {
    const lang = getLang();
    const persona = window.PORTFOLIO_DATA.personas[activePersona] || window.PORTFOLIO_DATA.personas.all;

    if (elements.heroHeadline) {
      elements.heroHeadline.textContent = persona.headline[lang];
    }
    if (elements.heroTagline) {
      elements.heroTagline.textContent = persona.tagline[lang];
    }
    if (elements.heroCvBtn) {
      const cv = persona.recommendedCv;
      elements.heroCvBtn.href = `assets/cv/${cv.name}`;
      elements.heroCvBtn.setAttribute("download", cv.name);
      elements.heroCvBtn.innerHTML = `
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>${cv.label[lang]}</span>
      `;
    }
  }

  // ===========================================================================
  // Renderização de Métricas com Destaque Ciano (10% Accent)
  // ===========================================================================
  function renderMetrics() {
    if (!elements.metricsGrid) return;
    const lang = getLang();
    const metrics = window.PORTFOLIO_DATA.metrics;

    elements.metricsGrid.innerHTML = metrics.map(m => `
      <div class="stat-block group">
        <div class="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">${m.label[lang]}</div>
        <div class="text-xl sm:text-2xl stat-block-value mb-1 group-hover:scale-105 transition-transform origin-left">${m.value[lang]}</div>
        <div class="text-xs sm:text-sm text-[var(--text-secondary)]">${m.sub[lang]}</div>
      </div>
    `).join("");
  }

  // ===========================================================================
  // Renderização de Projetos com Badges Funcionais e Alto Contraste
  // ===========================================================================
  function renderProjects() {
    if (!elements.projectsGrid) return;
    const lang = getLang();
    const allProjects = window.PORTFOLIO_DATA.projects;

    // Filtra de acordo com a persona ativa
    const filteredProjects = activePersona === "all"
      ? allProjects
      : allProjects.filter(p => p.personas.includes(activePersona));

    elements.projectsGrid.innerHTML = filteredProjects.map(p => {
      const techsHtml = p.techs.map(t => `<span class="tech-tag">${t}</span>`).join("");

      // Mapeamento de classe de badge funcional
      let badgeClass = "badge-neutral";
      if (p.badgeType === "live") badgeClass = "badge-live";
      else if (p.badgeType === "tech") badgeClass = "badge-tech";
      else if (p.badgeType === "corp") badgeClass = "badge-corp";

      const githubBtn = p.github ? `
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-editorial-ghost" title="${t("section.viewRepo")}">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          <span>${t("section.viewRepo")}</span>
        </a>
      ` : "";

      const secondaryGithubBtn = p.secondaryGithub ? `
        <a href="${p.secondaryGithub}" target="_blank" rel="noopener noreferrer" class="btn-editorial-ghost" title="${t("section.viewSecondaryRepo")}">
          <svg class="w-4 h-4 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          <span>Original MVC</span>
        </a>
      ` : "";

      const demoBtn = p.demo ? `
        <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn-editorial-primary text-xs py-1.5 px-3" title="${t("section.viewLive")}">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          <span>${t("section.viewLive")}</span>
        </a>
      ` : "";

      return `
        <article class="project-card">
          <div>
            <div class="flex items-center justify-between gap-3 mb-3">
              <span class="${badgeClass}">${p.badge[lang]}</span>
              <div class="flex items-center gap-2">
                ${demoBtn}
              </div>
            </div>

            <h3 class="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-1">${p.title}</h3>
            <p class="font-mono text-xs text-[var(--accent-cyan)] font-medium mb-3">${p.subtitle[lang]}</p>
            <p class="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">${p.description[lang]}</p>
          </div>

          <div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)] mb-3">
              ${techsHtml}
            </div>
            <div class="flex items-center justify-between pt-1">
              <div class="flex items-center gap-2">
                ${githubBtn}
                ${secondaryGithubBtn}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  // ===========================================================================
  // Renderização de Trajetória (Experiência & Formação)
  // ===========================================================================
  function renderTimeline() {
    const lang = getLang();

    if (elements.experienceTimeline) {
      const exp = window.PORTFOLIO_DATA.experience;
      elements.experienceTimeline.innerHTML = exp.map(item => `
        <div class="border-l-2 border-[var(--border-subtle)] pl-4 sm:pl-6 pb-8 relative group">
          <div class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-glow)]"></div>
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h4 class="text-base sm:text-lg font-bold text-[var(--text-primary)]">${item.role[lang]}</h4>
            <span class="font-mono text-xs text-[var(--text-muted)]">${item.period[lang]}</span>
          </div>
          <div class="text-sm font-semibold text-[var(--text-secondary)] mb-2">${item.company} • <span class="font-normal text-[var(--text-muted)]">${item.location[lang]}</span></div>
          <ul class="space-y-1.5 mt-2">
            ${item.bullets[lang].map(b => `
              <li class="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <span class="text-[var(--accent-cyan)] font-mono select-none font-bold">›</span>
                <span>${b}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `).join("");
    }

    if (elements.educationTimeline) {
      const edu = window.PORTFOLIO_DATA.education;
      elements.educationTimeline.innerHTML = edu.map(item => `
        <div class="border-l-2 border-[var(--border-subtle)] pl-4 sm:pl-6 pb-6 relative group">
          <div class="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-glow)]"></div>
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h4 class="text-base sm:text-lg font-bold text-[var(--text-primary)]">${item.degree[lang]}</h4>
            <span class="font-mono text-xs text-[var(--text-muted)]">${item.period}</span>
          </div>
          <div class="text-sm font-semibold text-[var(--text-secondary)] mb-1">${item.institution} • <span class="font-semibold text-[var(--accent-cyan)]">${item.status[lang]}</span></div>
          <p class="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">${item.details[lang]}</p>
        </div>
      `).join("");
    }
  }

  // ===========================================================================
  // Renderização da Matriz de Competências (Títulos Destacados & Grid Otimizado)
  // ===========================================================================
  function renderSkills() {
    if (!elements.skillsGrid) return;
    const lang = getLang();
    const skills = window.PORTFOLIO_DATA.skills;

    elements.skillsGrid.innerHTML = skills.map(group => `
      <div class="border border-[var(--border-subtle)] bg-[var(--bg-surface)] rounded-xl p-5 sm:p-6 hover:border-[var(--accent-cyan)] hover:shadow-[0_8px_30px_var(--accent-glow)] transition-all duration-500 flex flex-col justify-between">
        <div>
          <h4 class="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight mb-4 pb-3 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <span>${group.category[lang]}</span>
            <span class="w-2 h-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-glow)]"></span>
          </h4>
          <div class="flex flex-wrap gap-2">
            ${group.items.map(skill => `<span class="tech-tag">${skill}</span>`).join("")}
          </div>
        </div>
      </div>
    `).join("");
  }

  // ===========================================================================
  // Renderização da Central de Currículos Especializados
  // ===========================================================================
  function renderCurriculums() {
    if (!elements.cvGrid) return;
    const lang = getLang();
    const cvs = window.PORTFOLIO_DATA.curriculums;

    elements.cvGrid.innerHTML = cvs.map(cv => `
      <div class="border border-[var(--border-subtle)] bg-[var(--bg-surface)] rounded-lg p-5 flex flex-col justify-between hover:border-[var(--accent-cyan)] hover:shadow-[0_8px_25px_var(--accent-glow)] transition-all">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-4 h-4 text-[var(--accent-cyan)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h4 class="font-bold text-sm sm:text-base text-[var(--text-primary)]">${cv.title[lang]}</h4>
          </div>
          <p class="text-xs sm:text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">${cv.target[lang]}</p>
          <div class="mb-4">
            <span class="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] block mb-1.5 font-semibold">${t("section.cvKeywords")}</span>
            <div class="flex flex-wrap gap-1">
              ${cv.keywords.map(kw => `<span class="tech-tag text-[11px] px-2 py-0.5">${kw}</span>`).join("")}
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <span class="font-mono text-[11px] text-[var(--text-muted)]">PDF • One-Page Standard</span>
          <a href="${cv.file}" download="${cv.file.split('/').pop()}" class="btn-editorial-primary text-xs py-1.5 px-3">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>${t("section.cvDownloadBtn")}</span>
          </a>
        </div>
      </div>
    `).join("");
  }

  // ===========================================================================
  // Ação de Copiar E-mail com 1 Clique & Toast Notification
  // ===========================================================================
  function initEmailCopy() {
    const emailToCopy = window.PORTFOLIO_DATA.personal.email;

    elements.copyEmailBtns.forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(emailToCopy).then(() => {
            showToast(t("toast.emailCopied"));
          }).catch(() => {
            fallbackCopy(emailToCopy);
          });
        } else {
          fallbackCopy(emailToCopy);
        }
      });
    });
  }

  function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(t("toast.emailCopied"));
    } catch (err) {
      window.location.href = `mailto:${text}`;
    }
    document.body.removeChild(textArea);
  }

  let toastTimer = null;
  function showToast(message) {
    if (!elements.toast) return;
    if (elements.toastMessage) {
      elements.toastMessage.textContent = message;
    }
    elements.toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toast.classList.remove("show");
    }, 3200);
  }

  // ===========================================================================
  // Toggle de Idioma (PT / EN)
  // ===========================================================================
  function initLanguage() {
    if (elements.langToggleBtn && window.PORTFOLIO_I18N) {
      elements.langToggleBtn.addEventListener("click", () => {
        window.PORTFOLIO_I18N.toggleLang();
      });
    }

    window.addEventListener("portfolio:langchange", () => {
      renderAll();
    });
  }

  // ===========================================================================
  // Renderização Geral
  // ===========================================================================
  function renderAll() {
    if (window.PORTFOLIO_I18N) {
      window.PORTFOLIO_I18N.updateDOM();
    }
    renderPersonaHero();
    renderMetrics();
    renderProjects();
    renderTimeline();
    renderSkills();
    renderCurriculums();
  }

  // ===========================================================================
  // Inicialização no DOMContentLoaded
  // ===========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLanguage();
    initPersonaSwitcher();
    initEmailCopy();
    renderAll();
  });
})();
