// =============================================================================
// Portfólio Cassiano Menezes - Base de Dados Estruturada (Projetos, Skills, CVs)
// =============================================================================

window.PORTFOLIO_DATA = {
  personal: {
    name: "Cassiano Menezes",
    fullName: "Cassiano Menezes Silva Santos",
    email: "cassianomenezes1@gmail.com",
    phone: "+55 (79) 98836-4351",
    location: "Itabaiana - SE, Brasil",
    workModel: {
      pt: "100% Remoto / Híbrido",
      en: "100% Remote / Hybrid"
    },
    education: {
      pt: "Bacharelado em Sistemas de Informação (UFS) • 8º Período",
      en: "B.Sc. in Information Systems (UFS) • 8th Semester"
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
        pt: "Graduando em Sistemas de Informação pela UFS. Foco em arquiteturas sólidas (Clean, Hexagonal), testes automatizados e construção de sistemas ponta a ponta com C#/.NET, React, TypeScript e Inteligência Artificial.",
        en: "B.Sc. student in Information Systems at UFS. Focused on solid architectures (Clean, Hexagonal), automated testing, and building end-to-end applications with C#/.NET, React, TypeScript, and AI."
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
      label: { pt: "AI Engineering & Automação", en: "AI Engineering & Automation" },
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
      value: { pt: "8º Período", en: "8th Semester" },
      sub: { pt: "Sistemas de Informação (UFS)", en: "Information Systems (UFS)" }
    },
    {
      label: { pt: "Engenharia & Qualidade", en: "Engineering & Quality" },
      value: { pt: "Testes Automatizados", en: "Automated Testing" },
      sub: { pt: "Clean Code & Arquitetura Sólida", en: "Clean Code & Solid Architecture" }
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
      personas: ["dotnet", "react", "all"],
      subtitle: {
        pt: "Plataforma SaaS & Marketplace com Geolocalização Inteligente para o Varejo de Motopeças",
        en: "SaaS Platform & Marketplace with Intelligent Geolocation for Motorcycle Parts Retail"
      },
      description: {
        pt: "Trabalho de Conclusão de Curso em Sistemas de Informação na Universidade Federal de Sergipe. Desenvolvido no modelo two-sided market conectando motociclistas a oficinas e autopeças. Conta com Web API robusta em ASP.NET Core (.NET 8), autenticação segura JWT com BCrypt, documentação Swagger/OpenAPI e banco de dados PostgreSQL com a extensão PostGIS (via NetTopologySuite) para cálculo de raio geoespacial e recomendação por compatibilidade técnica de peças. Front-end dinâmico construído em React 19, TypeScript, Vite e Leaflet Maps.",
        en: "B.Sc. Thesis in Information Systems at UFS. Designed as a two-sided market connecting riders to repair shops and auto parts retailers. Features a robust ASP.NET Core (.NET 8) Web API, secure JWT authentication with BCrypt, Swagger/OpenAPI documentation, and a PostgreSQL database with PostGIS extension (via NetTopologySuite) for geospatial radius calculations and technical compatibility matching. Dynamic front-end built with React 19, TypeScript, Vite, and Leaflet Maps."
      },
      highlights: {
        pt: [
          "Arquitetura em Camadas com Clean Architecture e Injeção de Dependências",
          "Consultas geoespaciais e busca por raio via PostgreSQL + PostGIS",
          "Autenticação e autorização RBAC via JWT e BCrypt",
          "SPA moderno e responsivo com React 19, TypeScript e mapas interativos Leaflet"
        ],
        en: [
          "Layered Architecture with Clean Architecture principles and Dependency Injection",
          "Geospatial queries and radius searches using PostgreSQL + PostGIS",
          "RBAC authentication and authorization via JWT and BCrypt",
          "Modern responsive SPA with React 19, TypeScript, and interactive Leaflet maps"
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
      personas: ["react", "ai", "all"],
      subtitle: {
        pt: "Sistema Completo de Gestão Financeira com IA Generativa & OCR",
        en: "Full Financial Management System with Generative AI & OCR"
      },
      description: {
        pt: "Plataforma SaaS financeira em produção ativa no Firebase Hosting. Permite controle financeiro individual e corporativo com dashboards analíticos em tempo real. Integração pioneira de IA Generativa (Google Gemini) para OCR inteligente de cupons fiscais e faturas, extração automatizada de dados estruturados em JSON, categorização autônoma de despesas e arquitetura com fallback automático para garantir alta disponibilidade.",
        en: "Financial SaaS platform actively running in production on Firebase Hosting. Enables individual and business financial tracking with real-time analytics dashboards. Features integration of Generative AI (Google Gemini) for smart receipt OCR, automated structured JSON data extraction, autonomous expense categorization, and an automated fallback system ensuring high availability."
      },
      highlights: {
        pt: [
          "Reconhecimento óptico inteligente (OCR) com Google Gemini para notas fiscais",
          "Dashboards analíticos interativos com Recharts e Tailwind CSS",
          "Autenticação, banco de dados NoSQL e hosting via Firebase (Firestore / Auth)",
          "Interface responsiva, moderna e rápida construída com React 19 e TypeScript"
        ],
        en: [
          "Intelligent optical character recognition (OCR) with Google Gemini for receipts",
          "Interactive analytics dashboards with Recharts and Tailwind CSS",
          "Authentication, NoSQL database, and hosting via Firebase (Firestore / Auth)",
          "Responsive, fast, and modern interface built with React 19 and TypeScript"
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
      personas: ["dotnet", "all"],
      subtitle: {
        pt: "Plataforma Corporativa para Gestão de Eventos, Credenciamento & Frequência",
        en: "Corporate Platform for Event Management, Accreditation & Attendance"
      },
      description: {
        pt: "Sistema corporativo utilizado para governança, inscrição, credenciamento e emissão de certificados em eventos acadêmicos e empresariais. Atuação no ciclo completo de engenharia pela empresa júnior ItatechJr / DSI - UFS. Implementação e isolamento de serviços de domínio em C#/.NET 8, controle de acesso baseado em papéis (RBAC), resolução de concorrência com travas transacionais no MySQL, conformidade com a LGPD (mitigação da exposição de dados sensíveis como CPF/Login em crachás e QR Codes), módulo interativo com biblioteca QRCoder e cobertura com testes automatizados (MSTest, Moq e EF Core InMemory).",
        en: "Corporate system used for governance, registration, accreditation, and certificate issuance in academic and enterprise events. Full lifecycle engineering contribution at the ItatechJr junior enterprise (DSI - UFS). Implemented domain services in C#/.NET 8, role-based access control (RBAC), concurrency resolution with transactional locks in MySQL, LGPD compliance (protecting sensitive data like CPF/Login in badges and QR codes), interactive badge generator module with QRCoder, and automated test coverage (MSTest, Moq, and EF Core InMemory)."
      },
      highlights: {
        pt: [
          "Arquitetura em camadas com separação estrita entre Domínio, Serviços e Web",
          "Segurança e conformidade LGPD em crachás e QR Codes criptografados",
          "Travas transacionais e resolução de concorrência no MySQL",
          "Testes unitários e de integração com MSTest, Moq e InMemory, além de atuação em Code Reviews"
        ],
        en: [
          "Layered architecture with strict separation between Domain, Services, and Web",
          "Security and LGPD compliance across encrypted badges and QR Codes",
          "Transactional locking and concurrency resolution in MySQL",
          "Unit and integration tests with MSTest, Moq, and InMemory, along with continuous Code Reviews"
        ]
      },
      techs: ["C#", ".NET 8", "ASP.NET Core MVC", "Entity Framework Core", "MySQL", "MSTest", "Moq", "QRCoder", "Bootstrap", "Git Flow"],
      github: "https://github.com/MarcosDosea/Eventos",
      demo: null
    },
    {
      id: "desapegauto",
      title: "DesapegAuto & TEES",
      badge: { pt: "MVC Original & Arquitetura Hexagonal", en: "Original MVC & Hexagonal Arch" },
      personas: ["dotnet", "all"],
      subtitle: {
        pt: "Plataforma Web em ASP.NET Core MVC & Refatoração para Arquitetura Hexagonal (Ports & Adapters)",
        en: "ASP.NET Core MVC Web Platform & Hexagonal Architecture (Ports & Adapters) Evolution"
      },
      description: {
        pt: "Desenvolvido originalmente como uma plataforma web de compra, venda e gestão de estoque de veículos com ASP.NET Core MVC, Razor Views, Entity Framework Core, MySQL e testes automatizados. Na disciplina de Tópicos Especiais em Engenharia de Software (TEES - UFS), o projeto passou por uma evolução profunda: refatoração completa para Arquitetura Hexagonal (Ports & Adapters) em C#/.NET 8, desacoplando totalmente as regras de negócio das tecnologias externas, acompanhada de ampla suíte de testes automatizados e estudo comparativo prático de protocolos de comunicação de rede social (REST vs. GraphQL em Node.js com testes E2E).",
        en: "Originally built as a web platform for vehicle buying, selling, and inventory management with ASP.NET Core MVC, Razor Views, Entity Framework Core, MySQL, and automated testing. In Advanced Software Engineering (TEES - UFS), the project underwent a profound architectural evolution: complete refactoring to Hexagonal Architecture (Ports & Adapters) in C#/.NET 8, strictly decoupling domain logic from external dependencies, accompanied by a comprehensive automated test suite and an empirical comparative study between REST vs. GraphQL protocols in Node.js with E2E tests."
      },
      highlights: {
        pt: [
          "Versão Original: ASP.NET Core MVC estruturado, Razor Views, EF Core e MySQL",
          "Evolução Hexagonal: Núcleo de domínio isolado com Ports & Adapters em C#/.NET 8",
          "Alta confiabilidade com suíte completa de testes automatizados (unitários e E2E)",
          "Estudo comparativo prático de desempenho e contratos entre RESTful e GraphQL"
        ],
        en: [
          "Original Version: Structured ASP.NET Core MVC, Razor Views, EF Core, and MySQL",
          "Hexagonal Evolution: Isolated domain core with Ports & Adapters in C#/.NET 8",
          "High reliability with a comprehensive automated test suite (unit and E2E)",
          "Empirical comparative study of performance and contracts between RESTful and GraphQL"
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
      personas: ["all"],
      subtitle: {
        pt: "Aplicação Desktop em Java com Interface Gráfica e Gamificação de Produtividade",
        en: "Java Desktop Application with Graphical Interface (Swing) and Productivity Gamification"
      },
      description: {
        pt: "Aplicação desktop desenvolvida em Java aplicando conceitos fundamentais e avançados de Programação Orientada a Objetos (POO) e interface gráfica com Java Swing. O sistema permite o planejamento semanal estruturado de tarefas (adição, remoção e atualização de status), incorporando uma lógica de cálculo de pontuação baseada na conclusão das atividades para incentivar a produtividade e organização pessoal.",
        en: "Desktop application built in Java applying core and advanced Object-Oriented Programming (OOP) concepts and an interactive GUI with Java Swing. Enables structured weekly task management (adding, removing, and status updates), integrating a scoring algorithm based on task completion to encourage personal productivity and focus."
      },
      highlights: {
        pt: [
          "Aplicação rigorosa de POO (Encapsulamento, Herança, Polimorfismo e Abstração)",
          "Interface visual interativa desenvolvida com a biblioteca Java Swing",
          "Lógica de pontuação dinâmica e gamificação de produtividade diária",
          "Gerenciamento estruturado de estado de tarefas"
        ],
        en: [
          "Rigorous application of OOP (Encapsulation, Inheritance, Polymorphism, Abstraction)",
          "Interactive desktop GUI built with Java Swing library",
          "Dynamic scoring algorithm and daily productivity gamification",
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
      badge: { pt: "Freelance / Modular JS", en: "Freelance / Modular JS" },
      personas: ["react", "all"],
      subtitle: {
        pt: "Sistema Web Comercial para Controle de Estoque & Operações em Tempo Real",
        en: "Commercial Web System for Inventory Management & Real-Time Operations"
      },
      description: {
        pt: "Sistema web responsivo desenvolvido de forma autônoma como desenvolvedor freelancer para gestão comercial. A solução otimiza o controle de estoque, o registro de entradas e saídas de mercadorias e a emissão de relatórios operacionais e financeiros em tempo real. Construído com arquitetura modularizada em JavaScript ES6, sem dependências externas pesadas, priorizando alta velocidade, facilidade de uso e robustez em ambiente de produção.",
        en: "Responsive web system built autonomously as a freelance developer for commercial management. The solution streamlines inventory tracking, merchandise inflow and outflow records, and real-time operational and financial reporting. Designed with a modular ES6 JavaScript architecture with zero heavy external dependencies, prioritizing fast load times, usability, and production reliability."
      },
      highlights: {
        pt: [
          "Arquitetura front-end modularizada em JavaScript ES6",
          "Cálculos em tempo real de saldo, saídas e relatórios operacionais",
          "Layout responsivo mobile-first acessível em múltiplos dispositivos",
          "Deploy e execução ágil via GitHub Pages"
        ],
        en: [
          "Modular front-end architecture built in modern ES6 JavaScript",
          "Real-time calculations for balances, outflows, and operational reports",
          "Mobile-first responsive design accessible across devices",
          "Fast static deployment and execution via GitHub Pages"
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
          "Atuação no ciclo completo de engenharia, sustentação e evolução da plataforma BoraLá utilizando C#, .NET 8, ASP.NET Core MVC e MySQL.",
          "Implementação e isolamento de serviços de domínio para controle de inscrições, credenciamento e presença, gerenciamento de papéis (RBAC) e resolução de conflitos de tracking no EF Core.",
          "Correção de vulnerabilidades de segurança e adequação à LGPD (proteção de CPF/Login em crachás e QR Codes criptografados), além de controle transacional no MySQL.",
          "Criação e manutenção de testes automatizados com MSTest, Moq e EF Core InMemory, além de atuação contínua em revisões de código (Peer Review) em Pull Requests."
        ],
        en: [
          "Full software lifecycle engineering, maintenance, and evolution for the BoraLá platform using C#, .NET 8, ASP.NET Core MVC, and MySQL.",
          "Implementation and isolation of domain services for registration, accreditation, and attendance control, RBAC authorization, and resolving EF Core entity tracking conflicts.",
          "Security vulnerability remediation and LGPD compliance (protecting CPF/Login in badges and encrypted QR Codes), along with transactional locking in MySQL.",
          "Creation and maintenance of automated test suites with MSTest, Moq, and EF Core InMemory, plus continuous participation in Peer Code Reviews on Pull Requests."
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
          "Desenvolvimento de ponta a ponta de aplicação web responsiva para controle de estoques, movimentações e relatórios financeiros em tempo real.",
          "Construção de arquitetura modularizada em JavaScript ES6, garantindo performance extrema e autonomia operacional sem custo de infraestrutura complexa."
        ],
        en: [
          "End-to-end development of a responsive web application for inventory management, stock transactions, and real-time financial reporting.",
          "Built with a modular ES6 JavaScript architecture, delivering top performance and complete operational autonomy without heavy infrastructure overhead."
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
        pt: "8º Período (Conclusão prevista: Dez/2026)",
        en: "8th Semester (Expected Graduation: Dec/2026)"
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
      items: ["React 19", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Leaflet Maps", "Razor Views", "HTML5", "CSS3", "Java Swing (GUI)"]
    },
    {
      category: {
        pt: "IA Generativa, Automação & No-Code",
        en: "Generative AI, Automation & Low-Code"
      },
      items: ["Google Gemini (IA & OCR)", "Agentes de IA", "Prompt Engineering", "n8n", "Make (Integromat)", "Zapier", "Webhooks", "APIs REST", "Prototipação Ágil"]
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
        pt: "Qualidade, Arquitetura & Metodologias",
        en: "Quality, Architecture & Methodologies"
      },
      items: ["Clean Architecture", "Arquitetura Hexagonal (Ports & Adapters)", "Testes Automatizados", "MSTest", "Moq", "Playwright (E2E)", "Métodos Ágeis (Scrum/Kanban)", "Git Flow", "Code Review (Peer Review)", "Docker", "CI/CD"]
    }
  ],

  curriculums: [
    {
      id: "net-jr",
      title: {
        pt: "Desenvolvedor .NET Júnior (ATS)",
        en: "Junior .NET Developer (ATS)"
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
        pt: "Desenvolvedor Full Stack React / Node / TypeScript (ATS)",
        en: "Full Stack React / Node / TypeScript Developer (ATS)"
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
        pt: "Estágio em IA Generativa, Automação & Vibe Coding (ATS)",
        en: "Generative AI, Automation & Vibe Coding Intern (ATS)"
      },
      target: {
        pt: "Vagas em IA Generativa, Agentes, Automação de Workflows (n8n/Make) e APIs",
        en: "Roles in Generative AI, AI Agents, Workflow Automation (n8n/Make), and APIs"
      },
      file: "assets/cv/Cassiano_Menezes_Estagio_IA_Automacao_VibeCoding.pdf",
      keywords: ["Google Gemini", "Agentes de IA", "Prompt Engineering", "n8n", "Make", "Webhooks", "Python", "React"]
    },
    {
      id: "fullstack-aspnet-mvc",
      title: {
        pt: "Desenvolvedor Full Stack ASP.NET MVC Júnior (ATS)",
        en: "Full Stack ASP.NET MVC Junior Developer (ATS)"
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
        pt: "Estágio em Engenharia de Software Full Stack (ATS)",
        en: "Full Stack Software Engineering Intern (ATS)"
      },
      target: {
        pt: "Estágios em desenvolvimento de software, C#, Java, React, SQL e Metodologias Ágeis",
        en: "Internships in software development, C#, Java, React, SQL, and Agile Methodologies"
      },
      file: "assets/cv/Cassiano_Menezes_Estagio_Engenharia_Software.pdf",
      keywords: ["UFS (8º Período)", "C#/.NET", "Java", "React", "POO", "SQL", "Scrum", "Git Flow"]
    },
    {
      id: "backend-node-ts",
      title: {
        pt: "Desenvolvedor Back-End Node.js & TypeScript Júnior (ATS)",
        en: "Junior Back-End Node.js & TypeScript Developer (ATS)"
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
        pt: "Junior Software Engineer (Remote Americas / Global - English ATS)",
        en: "Junior Software Engineer (Remote Americas / Global - English ATS)"
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
