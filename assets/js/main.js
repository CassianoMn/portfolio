(function () {
  "use strict";

  const STORAGE_THEME_KEY = "cassiano_portfolio_theme";
  let activePersona = "all";
  const projectSlideIndices = {};

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
    mobileMenuBtn: document.getElementById("mobile-menu-btn"),
    mobileNav: document.getElementById("mobile-nav"),
    menuIconOpen: document.getElementById("menu-icon-open"),
    menuIconClose: document.getElementById("menu-icon-close"),
    copyEmailBtns: document.querySelectorAll(".btn-copy-email"),
    toast: document.getElementById("editorial-toast"),
    toastMessage: document.getElementById("toast-message")
  };

  function t(key) {
    return window.PORTFOLIO_I18N ? window.PORTFOLIO_I18N.t(key) : key;
  }

  function getLang() {
    return window.PORTFOLIO_I18N ? window.PORTFOLIO_I18N.getLang() : "pt";
  }

  const ThemeModule = {
    init() {
      const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || "dark";
      this.applyTheme(savedTheme);

      if (elements.themeToggleBtn) {
        elements.themeToggleBtn.addEventListener("click", () => {
          const current = document.documentElement.getAttribute("data-theme") || "dark";
          const next = current === "dark" ? "light" : "dark";
          this.applyTheme(next);
        });
      }
    },

    applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(STORAGE_THEME_KEY, theme);
      this.updateIcon(theme);
    },

    updateIcon(theme) {
      if (!elements.themeToggleBtn) return;
      const isDark = theme === "dark";
      elements.themeToggleBtn.setAttribute("aria-label", isDark ? "Alternar para modo claro" : "Alternar para modo escuro");
      elements.themeToggleBtn.innerHTML = isDark
        ? `<svg class="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
        : `<svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
    }
  };

  const MobileNavModule = {
    init() {
      if (!elements.mobileMenuBtn || !elements.mobileNav) return;

      elements.mobileMenuBtn.addEventListener("click", () => {
        this.toggle();
      });

      const mobileLinks = elements.mobileNav.querySelectorAll(".mobile-nav-link");
      mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
          this.close();
        });
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
          this.close();
        }
      });
    },

    toggle() {
      const isOpen = elements.mobileNav.classList.contains("is-open");
      if (isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    open() {
      elements.mobileNav.classList.add("is-open");
      elements.mobileMenuBtn.setAttribute("aria-expanded", "true");
      if (elements.menuIconOpen) elements.menuIconOpen.classList.add("hidden");
      if (elements.menuIconClose) elements.menuIconClose.classList.remove("hidden");
    },

    close() {
      elements.mobileNav.classList.remove("is-open");
      elements.mobileMenuBtn.setAttribute("aria-expanded", "false");
      if (elements.menuIconOpen) elements.menuIconOpen.classList.remove("hidden");
      if (elements.menuIconClose) elements.menuIconClose.classList.add("hidden");
    }
  };

  const ScrollAnimationModule = {
    observer: null,

    init() {
      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".scroll-reveal").forEach(el => el.classList.add("is-visible"));
        return;
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            this.observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
      });

      this.observeAll();
    },

    observeAll() {
      if (!this.observer) return;
      const targets = document.querySelectorAll(".scroll-reveal:not(.is-visible)");
      targets.forEach(el => this.observer.observe(el));
    }
  };

  const PersonaModule = {
    init() {
      const pillButtons = document.querySelectorAll(".profile-pill-btn");
      pillButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const targetPersona = btn.getAttribute("data-persona");
          if (targetPersona && targetPersona !== activePersona) {
            activePersona = targetPersona;
            pillButtons.forEach(b => {
              const isActive = b === btn;
              b.classList.toggle("active", isActive);
              b.setAttribute("aria-selected", isActive ? "true" : "false");
            });
            RenderModule.renderPersonaHero();
            RenderModule.renderProjects();
            ScrollAnimationModule.observeAll();
          }
        });
      });
    }
  };

  const ProjectCarouselModule = {
    setupCarousels() {
      const carousels = document.querySelectorAll(".project-carousel");
      carousels.forEach(carousel => {
        const projectId = carousel.getAttribute("data-project-id");
        if (!projectId) return;

        if (typeof projectSlideIndices[projectId] === "undefined") {
          projectSlideIndices[projectId] = 0;
        }

        const prevBtn = carousel.querySelector(".carousel-btn.prev");
        const nextBtn = carousel.querySelector(".carousel-btn.next");
        const dots = carousel.querySelectorAll(".carousel-dot");
        const slides = carousel.querySelectorAll(".project-carousel-slide");
        const totalSlides = slides.length;

        if (totalSlides <= 1) {
          if (prevBtn) prevBtn.style.display = "none";
          if (nextBtn) nextBtn.style.display = "none";
          return;
        }

        const goToSlide = (newIndex) => {
          if (newIndex < 0) newIndex = totalSlides - 1;
          if (newIndex >= totalSlides) newIndex = 0;
          projectSlideIndices[projectId] = newIndex;

          const track = carousel.querySelector(".project-carousel-track");
          if (track) {
            track.style.transform = `translateX(-${newIndex * 100}%)`;
          }

          dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === newIndex);
            dot.setAttribute("aria-current", idx === newIndex ? "true" : "false");
          });
        };

        if (prevBtn) {
          prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            goToSlide(projectSlideIndices[projectId] - 1);
          });
        }

        if (nextBtn) {
          nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            goToSlide(projectSlideIndices[projectId] + 1);
          });
        }

        dots.forEach(dot => {
          dot.addEventListener("click", (e) => {
            e.preventDefault();
            const targetIndex = parseInt(dot.getAttribute("data-slide-index"), 10);
            if (!isNaN(targetIndex)) {
              goToSlide(targetIndex);
            }
          });
        });

        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener("touchstart", (e) => {
          touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener("touchend", (e) => {
          touchEndX = e.changedTouches[0].screenX;
          const diff = touchStartX - touchEndX;
          if (Math.abs(diff) > 40) {
            if (diff > 0) {
              goToSlide(projectSlideIndices[projectId] + 1);
            } else {
              goToSlide(projectSlideIndices[projectId] - 1);
            }
          }
        }, { passive: true });
      });
    }
  };

  const ClipboardModule = {
    init() {
      const emailToCopy = window.PORTFOLIO_DATA.personal.email;

      elements.copyEmailBtns.forEach(btn => {
        btn.addEventListener("click", e => {
          e.preventDefault();
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(emailToCopy)
              .then(() => this.showToast(t("toast.emailCopied")))
              .catch(() => this.fallback(emailToCopy));
          } else {
            this.fallback(emailToCopy);
          }
        });
      });
    },

    fallback(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        this.showToast(t("toast.emailCopied"));
      } catch (err) {
        window.location.href = `mailto:${text}`;
      }
      document.body.removeChild(textArea);
    },

    toastTimer: null,
    showToast(message) {
      if (!elements.toast) return;
      if (elements.toastMessage) {
        elements.toastMessage.textContent = message;
      }
      elements.toast.classList.add("show");
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        elements.toast.classList.remove("show");
      }, 3200);
    }
  };

  const RenderModule = {
    renderPersonaHero() {
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
    },

    renderMetrics() {
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
    },

    renderProjects() {
      if (!elements.projectsGrid) return;
      const lang = getLang();
      const allProjects = window.PORTFOLIO_DATA.projects;

      const filteredProjects = activePersona === "all"
        ? allProjects
        : allProjects.filter(p => p.personas.includes(activePersona));

      elements.projectsGrid.innerHTML = filteredProjects.map(p => {
        const techsHtml = p.techs.map(tech => `<span class="tech-tag">${tech}</span>`).join("");

        let badgeClass = "badge-neutral";
        if (p.badgeType === "live") badgeClass = "badge-live";
        else if (p.badgeType === "tech") badgeClass = "badge-tech";
        else if (p.badgeType === "corp") badgeClass = "badge-corp";

        const screens = p.screens || [];
        const hasScreens = screens.length > 0;

        const slidesHtml = hasScreens ? screens.map((screen, sIdx) => `
          <div class="project-carousel-slide">
            <img src="${screen.src}" alt="${screen.alt}" loading="lazy" />
            <div class="project-carousel-caption">
              <span>${screen.caption ? screen.caption[lang] : p.title}</span>
              <span>${sIdx + 1}/${screens.length}</span>
            </div>
          </div>
        `).join("") : "";

        const dotsHtml = hasScreens && screens.length > 1 ? screens.map((_, dIdx) => `
          <button class="carousel-dot ${dIdx === 0 ? "active" : ""}" data-slide-index="${dIdx}" aria-label="Ir para tela ${dIdx + 1}" aria-current="${dIdx === 0 ? "true" : "false"}"></button>
        `).join("") : "";

        const carouselHtml = hasScreens ? `
          <div class="project-carousel" data-project-id="${p.id}" role="region" aria-roledescription="carousel" aria-label="Capturas de tela de ${p.title}">
            <div class="project-carousel-track">
              ${slidesHtml}
            </div>
            ${screens.length > 1 ? `
              <button class="carousel-btn prev" aria-label="Tela anterior">‹</button>
              <button class="carousel-btn next" aria-label="Próxima tela">›</button>
              <div class="carousel-indicators">
                ${dotsHtml}
              </div>
            ` : ""}
          </div>
        ` : "";

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
          <article class="project-card scroll-reveal">
            <div>
              <div class="flex items-center justify-between gap-3 mb-3">
                <span class="${badgeClass}">${p.badge[lang]}</span>
                <div class="flex items-center gap-2">
                  ${demoBtn}
                </div>
              </div>

              ${carouselHtml}

              <div class="mt-4">
                <h3 class="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-1">${p.title}</h3>
                <p class="font-mono text-xs text-[var(--accent-cyan)] font-medium mb-3">${p.subtitle[lang]}</p>
                <p class="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">${p.description[lang]}</p>
              </div>
            </div>

            <div>
              <div class="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)] mb-3">
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

      ProjectCarouselModule.setupCarousels();
    },

    renderTimeline() {
      const lang = getLang();

      if (elements.experienceTimeline) {
        const exp = window.PORTFOLIO_DATA.experience;
        elements.experienceTimeline.innerHTML = exp.map(item => `
          <div class="border-l-2 border-[var(--border-subtle)] pl-4 sm:pl-6 pb-6 relative group">
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
    },

    renderSkills() {
      if (!elements.skillsGrid) return;
      const lang = getLang();
      const skills = window.PORTFOLIO_DATA.skills;

      elements.skillsGrid.innerHTML = skills.map(group => `
        <div class="border border-[var(--border-subtle)] bg-[var(--bg-surface)] rounded-xl p-5 hover:border-[var(--accent-cyan)] hover:shadow-[0_8px_30px_var(--accent-glow)] transition-all duration-400 flex flex-col justify-between">
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
    },

    renderCurriculums() {
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
    },

    renderAll() {
      if (window.PORTFOLIO_I18N) {
        window.PORTFOLIO_I18N.updateDOM();
      }
      this.renderPersonaHero();
      this.renderMetrics();
      this.renderProjects();
      this.renderTimeline();
      this.renderSkills();
      this.renderCurriculums();
      ScrollAnimationModule.observeAll();
    }
  };

  const LanguageModule = {
    init() {
      if (elements.langToggleBtn && window.PORTFOLIO_I18N) {
        elements.langToggleBtn.addEventListener("click", () => {
          window.PORTFOLIO_I18N.toggleLang();
        });
      }

      window.addEventListener("portfolio:langchange", () => {
        RenderModule.renderAll();
      });
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    ThemeModule.init();
    LanguageModule.init();
    MobileNavModule.init();
    PersonaModule.init();
    ClipboardModule.init();
    RenderModule.renderAll();
    ScrollAnimationModule.init();
  });
})();
