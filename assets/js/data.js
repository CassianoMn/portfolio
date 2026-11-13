window.PORTFOLIO_DATA = {
  personal: {
    name: "Cassiano Menezes",
    fullName: "Cassiano Menezes Silva Santos",
    email: "cassianomenezes1@gmail.com",
    phone: "+55 (79) 98836-4351",
    location: "Itabaiana - SE, Brasil",
    workModel: {
      pt: "Remoto / Híbrido",
      en: "Remote / Hybrid"
    },
    education: {
      pt: "Bacharelado em Sistemas de Informação (UFS) • 9º Período",
      en: "B.Sc. in Information Systems (UFS) • 9th Semester"
    },
    socials: {
      github: "https://github.com/CassianoMn",
      linkedin: "https://linkedin.com/in/CassianoMn",
      whatsapp: "https://wa.me/5579988364351?text=Ol%C3%A1%20Cassiano,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
      email: "mailto:cassianomenezes1@gmail.com"
    }
  },

  personas: {
    all: {
      id: "all",
      label: { pt: "Visão Geral", en: "Overview" },
      headline: {
        pt: "Engenheiro de Software & Desenvolvedor Full Stack",
        en: "Software Engineer & Full Stack Developer"
      },
      tagline: {
        pt: "Graduando em Sistemas de Informação pela UFS (9º período). Foco em arquiteturas sólidas (Clean, Hexagonal), testes automatizados e construção de sistemas ponta a ponta com C#/.NET, React, TypeScript e Inteligência Artificial.",
        en: "B.Sc. student in Information Systems at UFS (9th semester). Focused on solid architectures (Clean, Hexagonal), automated testing, and building end-to-end applications with C#/.NET, React, TypeScript, and AI."
      },
      recommendedCv: {
        name: "Cassiano_Menezes_Desenvolvedor_NET_Junior.pdf",
        label: { pt: "Baixar Currículo Geral (.NET/Full Stack)", en: "Download General Resume (.NET/Full Stack)" }
      }
    },
    dotnet: {
      id: "dotnet",
      label: { pt: ".NET / C# Back-End", en: ".NET / C# Back-End" },
      headline: {
        pt: "Desenvolvedor .NET Júnior & Engenharia Back-End",
        en: "Junior .NET Developer & Back-End Engineer"
      },
      tagline: {
        pt: "Especialista no ecossistema C# e .NET 8 (ASP.NET Core Web API e MVC), Entity Framework Core, SQL transacional, Arquitetura em Camadas, Clean Architecture, Arquitetura Hexagonal e testes automatizados.",
        en: "Specialist in the C# and .NET 8 ecosystem (ASP.NET Core Web API & MVC), Entity Framework Core, transactional SQL, Layered Architecture, Clean Architecture, Hexagonal Architecture, and automated tests."
      },
      recommendedCv: {
        name: "Cassiano_Menezes_Desenvolvedor_NET_Junior.pdf",
        label: { pt: "Baixar Currículo .NET Júnior", en: "Download .NET Junior Resume" }
      }
    },
    react: {
      id: "react",
      label: { pt: "React & TypeScript", en: "React & TypeScript" },
      headline: {
        pt: "Desenvolvedor Full Stack React, Node.js & TypeScript",
        en: "Full Stack Developer (React, Node.js & TypeScript)"
      },
      tagline: {
        pt: "Construção de aplicações web modernas, responsivas e escaláveis com React 19, TypeScript, Tailwind CSS, Vite, Node.js, Express, APIs RESTful e GraphQL, integradas a bancos relacionais e NoSQL.",
        en: "Building modern, responsive, and scalable web applications with React 19, TypeScript, Tailwind CSS, Vite, Node.js, Express, RESTful APIs, and GraphQL, integrated with relational & NoSQL databases."
      },
      recommendedCv: {
        name: "Cassiano_Menezes_FullStack_React_Node_TypeScript.pdf",
        label: { pt: "Baixar Currículo React / Node / TS", en: "Download React / Node / TS Resume" }
      }
    },
    ai: {
      id: "ai",
      label: { pt: "IA & Automação", en: "AI & Automation" },
      headline: {
        pt: "Engenharia de IA, Automação & Soluções Inteligentes",
        en: "AI Engineering, Automation & Intelligent Solutions"
      },
      tagline: {
        pt: "Desenvolvimento de soluções com IA Generativa (Google Gemini), OCR inteligente, extração estruturada de dados, orquestração de fluxos automatizados (n8n, webhooks), prototipação ágil e dashboards modernos.",
        en: "Developing solutions with Generative AI (Google Gemini), intelligent OCR, structured data extraction, automated workflow orchestration (n8n, webhooks), agile prototyping, and modern dashboards."
      },
      recommendedCv: {
        name: "Cassiano_Menezes_Estagio_IA_Automacao_VibeCoding.pdf",
        label: { pt: "Baixar Currículo IA & Automação", en: "Download AI & Automation Resume" }
      }
    }
  },

  metrics: [
    {
      label: { pt: "Formação Acadêmica", en: "Academic Education" },
      value: { pt: "9º Período", en: "9th Semester" },
      sub: { pt: "Sistemas de Informação (UFS)", en: "Information Systems (UFS)" }
    },
    {
      label: { pt: "Engenharia & Qualidade", en: "Engineering & Quality" },
      value: { pt: "Testes Automatizados", en: "Automated Testing" },
      sub: { pt: "MSTest, Moq, InMemory e Playwright", en: "MSTest, Moq, InMemory & Playwright" }
    },
    {
      label: { pt: "Arquiteturas de Software", en: "Software Architectures" },
      value: { pt: "Clean & Hexagonal", en: "Clean & Hexagonal" },
      sub: { pt: "Ports & Adapters, Camadas e DDD", en: "Ports & Adapters, Layered & DDD" }
    },
    {
      label: { pt: "Metodologias & Entrega", en: "Methodologies & Delivery" },
      value: { pt: "Métodos Ágeis", en: "Agile Methods" },
      sub: { pt: "Scrum, Kanban, Git Flow e PR Review", en: "Scrum, Kanban, Git Flow & PR Review" }
    }
  ],

  projects: [
    {
      id: "radarpecas",
      title: "RadarPeças",
      badge: { pt: "TCC - UFS", en: "B.Sc. Thesis - UFS" },
      badgeType: "tech",
      personas: ["dotnet", "react", "all"],
      subtitle: {
        pt: "Marketplace com Geolocalização & Compatibilidade Técnica de Motopeças",
        en: "Marketplace with Geolocation & Motorcycle Parts Technical Compatibility"
      },
      description: {
        pt: "Plataforma marketplace desenvolvida como TCC na UFS. Conecta motociclistas a autopeças através de consultas geoespaciais por raio com PostgreSQL e PostGIS. Conta com Web API escalável em ASP.NET Core (.NET 8), autenticação segura JWT e front-end responsivo em React 19 com Leaflet Maps.",
        en: "Marketplace platform developed as B.Sc. thesis at UFS. Connects riders to auto parts shops via geospatial radius queries with PostgreSQL and PostGIS. Powered by a scalable ASP.NET Core (.NET 8) Web API, secure JWT authentication, and a responsive React 19 front-end with Leaflet Maps."
      },
      screens: [
        {
          src: "assets/images/projects/radarpecas-1.svg",
          alt: "RadarPeças - Busca Geoespacial e Mapa de Oficinas",
          caption: { pt: "Busca Geoespacial & Mapa com PostGIS", en: "Geospatial Search & Map with PostGIS" }
        },
        {
          src: "assets/images/projects/radarpecas-2.svg",
          alt: "RadarPeças - Catálogo e Verificação de Compatibilidade",
          caption: { pt: "Catálogo & Compatibilidade Técnica por Modelo", en: "Catalog & Technical Compatibility by Model" }
        }
      ],
      highlights: {
        pt: [
          "Consultas espaciais e busca por raio via PostgreSQL + PostGIS",
          "Web API em .NET 8 com Clean Architecture e Injeção de Dependências",
          "Autenticação e autorização RBAC via JWT e BCrypt",
          "SPA dinâmico e responsivo com React 19, TypeScript e Leaflet Maps"
        ],
        en: [
          "Geospatial queries and radius searches via PostgreSQL + PostGIS",
          "ASP.NET Core .NET 8 Web API with Clean Architecture and DI",
          "RBAC authentication and authorization with JWT and BCrypt",
          "Dynamic responsive SPA with React 19, TypeScript, and Leaflet Maps"
        ]
      },
      techs: ["C#", ".NET 8", "ASP.NET Core Web API", "PostgreSQL", "PostGIS", "Entity Framework Core", "React 19", "TypeScript", "Vite", "Leaflet", "JWT"],
      github: "https://github.com/CassianoMn/RadarPecas",
      demo: null
    },
    {
      id: "organizae",
      title: "OrganizAE",
      badge: { pt: "SaaS em Produção", en: "Live SaaS" },
      badgeType: "live",
      personas: ["react", "ai", "all"],
      subtitle: {
        pt: "Gestão Financeira Inteligente com OCR e IA Generativa (Google Gemini)",
        en: "Intelligent Financial Management with OCR and Generative AI (Google Gemini)"
      },
      description: {
        pt: "Plataforma SaaS de controle financeiro em produção ativa no Firebase Hosting. Integração de IA Generativa (Google Gemini) para leitura óptica inteligente (OCR) de cupons fiscais, extração autônoma de dados estruturados e dashboards analíticos em tempo real.",
        en: "Production-ready financial SaaS running on Firebase Hosting. Integrates Generative AI (Google Gemini) for smart optical character recognition (OCR) on receipts, structured data extraction, and real-time analytical dashboards."
      },
      screens: [
        {
          src: "assets/images/projects/organizae-1.svg",
          alt: "OrganizAE - Dashboard Analítico com Fluxo de Caixa",
          caption: { pt: "Dashboard Analítico & Gráficos com Recharts", en: "Analytics Dashboard & Charts with Recharts" }
        },
        {
          src: "assets/images/projects/organizae-2.svg",
          alt: "OrganizAE - Módulo OCR com Google Gemini",
          caption: { pt: "Extração Inteligente de Notas Fiscais com Gemini IA", en: "Smart Receipt Extraction with Gemini AI" }
        }
      ],
      highlights: {
        pt: [
          "Leitura óptica inteligente (OCR) com Google Gemini para notas fiscais",
          "Dashboards analíticos interativos com Recharts e Tailwind CSS",
          "Autenticação e banco NoSQL em tempo real via Firebase Firestore",
          "Arquitetura com fallback automático para alta disponibilidade da IA"
        ],
        en: [
          "Intelligent optical character recognition (OCR) with Google Gemini",
          "Interactive analytics dashboards with Recharts and Tailwind CSS",
          "Authentication and real-time NoSQL database via Firebase Firestore",
          "Automated fallback architecture ensuring high AI availability"
        ]
      },
      techs: ["React 19", "TypeScript", "Tailwind CSS", "Firebase", "Google Gemini (IA)", "OCR Inteligente", "Recharts"],
      github: "https://github.com/CassianoMn/OrganizAE",
      demo: "https://organizae-a9590.web.app"
    },
    {
      id: "borala",
      title: "BoraLá (Eventos)",
      badge: { pt: "ItatechJr / UFS", en: "ItatechJr / UFS" },
      badgeType: "corp",
      personas: ["dotnet", "all"],
      subtitle: {
        pt: "Governança de Eventos, Credenciamento Seguro & Adequação à LGPD",
        en: "Event Governance, Secure Accreditation & LGPD Compliance"
      },
      description: {
        pt: "Sistema corporativo para gestão de eventos acadêmicos e empresariais desenvolvido na empresa júnior ItatechJr/UFS. Implementação de serviços de domínio em C#/.NET 8, resolução de concorrência com travas transacionais no MySQL, conformidade com a LGPD em QR Codes de crachás e suíte de testes com MSTest e Moq.",
        en: "Corporate system for academic and enterprise event management developed at ItatechJr/UFS. Built domain services in C#/.NET 8, concurrency resolution with transactional locks in MySQL, LGPD compliance for badge QR Codes, and test suites with MSTest and Moq."
      },
      screens: [
        {
          src: "assets/images/projects/borala-1.svg",
          alt: "BoraLá - Painel do Gestor e Lista de Participantes",
          caption: { pt: "Painel do Gestor & Controle de Inscrições", en: "Manager Dashboard & Registration Control" }
        },
        {
          src: "assets/images/projects/borala-2.svg",
          alt: "BoraLá - Credenciamento com QR Code Seguro LGPD",
          caption: { pt: "Credenciamento Rápido & Crachás com QR Code LGPD", en: "Fast Accreditation & Badges with Secure QR Code" }
        }
      ],
      highlights: {
        pt: [
          "Separação em camadas com isolamento estrito entre Domínio, Serviços e Web",
          "Segurança e conformidade LGPD em crachás e QR Codes criptografados",
          "Travas transacionais e resolução de concorrência no MySQL",
          "Testes unitários e de integração com MSTest, Moq e EF Core InMemory"
        ],
        en: [
          "Layered architecture with strict Domain, Service, and Web separation",
          "Security and LGPD compliance across encrypted badge QR Codes",
          "Transactional locking and concurrency resolution in MySQL",
          "Unit and integration tests with MSTest, Moq, and EF Core InMemory"
        ]
      },
      techs: ["C#", ".NET 8", "ASP.NET Core MVC", "Entity Framework Core", "MySQL", "MSTest", "Moq", "QRCoder", "Bootstrap", "Git Flow"],
      github: "https://github.com/MarcosDosea/Eventos",
      demo: null
    },
    {
      id: "desapegauto",
      title: "DesapegAuto & TEES",
      badge: { pt: "MVC & Arquitetura Hexagonal", en: "MVC & Hexagonal Arch" },
      badgeType: "tech",
      personas: ["dotnet", "all"],
      subtitle: {
        pt: "Plataforma Web em ASP.NET Core MVC & Refatoração Hexagonal (Ports & Adapters)",
        en: "ASP.NET Core MVC Web Platform & Hexagonal Refactoring (Ports & Adapters)"
      },
      description: {
        pt: "Plataforma de compra e venda de veículos em ASP.NET Core MVC com MySQL. Evoluída na disciplina de TEES (UFS) com refatoração para Arquitetura Hexagonal (Ports & Adapters) em .NET 8, isolando o núcleo de domínio, testes automatizados (unitários e E2E) e benchmark empírico entre REST e GraphQL.",
        en: "Vehicle trading web platform in ASP.NET Core MVC with MySQL. Evolved in Advanced Software Engineering (UFS) through Hexagonal Architecture refactoring (Ports & Adapters) in .NET 8, domain core decoupling, automated testing (unit & E2E), and an empirical REST vs GraphQL benchmark."
      },
      screens: [
        {
          src: "assets/images/projects/desapegauto-1.svg",
          alt: "DesapegAuto - Catálogo de Veículos e Filtros",
          caption: { pt: "Portal Comercial & Catálogo de Veículos (MVC)", en: "Commercial Portal & Vehicle Catalog (MVC)" }
        },
        {
          src: "assets/images/projects/desapegauto-2.svg",
          alt: "DesapegAuto - Arquitetura Hexagonal e Benchmark",
          caption: { pt: "Arquitetura Hexagonal & Benchmark REST vs GraphQL", en: "Hexagonal Architecture & REST vs GraphQL Benchmark" }
        }
      ],
      highlights: {
        pt: [
          "Versão original com ASP.NET Core MVC, Razor Views, EF Core e MySQL",
          "Evolução Hexagonal: Núcleo de domínio isolado com Ports & Adapters em .NET 8",
          "Suíte completa de testes automatizados com MSTest e Playwright (E2E)",
          "Estudo comparativo prático de payload e desempenho entre REST e GraphQL"
        ],
        en: [
          "Original version with ASP.NET Core MVC, Razor Views, EF Core, and MySQL",
          "Hexagonal evolution: Isolated domain core with Ports & Adapters in .NET 8",
          "Complete automated test suite with MSTest and Playwright (E2E)",
          "Practical comparative benchmark of payload and latency between REST & GraphQL"
        ]
      },
      techs: ["C#", ".NET 8", "ASP.NET Core MVC", "Arquitetura Hexagonal", "Ports & Adapters", "Node.js", "REST", "GraphQL", "MySQL", "MSTest", "Playwright"],
      github: "https://github.com/CassianoMn/tees-2026-2-unidade-1",
      demo: null,
      secondaryGithub: "https://github.com/CassianoMn/DesapegAuto"
    },
    {
      id: "tarefas-semanais",
      title: "Gerenciador de Tarefas Semanais",
      badge: { pt: "Java & Swing", en: "Java & Swing" },
      badgeType: "neutral",
      personas: ["all"],
      subtitle: {
        pt: "Aplicação Desktop em Java com Interface Gráfica e Gamificação de Produtividade",
        en: "Java Desktop Application with Graphical Interface (Swing) and Gamification"
      },
      description: {
        pt: "Aplicação desktop em Java aplicando POO avançada (Encapsulamento, Herança e Polimorfismo) com interface Java Swing. Possui planejamento semanal estruturado de tarefas e algoritmo de pontuação para incentivo à produtividade diária.",
        en: "Desktop application in Java applying advanced OOP principles (Encapsulation, Inheritance, Polymorphism) with Java Swing. Features structured weekly task management and a scoring algorithm to boost daily productivity."
      },
      screens: [
        {
          src: "assets/images/projects/tarefas-1.svg",
          alt: "Gerenciador de Tarefas - Interface Java Swing",
          caption: { pt: "Planejador Semanal em Java Swing (GUI)", en: "Weekly Planner in Java Swing (GUI)" }
        },
        {
          src: "assets/images/projects/tarefas-2.svg",
          alt: "Gerenciador de Tarefas - Gamificação e Pontuação",
          caption: { pt: "Painel de Produtividade Gamificada & Pontuação", en: "Gamified Productivity Dashboard & Scoring" }
        }
      ],
      highlights: {
        pt: [
          "Aplicação rigorosa de POO (Encapsulamento, Herança, Polimorfismo e Abstração)",
          "Interface desktop interativa desenvolvida com a biblioteca Java Swing",
          "Algoritmo de pontuação e gamificação de produtividade diária",
          "Gerenciamento estruturado de estado de tarefas"
        ],
        en: [
          "Rigorous OOP application (Encapsulation, Inheritance, Polymorphism, Abstraction)",
          "Interactive desktop GUI developed with Java Swing library",
          "Scoring algorithm and daily productivity gamification",
          "Structured task state management"
        ]
      },
      techs: ["Java", "Java Swing (GUI)", "POO", "Lógica de Programação", "Desktop App"],
      github: "https://github.com/CassianoMn/GerenciadorTarefasSemanais",
      demo: null
    },
    {
      id: "gobiraba",
      title: "GobirabaSystem",
      badge: { pt: "Aplicação Comercial", en: "Commercial App" },
      badgeType: "live",
      personas: ["react", "all"],
      subtitle: {
        pt: "Sistema Web Comercial para Controle de Estoque & Operações em Tempo Real",
        en: "Commercial Web System for Inventory Management & Real-Time Operations"
      },
      description: {
        pt: "Sistema web desenvolvido como freelancer para gestão comercial. Otimiza o controle de estoque, registros de entradas/saídas e relatórios financeiros em tempo real. Arquitetura modularizada em JavaScript ES6, com alta performance e sem dependências pesadas.",
        en: "Commercial web application developed as a freelance engineer. Streamlines inventory tracking, inflow/outflow management, and real-time financial reporting. Built with modular ES6 JavaScript for fast load times and zero heavy dependencies."
      },
      screens: [
        {
          src: "assets/images/projects/gobiraba-1.svg",
          alt: "GobirabaSystem - Controle de Estoque e Tabela",
          caption: { pt: "Gestão de Estoque & Alertas de Reposição", en: "Inventory Management & Restock Alerts" }
        },
        {
          src: "assets/images/projects/gobiraba-2.svg",
          alt: "GobirabaSystem - Relatórios Financeiros e Lucro",
          caption: { pt: "Relatório de Vendas e Margem de Lucro em Tempo Real", en: "Sales & Profit Margin Reports in Real Time" }
        }
      ],
      highlights: {
        pt: [
          "Arquitetura front-end modularizada em JavaScript ES6 puro",
          "Cálculos em tempo real de saldo, saídas e relatórios operacionais",
          "Layout responsivo mobile-first acessível em qualquer dispositivo",
          "Deploy ágil e execução rápida via GitHub Pages"
        ],
        en: [
          "Modular front-end architecture in pure modern ES6 JavaScript",
          "Real-time calculations for balances, transactions, and reports",
          "Mobile-first responsive layout accessible on any device",
          "Fast deployment and execution via GitHub Pages"
        ]
      },
      techs: ["JavaScript (ES6 Modular)", "HTML5", "CSS3 Moderno", "Local Storage", "GitHub Pages"],
      github: "https://github.com/CassianoMn/Gobiraba",
      demo: "https://cassianomn.github.io/Gobiraba/index.html"
    }
  ],

  experience: [
    {
      role: {
        pt: "Engenheiro de Software (.NET Full Stack) – Estágio",
        en: "Software Engineer (.NET Full Stack) – Intern"
      },
      company: "ItatechJr / DSI - Universidade Federal de Sergipe (UFS)",
      period: {
        pt: "Ago/2026 – Presente",
        en: "Aug/2026 – Present"
      },
      location: {
        pt: "Itabaiana - SE (Híbrido / Remoto)",
        en: "Itabaiana - SE (Hybrid / Remote)"
      },
      bullets: {
        pt: [
          "Ciclo completo de engenharia, sustentação e evolução da plataforma BoraLá com C#, .NET 8, ASP.NET Core MVC e MySQL.",
          "Implementação e isolamento de serviços de domínio para inscrições, credenciamento, presenças e permissões RBAC.",
          "Adequação rigorosa à LGPD (proteção de CPF/Login em crachás e QR Codes criptografados) e travas transacionais no MySQL.",
          "Criação e manutenção de testes com MSTest, Moq e EF Core InMemory, além de atuação contínua em revisões de código (Peer Review)."
        ],
        en: [
          "Full software lifecycle engineering, maintenance, and evolution for BoraLá platform using C#, .NET 8, ASP.NET Core MVC, and MySQL.",
          "Implementation and isolation of domain services for registrations, accreditation, attendance, and RBAC permissions.",
          "Strict LGPD compliance (protecting CPF/Login in badges and encrypted QR Codes) and transactional locking in MySQL.",
          "Creation and maintenance of automated tests with MSTest, Moq, and EF Core InMemory, plus continuous Peer Code Reviews."
        ]
      }
    },
    {
      role: {
        pt: "Desenvolvedor Web Freelancer",
        en: "Freelance Web Developer"
      },
      company: "GobirabaSystem",
      period: {
        pt: "Mar/2026 – Ago/2026",
        en: "Mar/2026 – Aug/2026"
      },
      location: {
        pt: "Remoto",
        en: "Remote"
      },
      bullets: {
        pt: [
          "Desenvolvimento ponta a ponta de sistema web responsivo para controle de estoques, movimentações e relatórios em tempo real.",
          "Construção de arquitetura modularizada em JavaScript ES6, garantindo performance extrema e autonomia operacional sem custo de infraestrutura."
        ],
        en: [
          "End-to-end development of responsive web application for inventory management, transactions, and real-time reports.",
          "Modular ES6 JavaScript architecture delivering top performance and complete operational autonomy without infrastructure overhead."
        ]
      }
    }
  ],

  education: [
    {
      degree: {
        pt: "Bacharelado em Sistemas de Informação",
        en: "Bachelor's Degree in Information Systems"
      },
      institution: "Universidade Federal de Sergipe (UFS)",
      period: "2023 – 2026",
      status: {
        pt: "9º Período (Conclusão prevista: Dez/2026)",
        en: "9th Semester (Expected Graduation: Dec/2026)"
      },
      details: {
        pt: "Formação sólida em Engenharia de Software, Algoritmos, Banco de Dados, Redes, Arquitetura de Computadores e Inteligência Artificial. TCC focado na plataforma RadarPeças (.NET 8 + PostGIS + React).",
        en: "Solid foundation in Software Engineering, Algorithms, Databases, Networks, Computer Architecture, and Artificial Intelligence. Thesis focused on the RadarPeças platform (.NET 8 + PostGIS + React)."
      }
    }
  ],

  skills: [
    {
      category: {
        pt: "Back-End & Ecossistema .NET",
        en: "Back-End & .NET Ecosystem"
      },
      items: ["C#", ".NET 8", "ASP.NET Core Web API", "ASP.NET Core MVC", "Entity Framework Core", "LINQ", "Injeção de Dependências", "Autenticação JWT", "Java", "Node.js", "Express.js"]
    },
    {
      category: {
        pt: "Front-End & Interfaces Modernas",
        en: "Front-End & Modern Interfaces"
      },
      items: ["React 19", "Next.js", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Leaflet Maps", "Razor Views", "HTML5", "CSS3", "Java Swing (GUI)"]
    },
    {
      category: {
        pt: "IA Generativa & Agentes",
        en: "Generative AI & Agents"
      },
      items: ["Gemini", "Claude", "ChatGPT", "Agentes de IA", "Prompt Engineering", "n8n", "Webhooks", "APIs REST", "Prototipação Ágil"]
    },
    {
      category: {
        pt: "Bancos de Dados & Persistência",
        en: "Databases & Persistence"
      },
      items: ["PostgreSQL", "PostGIS", "MySQL", "SQLite", "Firebase Firestore", "Modelagem Relacional (DER)", "Transações SQL", "Otimização de Consultas"]
    },
    {
      category: {
        pt: "Ferramentas, Prototipação & Deploy",
        en: "Tools, Prototyping & Deploy"
      },
      items: ["Figma", "Google Stitch", "Vercel", "Docker", "Git Flow", "CI/CD", "Postman", "Local Storage"]
    },
    {
      category: {
        pt: "Arquitetura & Qualidade de Software",
        en: "Architecture & Software Quality"
      },
      items: ["Clean Architecture", "Arquitetura Hexagonal (Ports & Adapters)", "Testes Automatizados", "MSTest", "Moq", "Playwright (E2E)", "Métodos Ágeis (Scrum/Kanban)", "Code Review (Peer Review)"]
    }
  ],

  curriculums: [
    {
      id: "net-jr",
      title: {
        pt: "Desenvolvedor .NET Júnior",
        en: "Junior .NET Developer"
      },
      target: {
        pt: "Vagas focadas em C#, .NET 8, ASP.NET Core, APIs RESTful, SQL e Testes",
        en: "Roles focused on C#, .NET 8, ASP.NET Core, RESTful APIs, SQL, and Testing"
      },
      file: "assets/cv/Cassiano_Menezes_Desenvolvedor_NET_Junior.pdf",
      keywords: ["C#", ".NET 8", "ASP.NET Core", "Web API", "EF Core", "PostgreSQL", "MySQL", "MSTest", "Moq"]
    },
    {
      id: "fullstack-react-ts",
      title: {
        pt: "Desenvolvedor Full Stack React / Node / TypeScript",
        en: "Full Stack React / Node / TypeScript Developer"
      },
      target: {
        pt: "Vagas Full Stack modernas com React, TypeScript, Node.js, REST e GraphQL",
        en: "Modern Full Stack roles with React, TypeScript, Node.js, REST, and GraphQL"
      },
      file: "assets/cv/Cassiano_Menezes_FullStack_React_Node_TypeScript.pdf",
      keywords: ["React.js", "TypeScript", "Node.js", "Vite", "Tailwind CSS", "GraphQL", "PostgreSQL", "Docker"]
    },
    {
      id: "ai-automation",
      title: {
        pt: "Estágio em IA Generativa, Automação & Vibe Coding",
        en: "Generative AI, Automation & Vibe Coding Intern"
      },
      target: {
        pt: "Vagas em IA Generativa, Agentes, Automação de Workflows (n8n), APIs e Ferramentas Modernas",
        en: "Roles in Generative AI, AI Agents, Workflow Automation (n8n), APIs, and Modern Tools"
      },
      file: "assets/cv/Cassiano_Menezes_Estagio_IA_Automacao_VibeCoding.pdf",
      keywords: ["Gemini", "Claude", "ChatGPT", "Agentes de IA", "Prompt Engineering", "n8n", "Webhooks", "React"]
    },
    {
      id: "fullstack-aspnet-mvc",
      title: {
        pt: "Desenvolvedor Full Stack ASP.NET MVC Júnior",
        en: "Full Stack ASP.NET MVC Junior Developer"
      },
      target: {
        pt: "Vagas com ASP.NET MVC, Razor Views, C#, SQL e arquitetura corporativa",
        en: "Roles with ASP.NET MVC, Razor Views, C#, SQL, and enterprise architecture"
      },
      file: "assets/cv/Cassiano_Menezes_FullStack_ASPNET_MVC.pdf",
      keywords: ["C#", "ASP.NET MVC", "Razor Views", "jQuery/JS", "Entity Framework", "MySQL", "Testes"]
    },
    {
      id: "intern-software-eng",
      title: {
        pt: "Estágio em Engenharia de Software Full Stack",
        en: "Full Stack Software Engineering Intern"
      },
      target: {
        pt: "Estágios em desenvolvimento de software, C#, Java, React, SQL e Metodologias Ágeis",
        en: "Internships in software development, C#, Java, React, SQL, and Agile Methodologies"
      },
      file: "assets/cv/Cassiano_Menezes_Estagio_Engenharia_Software.pdf",
      keywords: ["UFS (9º Período)", "C#/.NET", "Java", "React", "POO", "SQL", "Scrum", "Git Flow"]
    },
    {
      id: "backend-node-ts",
      title: {
        pt: "Desenvolvedor Back-End Node.js & TypeScript Júnior",
        en: "Junior Back-End Node.js & TypeScript Developer"
      },
      target: {
        pt: "Vagas de Back-End com Node.js, TypeScript, REST, GraphQL, Docker e SQL",
        en: "Back-End roles with Node.js, TypeScript, REST, GraphQL, Docker, and SQL"
      },
      file: "assets/cv/Cassiano_Menezes_Backend_Node_TS_SQL.pdf",
      keywords: ["Node.js", "TypeScript", "APIs REST", "GraphQL", "PostgreSQL", "MySQL", "Docker", "LGPD"]
    },
    {
      id: "remote-en",
      title: {
        pt: "Junior Software Engineer (Remote Americas / Global - English)",
        en: "Junior Software Engineer (Remote Americas / Global - English)"
      },
      target: {
        pt: "International remote roles in English (.NET, React, TypeScript, Node.js, SQL)",
        en: "International remote roles in English (.NET, React, TypeScript, Node.js, SQL)"
      },
      file: "assets/cv/Cassiano_Menezes_Software_Engineer_EN.pdf",
      keywords: ["C#", ".NET 8", "React", "TypeScript", "Node.js", "PostgreSQL", "RESTful APIs", "Agile"]
    }
  ]
};
