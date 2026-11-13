// =============================================================================
// Portfólio Cassiano Menezes - Motor de Internacionalização (PT-BR / EN)
// =============================================================================

window.PORTFOLIO_I18N = (function () {
  const STORAGE_KEY = "cassiano_portfolio_lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "pt";

  const translations = {
    pt: {
      // Navegação
      "nav.about": "Sobre",
      "nav.projects": "Projetos",
      "nav.experience": "Trajetória",
      "nav.skills": "Competências",
      "nav.cv": "Currículos ATS",
      "nav.contact": "Contato",
      "nav.openCvHub": "Ver Todos os Currículos",
      "nav.themeToggle": "Alternar tema visual",
      "nav.langToggle": "Mudar para Inglês",

      // Perfil Top Switcher
      "switcher.label": "Filtrar visão por perfil técnico:",
      "switcher.all": "Visão Geral",
      "switcher.dotnet": ".NET / C#",
      "switcher.react": "React & TypeScript",
      "switcher.ai": "IA & Automação",

      // Hero
      "hero.status": "Disponível para oportunidades 100% Remotas ou Híbridas",
      "hero.location": "Itabaiana - SE, Brasil",
      "hero.academic": "Graduando em Sistemas de Informação (UFS) • 8º Período",
      "hero.ctaProjects": "Explorar Projetos",
      "hero.ctaContact": "Falar no WhatsApp",
      "hero.copyEmail": "Copiar E-mail",
      "hero.emailCopied": "E-mail copiado!",

      // Seções
      "section.projectsTitle": "Projetos de Engenharia em Destaque",
      "section.projectsSubtitle": "Aplicações reais em produção, projetos acadêmicos avançados e estudos arquiteturais.",
      "section.projectFilteredNote": "Exibindo projetos recomendados para o perfil selecionado.",
      "section.allProjects": "Todos os Projetos",
      "section.viewRepo": "Código-Fonte",
      "section.viewLive": "Aplicação no Ar",
      "section.viewSecondaryRepo": "Repositório Hexagonal",
      "section.keyHighlights": "Destaques de Engenharia:",

      "section.expTitle": "Trajetória Profissional & Acadêmica",
      "section.expSubtitle": "Experiência prática com desenvolvimento, sustentação, testes e engenharia de software.",
      "section.experienceHeader": "Experiência de Trabalho",
      "section.educationHeader": "Formação Acadêmica",

      "section.skillsTitle": "Matriz de Competências Técnicas",
      "section.skillsSubtitle": "Domínio técnico consolidado em back-end, front-end, inteligência artificial e engenharia.",

      "section.cvTitle": "Central de Currículos Adaptados (ATS)",
      "section.cvSubtitle": "Currículos otimizados no padrão One-Page Standard para leitores ópticos e algoritmos de recrutamento.",
      "section.cvDownloadBtn": "Baixar PDF",
      "section.cvKeywords": "Palavras-chave:",

      "section.contactTitle": "Vamos Construir Algo Sólido Juntos?",
      "section.contactSubtitle": "Estou aberto a oportunidades como Desenvolvedor Júnior, Estagiário de Engenharia de Software ou Projetos Freelancer.",
      "section.contactEmail": "E-mail Direto",
      "section.contactWhatsApp": "WhatsApp",
      "section.contactLinkedIn": "LinkedIn",
      "section.contactGitHub": "GitHub",
      "section.copyEmailAction": "Clique para copiar o e-mail",

      // Toast
      "toast.emailCopied": "E-mail copiado para a área de transferência!",

      // Footer
      "footer.builtWith": "Projetado com arquitetura limpa em HTML5, CSS3 Editorial e JavaScript Vanilla. Sem dependências pesadas.",
      "footer.rights": "Todos os direitos reservados.",
      "footer.source": "Repositório do Portfólio no GitHub"
    },
    en: {
      // Navigation
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.experience": "Journey",
      "nav.skills": "Skills",
      "nav.cv": "ATS Resumes",
      "nav.contact": "Contact",
      "nav.openCvHub": "View All Resumes",
      "nav.themeToggle": "Toggle visual theme",
      "nav.langToggle": "Switch to Portuguese",

      // Profile Top Switcher
      "switcher.label": "Filter view by technical profile:",
      "switcher.all": "Overview",
      "switcher.dotnet": ".NET / C#",
      "switcher.react": "React & TypeScript",
      "switcher.ai": "AI & Automation",

      // Hero
      "hero.status": "Available for 100% Remote or Hybrid opportunities",
      "hero.location": "Itabaiana - SE, Brazil",
      "hero.academic": "B.Sc. in Information Systems (UFS) • 8th Semester",
      "hero.ctaProjects": "Explore Projects",
      "hero.ctaContact": "Chat on WhatsApp",
      "hero.copyEmail": "Copy Email",
      "hero.emailCopied": "Email copied!",

      // Sections
      "section.projectsTitle": "Featured Engineering Projects",
      "section.projectsSubtitle": "Live production systems, advanced academic projects, and architectural case studies.",
      "section.projectFilteredNote": "Showing projects tailored for the active profile.",
      "section.allProjects": "All Projects",
      "section.viewRepo": "Source Code",
      "section.viewLive": "Live Application",
      "section.viewSecondaryRepo": "Hexagonal Repo",
      "section.keyHighlights": "Engineering Highlights:",

      "section.expTitle": "Professional Journey & Education",
      "section.expSubtitle": "Hands-on experience with development, maintenance, testing, and software engineering.",
      "section.experienceHeader": "Work Experience",
      "section.educationHeader": "Academic Background",

      "section.skillsTitle": "Technical Skills Matrix",
      "section.skillsSubtitle": "Consolidated proficiency across back-end, front-end, artificial intelligence, and engineering.",

      "section.cvTitle": "Tailored ATS Resumes Hub",
      "section.cvSubtitle": "One-Page Standard optimized resumes for ATS parsing algorithms and technical recruiters.",
      "section.cvDownloadBtn": "Download PDF",
      "section.cvKeywords": "Keywords:",

      "section.contactTitle": "Let's Build Something Solid Together",
      "section.contactSubtitle": "Open to opportunities as Junior Developer, Software Engineering Intern, or Freelance Projects.",
      "section.contactEmail": "Direct Email",
      "section.contactWhatsApp": "WhatsApp",
      "section.contactLinkedIn": "LinkedIn",
      "section.contactGitHub": "GitHub",
      "section.copyEmailAction": "Click to copy email address",

      // Toast
      "toast.emailCopied": "Email address copied to clipboard!",

      // Footer
      "footer.builtWith": "Engineered with clean architecture in HTML5, Editorial CSS, and Vanilla JavaScript. Zero heavy dependencies.",
      "footer.rights": "All rights reserved.",
      "footer.source": "Portfolio GitHub Repository"
    }
  };

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (lang !== "pt" && lang !== "en") return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    updateDOM();
    window.dispatchEvent(new CustomEvent("portfolio:langchange", { detail: { lang } }));
  }

  function toggleLang() {
    setLang(currentLang === "pt" ? "en" : "pt");
  }

  function t(key) {
    const langDict = translations[currentLang] || translations.pt;
    return langDict[key] || translations.pt[key] || key;
  }

  function updateDOM() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const translation = t(key);
      if (translation) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    const langToggleBtn = document.getElementById("lang-toggle-btn");
    if (langToggleBtn) {
      const isPt = currentLang === "pt";
      langToggleBtn.setAttribute("aria-label", isPt ? "Switch to English" : "Mudar para Português");
      langToggleBtn.innerHTML = isPt
        ? '<span class="font-bold">EN</span> <span class="text-xs text-neutral-400">/ PT</span>'
        : '<span class="font-bold">PT</span> <span class="text-xs text-neutral-400">/ EN</span>';
    }
  }

  return {
    getLang: getLang,
    setLang: setLang,
    toggleLang: toggleLang,
    t: t,
    updateDOM: updateDOM
  };
})();
