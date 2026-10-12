/**
 * SkillCraft - Learning Path Generator Application Logic
 * Workshop Edition: Responsive, interactive, and error-free
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Data Store: Curated Curriculums & Dynamic Fallback Engine
  // ==========================================================================

  const CURRICULUM_DATABASE = {
    'python programming': {
      title: 'Python Programming Mastery',
      category: 'Software Engineering',
      curriculum: {
        'Beginner': [
          {
            phase: 'Phase 1',
            title: 'Python Syntax & Core Fundamentals',
            description: 'Master variables, data types, conditionals, loops, functions, and standard input/output with clean PEP 8 styling.',
            topics: ['Variables & Types', 'Control Flow & Loops', 'Functions & Scope', 'String Manipulation', 'Error Handling'],
            project: {
              title: 'Interactive Command-Line Budget Tracker',
              desc: 'Build a CLI utility that parses user income/expenses and formats summary reports.'
            },
            resources: [
              { name: 'Python Official Docs (Tutorial)', url: 'https://docs.python.org/3/tutorial/' },
              { name: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com/' }
            ],
            baseHours: 16
          },
          {
            phase: 'Phase 2',
            title: 'Data Structures & Algorithmic Foundations',
            description: 'Work fluently with lists, tuples, sets, dictionaries, list comprehensions, and fundamental algorithmic problem solving.',
            topics: ['Lists & Tuples', 'Dictionaries & Sets', 'List Comprehensions', 'Sorting & Filtering', 'File I/O (JSON/CSV)'],
            project: {
              title: 'Automated CSV Data Analyzer',
              desc: 'Create a script that reads messy CSV sales data, calculates metrics, and exports clean summaries.'
            },
            resources: [
              { name: 'Real Python Data Structures', url: 'https://realpython.com/' },
              { name: 'W3Schools Python Reference', url: 'https://www.w3schools.com/python/' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 3',
            title: 'Object-Oriented Programming (OOP) & Modules',
            description: 'Structure clean, modular applications with classes, objects, inheritance, dunder methods, and virtual environments.',
            topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Virtual Envs (venv)', 'Package Management (pip)', 'Unit Testing (unittest)'],
            project: {
              title: 'Inventory & Order Management System',
              desc: 'Model an e-commerce inventory system with object hierarchies and transaction logging.'
            },
            resources: [
              { name: 'Corey Schafer OOP Series', url: 'https://www.youtube.com/' },
              { name: 'PyPI Python Packages', url: 'https://pypi.org/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 4',
            title: 'Web Requests, APIs & Web Scraping',
            description: 'Connect Python to the world. Query REST APIs, parse JSON, and scrape structured web data using Requests and BeautifulSoup.',
            topics: ['HTTP & REST APIs', 'Requests Library', 'BeautifulSoup4', 'Asynchronous Basics', 'Data Persistence (SQLite)'],
            project: {
              title: 'Live Weather & News Digest Aggregator',
              desc: 'Fetch data from open public APIs and generate daily automated markdown briefs.'
            },
            resources: [
              { name: 'Python Requests Docs', url: 'https://requests.readthedocs.io/' },
              { name: 'Public APIs Directory', url: 'https://github.com/public-apis/public-apis' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Lightweight Web API / Dashboard',
            description: 'Bring it all together by building a lightweight REST API using FastAPI or Flask, documented and ready for deployment.',
            topics: ['FastAPI / Flask', 'Pydantic Models', 'Route Handling', 'Git Version Control', 'Deployment (Render/Fly.io)'],
            project: {
              title: 'Personal Bookmark & Notes REST API',
              desc: 'Deploy a complete CRUD API with interactive Swagger docs and persistent SQLite storage.'
            },
            resources: [
              { name: 'FastAPI Official Tutorial', url: 'https://fastapi.tiangolo.com/' },
              { name: 'GitHub Student Pack / Git Guide', url: 'https://git-scm.com/' }
            ],
            baseHours: 24
          }
        ],
        'Intermediate': [
          {
            phase: 'Phase 1',
            title: 'Advanced Pythonic Patterns & Functional Idioms',
            description: 'Level up with generators, decorators, context managers, iterators, typing annotations, and memory-conscious code.',
            topics: ['Decorators & Wrappers', 'Generators & Yield', 'Context Managers (with)', 'Type Hinting (mypy)', 'Collections & Itertools'],
            project: {
              title: 'Custom API Rate Limiter & Logger Decorator',
              desc: 'Build high-performance decorator utilities and benchmark execution timings.'
            },
            resources: [
              { name: 'Fluent Python Insights', url: 'https://www.oreilly.com/' },
              { name: 'Real Python Advanced Guides', url: 'https://realpython.com/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 2',
            title: 'Concurrency, Threading & Asynchronous I/O',
            description: 'Build non-blocking concurrent applications utilizing asyncio, ThreadPoolExecutor, and event loop patterns.',
            topics: ['async/await Syntax', 'Asyncio Tasks & Gather', 'Multiprocessing vs Threading', 'Race Conditions & Locks', 'aiohttp Client'],
            project: {
              title: 'High-Throughput Concurrent Web Crawler',
              desc: 'Download and process 500+ web endpoints simultaneously with asyncio and rate limiting.'
            },
            resources: [
              { name: 'Asyncio Documentation', url: 'https://docs.python.org/3/library/asyncio.html' },
              { name: 'Real Python Async IO', url: 'https://realpython.com/async-io-python/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 3',
            title: 'Relational Data Modeling with SQL & ORMs',
            description: 'Design robust schemas and query relational databases using SQLAlchemy 2.0 and Alembic database migrations.',
            topics: ['SQLAlchemy 2.0 ORM', 'Alembic Migrations', 'PostgreSQL / SQLite', 'Indexing & Queries', 'Connection Pooling'],
            project: {
              title: 'Enterprise Multi-Tenant Data Store Service',
              desc: 'Design relational tables with foreign keys, cascading constraints, and transactional consistency.'
            },
            resources: [
              { name: 'SQLAlchemy Official Docs', url: 'https://www.sqlalchemy.org/' },
              { name: 'Alembic Tutorial', url: 'https://alembic.sqlalchemy.org/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 4',
            title: 'Production Testing, Dockerization & CI/CD',
            description: 'Write comprehensive pytest suites with fixtures and mocks, containerize applications with Docker, and configure GitHub Actions.',
            topics: ['Pytest & Fixtures', 'Mocking & Coverage', 'Docker & Multi-stage Builds', 'GitHub Actions Workflows', 'Linting with Ruff'],
            project: {
              title: 'Containerized Microservice with Automated CI Pipeline',
              desc: 'Package an API with Docker, unit tests with >85% coverage, and automated linting on PRs.'
            },
            resources: [
              { name: 'Pytest Documentation', url: 'https://docs.pytest.org/' },
              { name: 'Docker for Python Developers', url: 'https://docs.docker.com/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Full-Scale Production Service',
            description: 'Architect a full production-ready SaaS backend with authentication (JWT), background tasks (Celery/Redis), and telemetry.',
            topics: ['FastAPI Production Stack', 'JWT Authentication', 'Redis & Celery Tasks', 'Structured Logging & Prometheus', 'Cloud Deployment'],
            project: {
              title: 'Asynchronous Video/Image Processing Backend',
              desc: 'Build an API where users upload media, background workers process files, and webhooks alert clients.'
            },
            resources: [
              { name: 'FastAPI Best Practices', url: 'https://github.com/zhanymkanov/fastapi-best-practices' },
              { name: 'Celery Project Guides', url: 'https://docs.celeryq.dev/' }
            ],
            baseHours: 26
          }
        ],
        'Advanced': [
          {
            phase: 'Phase 1',
            title: 'CPython Internals, Memory Management & Profiling',
            description: 'Deep dive into GIL mechanics, garbage collection, bytecode disassembly, and performance profiling.',
            topics: ['CPython Architecture', 'GIL & Free-threaded Python 3.13+', 'cProfile & py-spy', 'Memory Leaks & tracemalloc', 'Cython / C Extensions'],
            project: {
              title: 'High-Performance Computational Accelerator',
              desc: 'Profile memory/CPU bottlenecks and rewrite critical inner loops using C-bindings/Cython.'
            },
            resources: [
              { name: 'Inside the Python 3 Engine', url: 'https://realpython.com/' },
              { name: 'CPython GitHub Source Code', url: 'https://github.com/python/cpython' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 2',
            title: 'Distributed Systems & Event-Driven Architecture',
            description: 'Scale Python across distributed clusters with Apache Kafka, RabbitMQ, gRPC, and distributed consensus.',
            topics: ['gRPC & Protobuf', 'Kafka Streaming', 'Distributed Locks (Redis/ZooKeeper)', 'Idempotency & Retries', 'Saga Patterns'],
            project: {
              title: 'Distributed Event-Driven Payment Pipeline',
              desc: 'Implement a resilient distributed payment processor with dead-letter queues and idempotency keys.'
            },
            resources: [
              { name: 'gRPC Python Quickstart', url: 'https://grpc.io/docs/languages/python/' },
              { name: 'Confluent Kafka Python', url: 'https://docs.confluent.io/' }
            ],
            baseHours: 26
          },
          {
            phase: 'Phase 3',
            title: 'High-Concurrency Systems & Resiliency Patterns',
            description: 'Design zero-downtime, circuit-breaking architectures capable of handling 50k+ requests per second.',
            topics: ['Circuit Breakers', 'Backpressure Handling', 'Custom Protocol Parsers', 'Prometheus & OpenTelemetry', 'Chaos Engineering'],
            project: {
              title: 'Real-time WebSocket Pub/Sub Gateway',
              desc: 'Develop a high-load real-time gateway with cluster metrics instrumentation.'
            },
            resources: [
              { name: 'OpenTelemetry Python', url: 'https://opentelemetry.io/docs/languages/python/' }
            ],
            baseHours: 25
          },
          {
            phase: 'Phase 4',
            title: 'Security Hardening, SAST & Cloud Infrastructure',
            description: 'Implement enterprise security standards: OWASP Top 10 mitigation, secret management, and Infrastructure as Code with Terraform.',
            topics: ['Bandit / Semgrep SAST', 'OAuth2 / OIDC Providers', 'Terraform on AWS/GCP', 'Secret Vaults (KMS)', 'Zero Trust Architecture'],
            project: {
              title: 'Automated Security Audit & Compliance Bot',
              desc: 'Build an automated cloud compliance scanner that runs scheduled security assertions.'
            },
            resources: [
              { name: 'OWASP Python Security Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Scalable Distributed Platform',
            description: 'Deliver an enterprise-grade cloud platform from scratch with Terraform, Kubernetes, telemetry, and CI/CD pipelines.',
            topics: ['Kubernetes Helm Charts', 'Autoscaling (HPA)', 'Blue/Green Deployments', 'SLA/SLO Dashboards', 'Architecture Documentation'],
            project: {
              title: 'Global High-Availability Content Delivery & Search Engine',
              desc: 'Architect and deploy an elastic search & indexing cluster with automated failover.'
            },
            resources: [
              { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }
            ],
            baseHours: 30
          }
        ]
      }
    },

    'ui/ux design': {
      title: 'UI/UX Design & Product Strategy',
      category: 'Design & Product',
      curriculum: {
        'Beginner': [
          {
            phase: 'Phase 1',
            title: 'Design Foundations & Visual Hierarchy',
            description: 'Learn typography, color theory, spacing systems (8pt grid), alignment, and contrast ratios (WCAG accessibility).',
            topics: ['Color Theory & Palettes', 'Typography & Scale', '8pt Spacing Grid', 'Visual Hierarchy & Balance', 'WCAG Contrast Compliance'],
            project: {
              title: 'Redesigning a Classic Landing Page Hero',
              desc: 'Create 3 variations of a high-converting landing page hero section applying typography and color harmony.'
            },
            resources: [
              { name: 'Refactoring UI Book & Tips', url: 'https://www.refactoringui.com/' },
              { name: 'WebAIM Color Contrast Checker', url: 'https://webaim.org/resources/contrastchecker/' }
            ],
            baseHours: 16
          },
          {
            phase: 'Phase 2',
            title: 'Figma Mastery: Components & Auto-Layout',
            description: 'Master industry-standard Figma tools: frames, vectors, auto-layout 5.0, variants, and responsive constraints.',
            topics: ['Figma Auto-Layout', 'Component Variants', 'Component Properties', 'Responsive Constraints', 'Styles & Tokens'],
            project: {
              title: 'Responsive Cross-Device Pricing Matrix',
              desc: 'Build a production-ready responsive pricing card component set with hover states and billing toggles.'
            },
            resources: [
              { name: 'Figma Community Tutorials', url: 'https://www.figma.com/resources/learn-design/' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 3',
            title: 'User Experience (UX) Research & User Journeys',
            description: 'Understand user empathy through qualitative interviews, persona creation, empathy mapping, and user journey flows.',
            topics: ['User Personas', 'Information Architecture', 'User Flow Diagrams', 'Empathy Mapping', 'Card Sorting Exercises'],
            project: {
              title: 'Mobile Onboarding UX Overhaul',
              desc: 'Map out the complete sign-up and onboarding journey for a mobile habit tracker app.'
            },
            resources: [
              { name: 'Nielsen Norman Group UX Articles', url: 'https://www.nngroup.com/articles/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 4',
            title: 'Wireframing & Interactive Prototyping',
            description: 'Transform rough ideas into low-fidelity wireframes, progressing into clickable interactive high-fidelity prototypes.',
            topics: ['Low-Fi Wireframing', 'Smart Animate in Figma', 'Micro-Interactions', 'Interactive States (Hover, Active)', 'Usability Testing'],
            project: {
              title: 'Interactive Mobile Food Delivery App Flow',
              desc: 'Prototype a smooth 5-screen checkout flow with realistic transitions and payment confirmation.'
            },
            resources: [
              { name: 'Mobbin Mobile Design Patterns', url: 'https://mobbin.com/' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: End-to-End Case Study & Portfolio',
            description: 'Document an end-to-end design case study highlighting problem statements, research insights, iterations, and final prototypes.',
            topics: ['Case Study Storytelling', 'Design System Mini-Kit', 'Developer Handoff Specs', 'Portfolio Presentation', 'Behance / Dribbble Showcase'],
            project: {
              title: 'Complete SaaS Product Concept & Design Case Study',
              desc: 'Publish a polished case study demonstrating problem discovery, user testing insights, and high-fidelity screens.'
            },
            resources: [
              { name: 'Case Study Club Best Practices', url: 'https://www.casestudy.club/' }
            ],
            baseHours: 22
          }
        ],
        'Intermediate': [
          {
            phase: 'Phase 1',
            title: 'Advanced Design Systems & Scalable Tokens',
            description: 'Build enterprise-scale design systems with semantic color tokens, typography ramps, and modular components.',
            topics: ['Design Tokens Architecture', 'Semantic Color Scales', 'Component Composition', 'Governance & Versioning', 'Documentation in Zeroheight'],
            project: {
              title: 'Multi-Brand UI Design System Kit',
              desc: 'Construct a reusable design system supporting both Light and Dark modes via Figma Variables.'
            },
            resources: [
              { name: 'Design Systems Handbook', url: 'https://www.designbetter.co/design-systems-handbook' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 2',
            title: 'Quantitative UX Metrics & Usability Testing',
            description: 'Run moderated and unmoderated user tests. Analyze SUS scores, task completion rates, drop-off funnels, and heatmaps.',
            topics: ['System Usability Scale (SUS)', 'A/B Testing Frameworks', 'Maze / UserTesting Setup', 'Heatmap Analysis (Hotjar)', 'Quantitative Synthesis'],
            project: {
              title: 'Checkout Funnel Optimization Study',
              desc: 'Conduct usability sessions on an e-commerce checkout flow, calculate SUS scores, and propose tested UI fixes.'
            },
            resources: [
              { name: 'MeasuringU UX Statistics', url: 'https://measuringu.com/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 3',
            title: 'Complex Data Visualization & Dashboard UX',
            description: 'Design intuitive financial, analytics, and operational dashboards with complex filtering, graphs, and table density controls.',
            topics: ['Data Visualization Principles', 'Chart Selection UX', 'Complex Table UX & Sorting', 'Filter Drawers & Facets', 'Accessibility in Charts'],
            project: {
              title: 'Fintech Wealth Management Analytics Dashboard',
              desc: 'Design a clean multi-view financial analytics tool with portfolio breakdowns and transactional history.'
            },
            resources: [
              { name: 'Data Visualization by Andy Kirk', url: 'https://www.visualisingdata.com/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 4',
            title: 'Advanced Motion Design & Micro-Interactions',
            description: 'Bring interfaces to life using purposeful motion principles, easing curves, and export to production via Lottie/Rive.',
            topics: ['Principles of UI Motion', 'Bezier Easing Curves', 'Rive & Lottie Integration', 'Gesture-Driven Mobile Interactions', 'Haptic Feedback Design'],
            project: {
              title: 'Gamified Milestone Celebration Flow',
              desc: 'Design and animate celebratory confetti, custom toggle switches, and tab bar morphs.'
            },
            resources: [
              { name: 'Rive Interactive Graphics', url: 'https://rive.app/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Enterprise B2B SaaS Product Redesign',
            description: 'Execute an end-to-end redesign for a legacy enterprise workflow, delivering measurable efficiency gains and developer specs.',
            topics: ['Legacy System Audits', 'Stakeholder Interviews', 'Design-to-Code Parity', 'Design Handoff Specs', 'ROI Measurement'],
            project: {
              title: 'Enterprise CRM Workflow Modernization',
              desc: 'Transform a cluttered 20-step sales pipeline into an intuitive, AI-assisted productivity command center.'
            },
            resources: [
              { name: 'UX Design Weekly Inspiration', url: 'https://uxdesignweekly.com/' }
            ],
            baseHours: 24
          }
        ],
        'Advanced': [
          {
            phase: 'Phase 1',
            title: 'Product Strategy & Vision Architecture',
            description: 'Align design initiatives with business metrics (CAC, LTV, Retention, ARR). Lead product discovery and North Star frameworks.',
            topics: ['North Star Metric Framework', 'Opportunity Solution Trees', 'Jobs to Be Done (JTBD)', 'Product Market Fit Hypotheses', 'Executive Stakeholder Alignment'],
            project: {
              title: 'Strategic 3-Year Product Vision Pitch Deck',
              desc: 'Formulate a comprehensive vision narrative, concept prototype, and measurable KPI benchmarks.'
            },
            resources: [
              { name: 'Continuous Discovery Habits by Teresa Torres', url: 'https://www.producttalk.org/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 2',
            title: 'AI-Native Interfaces & Conversational UX',
            description: 'Design generative AI interfaces: prompt affordances, streaming response states, cognitive load balancing, and uncertainty handling.',
            topics: ['Prompt Engineering UI', 'Handling AI Hallucinations', 'Streaming State UI & Latency UX', 'Multimodal Interactions', 'Ethical AI Design'],
            project: {
              title: 'AI Copilot Assistant for Medical Professionals',
              desc: 'Design an AI-driven clinical workflow assistant with citation transparency and physician override controls.'
            },
            resources: [
              { name: 'Google People + AI Guidebook', url: 'https://pair.withgoogle.com/guidebook/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 3',
            title: 'Design Operations (DesignOps) & Org Scaling',
            description: 'Scale design across 50+ engineers and designers. Optimize cross-functional handoffs, toolchains, and design hiring loops.',
            topics: ['DesignOps Frameworks', 'Design Quality Audits', 'Cross-functional Collaboration', 'Design Token Automation', 'Design Team Leadership'],
            project: {
              title: 'Enterprise DesignOps Operating Manual & Toolchain',
              desc: 'Build the automated pipeline connecting Figma tokens directly to GitHub CSS variables.'
            },
            resources: [
              { name: 'DesignOps Assembly Community', url: 'https://www.designopsassembly.com/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 4',
            title: 'Global Accessibility (WCAG 2.2 AAA) & Inclusivity',
            description: 'Lead universal accessibility audits: screen reader navigation, switch controls, neurodiverse cognitive accommodations.',
            topics: ['WCAG 2.2 AAA Standards', 'Screen Reader Auditing', 'Keyboard-Only Navigation UX', 'Inclusive Content Strategy', 'Internationalization & RTL UI'],
            project: {
              title: 'Universal Banking Portal Accessibility Certification',
              desc: 'Audit and retrofit an entire digital banking flow to exceed strict federal accessibility requirements.'
            },
            resources: [
              { name: 'W3C Web Accessibility Initiative', url: 'https://www.w3.org/WAI/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Flagship Product Innovation Portfolio',
            description: 'Produce an executive-level portfolio showcasing strategic product leadership, measurable revenue impact, and design excellence.',
            topics: ['Strategic Impact Storytelling', 'ROI Justification', 'Leadership Case Studies', 'Conference-Ready Talk / Article', 'Executive Portfolio Site'],
            project: {
              title: 'Autonomous Fleet Management Ecosystem',
              desc: 'A complete multi-platform ecosystem design (mobile, dispatch console, vehicle HUD) for autonomous transport fleets.'
            },
            resources: [
              { name: 'Design Executive Council', url: 'https://www.designexecutivecouncil.com/' }
            ],
            baseHours: 28
          }
        ]
      }
    },

    'full-stack web dev': {
      title: 'Full-Stack Web Development',
      category: 'Software Engineering',
      curriculum: {
        'Beginner': [
          {
            phase: 'Phase 1',
            title: 'Modern HTML5, Semantic Structure & Responsive CSS',
            description: 'Build responsive, accessible, mobile-first websites using semantic HTML, Flexbox, Grid, and CSS custom properties.',
            topics: ['Semantic HTML5', 'CSS Flexbox & Grid', 'Responsive Media Queries', 'CSS Variables', 'Forms & Accessible Inputs'],
            project: {
              title: 'Responsive Developer Portfolio & Service Hub',
              desc: 'Develop a fast, mobile-friendly personal portfolio website with a working contact modal.'
            },
            resources: [
              { name: 'MDN Web Docs (HTML/CSS)', url: 'https://developer.mozilla.org/' },
              { name: 'FreeCodeCamp Responsive Web Design', url: 'https://www.freecodecamp.org/' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 2',
            title: 'JavaScript (ES6+) Programming & DOM Manipulation',
            description: 'Master core JavaScript programming: variables, arrays, objects, events, DOM manipulation, promises, and fetch API.',
            topics: ['ES6 Syntax & Arrow Functions', 'DOM Selectors & Event Listeners', 'Async/Await & Fetch API', 'Array Methods (map, filter, reduce)', 'Local Storage API'],
            project: {
              title: 'Interactive Kanban Task Board with Local Storage',
              desc: 'Build a drag-and-drop task management tool that persists user lists locally across browser sessions.'
            },
            resources: [
              { name: 'JavaScript.info Complete Guide', url: 'https://javascript.info/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 3',
            title: 'Frontend Component Architecture (React / Modern Framework)',
            description: 'Build dynamic single-page applications with reusable components, state management (hooks), and client-side routing.',
            topics: ['React Components & Props', 'useState & useEffect Hooks', 'Form Handling', 'Client Routing', 'Component Styling'],
            project: {
              title: 'Real-Time Movie & TV Discovery Application',
              desc: 'Connect to TMDB open API to build a search and filter dashboard with pagination and bookmarking.'
            },
            resources: [
              { name: 'React Official Documentation', url: 'https://react.dev/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 4',
            title: 'Backend Services with Node.js, Express & REST APIs',
            description: 'Create server-side applications, route HTTP requests, handle middleware, validate input, and store data in databases.',
            topics: ['Node.js & NPM', 'Express.js Framework', 'RESTful API Design', 'Middleware & CORS', 'MongoDB / SQLite with Prisma'],
            project: {
              title: 'Community Blog & Discussion Backend API',
              desc: 'Write a complete backend service with user registration, authentication, and article CRUD endpoints.'
            },
            resources: [
              { name: 'Express.js Guides', url: 'https://expressjs.com/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Full-Stack MERN / Next.js Production App',
            description: 'Unite frontend and backend into an authenticated, production-deployed web application hosted on Vercel and Render.',
            topics: ['Full-Stack Integration', 'JWT Authentication', 'Environment Variables & Security', 'Git Collaboration', 'Cloud Deployment'],
            project: {
              title: 'Collaborative Study Group Marketplace',
              desc: 'Deploy a full-stack platform featuring user auth, booking calendars, review systems, and database backups.'
            },
            resources: [
              { name: 'Full Stack Open Course (University of Helsinki)', url: 'https://fullstackopen.com/' }
            ],
            baseHours: 26
          }
        ],
        'Intermediate': [
          {
            phase: 'Phase 1',
            title: 'TypeScript & Type-Safe Architecture',
            description: 'Adopt TypeScript across full-stack applications. Master generics, utility types, interfaces, and strict type checking.',
            topics: ['TypeScript Interfaces & Types', 'Generics & Utility Types', 'TS with React & Express', 'Zod Schema Validation', 'Type Inference'],
            project: {
              title: 'Type-Safe E-Commerce Checkout Engine',
              desc: 'Build a bulletproof cart and checkout calculation pipeline with compile-time type guarantees and runtime Zod validation.'
            },
            resources: [
              { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 2',
            title: 'Next.js 14+ App Router & Server Components',
            description: 'Architect modern full-stack web applications with React Server Components, server actions, caching, and streaming SSR.',
            topics: ['React Server Components (RSC)', 'Next.js App Router', 'Server Actions & Mutations', 'Streaming & Suspense', 'SEO & OpenGraph Tags'],
            project: {
              title: 'High-Performance Content Publishing Platform',
              desc: 'Build a lightning-fast editorial platform with server actions, incremental static regeneration (ISR), and rich SEO.'
            },
            resources: [
              { name: 'Next.js Official Documentation', url: 'https://nextjs.org/docs' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 3',
            title: 'Relational Database Engineering & PostgreSQL',
            description: 'Design performant relational schemas, foreign key relationships, complex joins, and migrations with Prisma / Drizzle ORM.',
            topics: ['PostgreSQL Relational Design', 'Prisma / Drizzle ORM', 'Database Indexes & Execution Plans', 'Transactions & ACID', 'Supabase / Neon DB'],
            project: {
              title: 'Multi-Tenant Project Management Database',
              desc: 'Model organizations, teams, permissions, and audit logs with transactional consistency.'
            },
            resources: [
              { name: 'Prisma Documentation', url: 'https://www.prisma.io/docs' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 4',
            title: 'State Synchronization, WebSockets & Real-Time Data',
            description: 'Build real-time interactive interfaces with WebSockets, optimistic UI updates, and TanStack Query caching.',
            topics: ['Socket.io / Native WebSockets', 'TanStack Query (React Query)', 'Optimistic UI Updates', 'Presence Detection', 'Conflict Resolution'],
            project: {
              title: 'Live Collaborative Whiteboard & Chat',
              desc: 'Create a multi-user collaborative room where canvas updates and chat messages propagate under 50ms.'
            },
            resources: [
              { name: 'TanStack Query Guides', url: 'https://tanstack.com/query/latest' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Production SaaS Platform with Stripe Billing',
            description: 'Develop a complete SaaS web application with OAuth login, Stripe subscription checkout, webhook handlers, and CI/CD.',
            topics: ['Stripe Billing & Webhooks', 'NextAuth / Clerk Auth', 'Docker Containerization', 'Automated Testing (Playwright)', 'AWS / Vercel Deploy'],
            project: {
              title: 'AI Document Summarizer & SaaS Workspace',
              desc: 'A full-scale subscription SaaS tool with tiered feature flags, Stripe webhook billing, and usage quotas.'
            },
            resources: [
              { name: 'Stripe API Documentation', url: 'https://stripe.com/docs' }
            ],
            baseHours: 28
          }
        ],
        'Advanced': [
          {
            phase: 'Phase 1',
            title: 'High-Scale Frontend Performance & Core Web Vitals',
            description: 'Optimize web applications for top Lighthouse scores, INP, LCP, CLS, code splitting, asset preloading, and edge rendering.',
            topics: ['Core Web Vitals Optimization', 'Interaction to Next Paint (INP)', 'Edge Computing (Cloudflare Workers)', 'Bundle Analysis & Tree Shaking', 'Service Workers & PWA'],
            project: {
              title: 'Sub-100ms Global Edge Content Reader',
              desc: 'Engineer an edge-rendered web application achieving 100/100 Lighthouse scores across all desktop and mobile benchmarks.'
            },
            resources: [
              { name: 'web.dev Core Web Vitals Guide', url: 'https://web.dev/vitals/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 2',
            title: 'Microservices & Distributed Backend Architecture',
            description: 'Decompose monolithic backends into event-driven microservices using Docker, Kubernetes, gRPC, and message brokers (RabbitMQ/Kafka).',
            topics: ['Event-Driven Microservices', 'RabbitMQ / Kafka Brokers', 'gRPC Inter-service Comms', 'Distributed Tracing (Jaeger)', 'API Gateways'],
            project: {
              title: 'Distributed Order & Delivery Logistics Engine',
              desc: 'Build asynchronous microservices handling order placement, inventory reservations, and customer notifications.'
            },
            resources: [
              { name: 'Microservices Patterns by Chris Richardson', url: 'https://microservices.io/' }
            ],
            baseHours: 26
          },
          {
            phase: 'Phase 3',
            title: 'Advanced Database Scalability & Caching Layers',
            description: 'Scale databases to millions of operations using read replicas, Redis caching patterns, connection poolers, and database sharding.',
            topics: ['Redis Cache-Aside & Write-Through', 'Read Replicas & Connection Pooling', 'Database Sharding Concepts', 'Elasticsearch / Meilisearch', 'Query Optimization'],
            project: {
              title: 'High-Volume Full-Text Search Engine with Redis Caching',
              desc: 'Index 100k+ records and serve fuzzy search queries under 15ms using Redis caches and inverted indexes.'
            },
            resources: [
              { name: 'Redis University Courses', url: 'https://university.redis.io/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 4',
            title: 'Zero-Trust Security, Pentesting & Compliance',
            description: 'Harden web applications against attacks: CSRF, XSS, SSRF, SQL Injection, rate limiting, and SOC2 / GDPR compliance.',
            topics: ['Content Security Policy (CSP)', 'OWASP Top 10 Defenses', 'OAuth2 / SAML Enterprise SSO', 'Encrypted Data at Rest & in Transit', 'Automated SAST & DAST'],
            project: {
              title: 'Enterprise SSO Security Gateway & Audit Vault',
              desc: 'Build a secure authentication proxy enforcing MFA, IP anomaly detection, and tamper-proof security audit logging.'
            },
            resources: [
              { name: 'OWASP Security Verification Standard', url: 'https://owasp.org/www-project-application-security-verification-standard/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Enterprise Multi-Region Cloud Platform',
            description: 'Deploy a multi-region distributed cloud infrastructure with Terraform, Kubernetes, Blue-Green rollouts, and disaster recovery.',
            topics: ['Terraform IaC', 'Kubernetes Helm & GitOps (ArgoCD)', 'Multi-Region Failover', '99.99% Uptime Engineering', 'Executive Architecture Blueprint'],
            project: {
              title: 'Global Cloud Collaborative Workspace Platform',
              desc: 'Deliver a production enterprise platform with automated multi-cloud failover, latency routing, and SOC2-ready architecture.'
            },
            resources: [
              { name: 'ArgoCD GitOps Documentation', url: 'https://argo-cd.readthedocs.io/' }
            ],
            baseHours: 32
          }
        ]
      }
    },

    'data science & ai': {
      title: 'Data Science & Applied AI',
      category: 'Data & Artificial Intelligence',
      curriculum: {
        'Beginner': [
          {
            phase: 'Phase 1',
            title: 'Python for Data Analysis & Exploratory Data Analysis (EDA)',
            description: 'Learn NumPy, Pandas, Matplotlib, and Seaborn to clean, manipulate, and explore real datasets.',
            topics: ['NumPy Arrays & Matrices', 'Pandas DataFrames', 'Data Cleaning & Missing Values', 'Seaborn Visualizations', 'Exploratory Analysis (EDA)'],
            project: {
              title: 'Global Housing Price Exploratory Analysis',
              desc: 'Perform EDA on public real estate data, discovering pricing correlations and missing value patterns.'
            },
            resources: [
              { name: 'Kaggle Python & Pandas Tutorials', url: 'https://www.kaggle.com/learn' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 2',
            title: 'Statistical Foundations & Hypothesis Testing',
            description: 'Understand probability distributions, confidence intervals, central limit theorem, and A/B test hypothesis validation.',
            topics: ['Descriptive Statistics', 'Normal & Binomial Distributions', 'Central Limit Theorem', 'p-values & Confidence Intervals', 'A/B Testing Hypothesis'],
            project: {
              title: 'E-Commerce Website Conversion A/B Test Study',
              desc: 'Analyze experiment logs to compute statistical significance and determine conversion lift for a new checkout button.'
            },
            resources: [
              { name: 'Khan Academy Statistics & Probability', url: 'https://www.khanacademy.org/math/statistics-probability' }
            ],
            baseHours: 18
          },
          {
            phase: 'Phase 3',
            title: 'Applied Machine Learning with Scikit-Learn',
            description: 'Build supervised and unsupervised ML models: Linear Regression, Logistic Regression, Random Forests, and K-Means.',
            topics: ['Train/Test Split & Cross-Validation', 'Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Feature Scaling & Encoders', 'Classification Metrics (Precision/Recall/F1)'],
            project: {
              title: 'Customer Churn Prediction Classifier',
              desc: 'Train a tree-based classifier to predict telecom subscriber churn with detailed confusion matrix analysis.'
            },
            resources: [
              { name: 'Scikit-Learn Documentation', url: 'https://scikit-learn.org/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 4',
            title: 'Relational SQL for Analytics & Data Wrangling',
            description: 'Write complex SQL queries, window functions, aggregations, and CTEs to extract actionable business metrics.',
            topics: ['SQL Joins & Grouping', 'Window Functions (ROW_NUMBER, LAG)', 'Common Table Expressions (CTEs)', 'Data Cleaning in SQL', 'PostgreSQL / DuckDB'],
            project: {
              title: 'SaaS Cohort Retention SQL Dashboard',
              desc: 'Write SQL queries computing monthly cohort retention and lifetime value (LTV) metrics.'
            },
            resources: [
              { name: 'Mode Analytics SQL Tutorial', url: 'https://mode.com/sql-tutorial/' }
            ],
            baseHours: 20
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Interactive Data App & Model Deployment',
            description: 'Package your machine learning model and insights into an interactive Streamlit or Gradio dashboard accessible on the web.',
            topics: ['Streamlit Dashboarding', 'Model Serialization (Joblib)', 'Feature Pipeline Export', 'Streamlit Cloud Deployment', 'Interactive Charting (Plotly)'],
            project: {
              title: 'End-to-End Disease Risk Assessment App',
              desc: 'Deploy an interactive web tool allowing users to enter clinical metrics and receive instant risk probabilities.'
            },
            resources: [
              { name: 'Streamlit Official Tutorial', url: 'https://streamlit.io/' }
            ],
            baseHours: 24
          }
        ],
        'Intermediate': [
          {
            phase: 'Phase 1',
            title: 'Feature Engineering & Gradient Boosting (XGBoost / LightGBM)',
            description: 'Master advanced tabular modeling with gradient boosted trees, hyperparameter tuning with Optuna, and SHAP explainability.',
            topics: ['Feature Engineering Techniques', 'XGBoost & LightGBM', 'Bayesian Optimization (Optuna)', 'SHAP & Feature Importance', 'Handling Imbalanced Datasets'],
            project: {
              title: 'Credit Default Risk Scoring Engine',
              desc: 'Build a compliant credit scoring model with SHAP explanations for regulatory transparency.'
            },
            resources: [
              { name: 'XGBoost Documentation', url: 'https://xgboost.readthedocs.io/' }
            ],
            baseHours: 22
          },
          {
            phase: 'Phase 2',
            title: 'Deep Learning Foundations with PyTorch',
            description: 'Understand neural networks, backpropagation, tensors, custom datasets, dataloaders, and PyTorch training loops.',
            topics: ['Tensors & Autograd', 'Multi-Layer Perceptrons (MLP)', 'Convolutional Neural Nets (CNN)', 'Loss Functions & Optimizers (AdamW)', 'PyTorch Training Loops'],
            project: {
              title: 'Medical Image Classification Classifier',
              desc: 'Train a CNN with transfer learning to identify anomalies in X-ray imaging datasets.'
            },
            resources: [
              { name: 'PyTorch Deep Learning Tutorials', url: 'https://pytorch.org/tutorials/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 3',
            title: 'Natural Language Processing & Transformer Models',
            description: 'Learn modern NLP using Hugging Face Transformers, tokenization, embeddings, and fine-tuning BERT for sentiment and classification.',
            topics: ['Word Embeddings & Vectors', 'Attention Mechanism & Transformers', 'Hugging Face Transformers Library', 'Fine-Tuning Pretrained Models', 'Vector Search & Similarity'],
            project: {
              title: 'Customer Review Sentiment & Topic Extractor',
              desc: 'Fine-tune a lightweight transformer model to categorize support tickets and measure sentiment.'
            },
            resources: [
              { name: 'Hugging Face NLP Course', url: 'https://huggingface.co/learn/nlp-course/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 4',
            title: 'Generative AI & Retrieval-Augmented Generation (RAG)',
            description: 'Build production GenAI applications with LLM APIs, vector databases (Chroma / Pinecone), and LangChain / LlamaIndex.',
            topics: ['LLM API Integration (Gemini, Claude)', 'Vector Databases & Embeddings', 'Chunking Strategies for RAG', 'Prompt Engineering Patterns', 'Evaluation of Hallucinations'],
            project: {
              title: 'Intelligent Enterprise Document Q&A Assistant',
              desc: 'Build a RAG system that ingests company PDF policies and delivers accurate answers with source citations.'
            },
            resources: [
              { name: 'LangChain Documentation', url: 'https://python.langchain.com/' }
            ],
            baseHours: 24
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Production MLOps Pipeline & Model Serving',
            description: 'Build a complete MLOps workflow: experiment tracking with MLflow, containerized model serving with FastAPI, and monitoring.',
            topics: ['MLflow Experiment Tracking', 'FastAPI Model Inference Endpoint', 'Docker Containerization', 'Data Drift Monitoring', 'CI/CD Model Retraining'],
            project: {
              title: 'Automated Fraud Detection Microservice with Real-Time Inference',
              desc: 'Deploy a microservice processing live payment transactions with latency metrics and drift monitoring.'
            },
            resources: [
              { name: 'MLOps Guide by Chip Huyen', url: 'https://huyenchip.com/' }
            ],
            baseHours: 28
          }
        ],
        'Advanced': [
          {
            phase: 'Phase 1',
            title: 'LLM Fine-Tuning, LoRA & Quantization',
            description: 'Fine-tune open-weights large language models (Llama 3, Mistral) with PEFT / LoRA, QLoRA, and modern quantization techniques.',
            topics: ['PEFT / LoRA Architectures', 'QLoRA & 4-bit Quantization', 'Dataset Curation & Synthetic Data', 'TRL (Transformer Reinforcement Learning)', 'Direct Preference Optimization (DPO)'],
            project: {
              title: 'Domain-Specialized Legal / Medical LLM Fine-Tune',
              desc: 'Fine-tune an open-source 8B LLM using LoRA on specialized domain corpora and benchmark against base models.'
            },
            resources: [
              { name: 'Hugging Face Alignment Handbook', url: 'https://github.com/huggingface/alignment-handbook' }
            ],
            baseHours: 26
          },
          {
            phase: 'Phase 2',
            title: 'Autonomous Multi-Agent AI Systems',
            description: 'Design multi-agent orchestration graphs with state machines, tool usage, memory architectures, and human-in-the-loop controls.',
            topics: ['Agentic Workflows & State Graphs', 'Tool Calling & Structured Output', 'Hierarchical Multi-Agent Systems', 'Short & Long-Term Memory Architectures', 'Guardrails & Safety Filters'],
            project: {
              title: 'Autonomous Competitive Market Research Agent Team',
              desc: 'Orchestrate agents that search the web, synthesize financial statements, debate insights, and compile executive reports.'
            },
            resources: [
              { name: 'LangGraph Multi-Agent Architecture', url: 'https://langchain-ai.github.io/langgraph/' }
            ],
            baseHours: 26
          },
          {
            phase: 'Phase 3',
            title: 'High-Throughput Model Serving & Inference Optimization',
            description: 'Deploy models at massive scale using vLLM, TensorRT-LLM, continuous batching, and KV-cache optimizations.',
            topics: ['vLLM Inference Engine', 'Continuous Batching & PagedAttention', 'GPU Cluster Orchestration (Ray)', 'Latency vs Throughput Benchmarks', 'Quantized Model Formats (GGUF, AWQ)'],
            project: {
              title: 'Sub-20ms High-Concurrency AI Inference Gateway',
              desc: 'Deploy a vLLM cluster serving 100 concurrent streaming inference requests with dynamic GPU load balancing.'
            },
            resources: [
              { name: 'vLLM Official Documentation', url: 'https://docs.vllm.ai/' }
            ],
            baseHours: 26
          },
          {
            phase: 'Phase 4',
            title: 'Enterprise Big Data & Distributed Spark Pipelines',
            description: 'Process terabyte-scale datasets across distributed clusters with PySpark, Databricks, Delta Lake, and BigQuery.',
            topics: ['Distributed PySpark & RDDs', 'Delta Lake ACID Storage', 'Partitioning & Skew Handling', 'Feature Store Architecture (Feast)', 'Airflow / Dagster Orchestration'],
            project: {
              title: 'Petabyte-Scale Real-Time Feature Store Pipeline',
              desc: 'Build an automated Spark pipeline extracting millions of behavioral features daily into an online/offline store.'
            },
            resources: [
              { name: 'Apache Spark Documentation', url: 'https://spark.apache.org/' }
            ],
            baseHours: 26
          },
          {
            phase: 'Phase 5',
            title: 'Capstone: Enterprise AI Operating Platform',
            description: 'Deliver a production enterprise AI platform incorporating LLM fine-tuning, multi-agent orchestration, guardrails, and compliance.',
            topics: ['Enterprise GenAI Architecture', 'AI Governance & Red Teaming', 'Cost Optimization & Token Caching', 'Executive AI Strategy Presentation', 'Production Rollout Plan'],
            project: {
              title: 'Enterprise AI Knowledge Core & Autonomous Copilot',
              desc: 'Architect and deploy an enterprise-wide GenAI operating engine serving multiple departmental workflows safely.'
            },
            resources: [
              { name: 'Anthropic AI Alignment & Safety Research', url: 'https://www.anthropic.com/research' }
            ],
            baseHours: 32
          }
        ]
      }
    }
  };

  // Generic Dynamic Curriculum Generator for any skill
  function generateDynamicCurriculum(skillName, level) {
    const cleanSkill = skillName.trim();
    const capitalizedSkill = cleanSkill.charAt(0).toUpperCase() + cleanSkill.slice(1);

    if (level === 'Beginner') {
      return [
        {
          phase: 'Phase 1',
          title: `${capitalizedSkill} Core Foundations & Ecosystem`,
          description: `Master the essential terminology, environment setup, syntax, and foundational mental models of ${cleanSkill}.`,
          topics: ['Core Concepts & Terminology', 'Environment & Tooling Setup', 'Basic Syntax & Principles', 'Standard Workflows', 'Fundamental Best Practices'],
          project: {
            title: `Hands-on ${capitalizedSkill} Starter Project`,
            desc: `Build a clean, documented initial prototype demonstrating foundational ${cleanSkill} knowledge.`
          },
          resources: [
            { name: `${capitalizedSkill} Official Documentation`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' official documentation') },
            { name: `${capitalizedSkill} Beginner Quickstart Guide`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' tutorial for beginners') }
          ],
          baseHours: 16
        },
        {
          phase: 'Phase 2',
          title: `Core Techniques & Daily Workflows`,
          description: `Dive deeper into practical day-to-day tools, core libraries, and problem-solving patterns in ${cleanSkill}.`,
          topics: ['Key Frameworks & Libraries', 'Data Flow & State', 'Debugging & Troubleshooting', 'Modularity & Structure', 'Error Handling'],
          project: {
            title: `Functional ${capitalizedSkill} Workflow Utility`,
            desc: `Create a modular project that solves a common practical task with clean logic and error checking.`
          },
          resources: [
            { name: `${capitalizedSkill} Best Practice Guides`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' best practices') }
          ],
          baseHours: 18
        },
        {
          phase: 'Phase 3',
          title: `Applied Problem Solving & Real-World Integration`,
          description: `Connect ${cleanSkill} with external services, storage, APIs, and modern collaborative tooling.`,
          topics: ['External Integrations', 'Data Persistence', 'Testing Fundamentals', 'Git & Version Control', 'Collaborative Standards'],
          project: {
            title: `Integrated ${capitalizedSkill} Application`,
            desc: `Develop an application incorporating real-world data inputs and automated testing suites.`
          },
          resources: [
            { name: `${capitalizedSkill} Community Forum & Discussions`, url: 'https://stackoverflow.com/questions/tagged/' + encodeURIComponent(cleanSkill.toLowerCase().replace(/\s+/g, '-')) }
          ],
          baseHours: 20
        },
        {
          phase: 'Phase 4',
          title: `Quality, Optimization & Industry Standards`,
          description: `Refine your work with code formatting, security essentials, performance optimization, and clean documentation.`,
          topics: ['Performance Optimization', 'Security Essentials', 'Automated Testing', 'Documentation Standards', 'Clean Architecture'],
          project: {
            title: `Refactored High-Performance Module`,
            desc: `Benchmark an earlier project, identify bottlenecks, and refactor for enhanced speed and clarity.`
          },
          resources: [
            { name: `${capitalizedSkill} Performance Tuning`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' performance optimization') }
          ],
          baseHours: 18
        },
        {
          phase: 'Phase 5',
          title: `Capstone Showcase & Portfolio Milestone`,
          description: `Architect, build, and deploy an end-to-end milestone portfolio project to demonstrate your skills to peers and employers.`,
          topics: ['End-to-End Delivery', 'Deployment / Packaging', 'Portfolio Presentation', 'Case Study Documentation', 'Career Readiness'],
          project: {
            title: `Flagship ${capitalizedSkill} Portfolio Showcase`,
            desc: `Deliver a fully functional, public-facing project complete with README, live demo, and video walkthrough.`
          },
          resources: [
            { name: 'GitHub Open Source Showcase', url: 'https://github.com/' }
          ],
          baseHours: 24
        }
      ];
    } else if (level === 'Intermediate') {
      return [
        {
          phase: 'Phase 1',
          title: `Advanced Architecture & Patterns in ${capitalizedSkill}`,
          description: `Elevate your expertise with design patterns, advanced abstractions, and idioms for scalable development.`,
          topics: ['Design Patterns', 'Advanced Abstractions', 'Typing & Static Analysis', 'State Management', 'Idiomatic Practices'],
          project: {
            title: `Architecture Refactor & Pattern Implementation`,
            desc: `Implement structural design patterns to solve high-complexity architectural challenges.`
          },
          resources: [
            { name: `${capitalizedSkill} Advanced Guide`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' advanced guide') }
          ],
          baseHours: 20
        },
        {
          phase: 'Phase 2',
          title: `Scalability, Concurrency & Performance Tuning`,
          description: `Optimize systems for throughput, asynchronous processing, resource utilization, and low latency.`,
          topics: ['Asynchronous Operations', 'Caching Layers', 'Profiling & Metrics', 'Bottleneck Identification', 'Resource Optimization'],
          project: {
            title: `High-Throughput Processing Pipeline`,
            desc: `Build a concurrent processing engine with latency monitoring and automated caching.`
          },
          resources: [
            { name: `${capitalizedSkill} Scaling Patterns`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' scaling architecture') }
          ],
          baseHours: 22
        },
        {
          phase: 'Phase 3',
          title: `Testing Strategies, CI/CD & Automation`,
          description: `Implement integration testing, mocking, automated regression suites, and continuous integration pipelines.`,
          topics: ['Integration Testing', 'Mocking & Fixtures', 'CI/CD Pipelines', 'Code Coverage Metrics', 'Containerization (Docker)'],
          project: {
            title: `Automated Quality & Deployment Pipeline`,
            desc: `Configure end-to-end testing with containerized builds running on automated pull request checks.`
          },
          resources: [
            { name: 'GitHub Actions Documentation', url: 'https://docs.github.com/actions' }
          ],
          baseHours: 20
        },
        {
          phase: 'Phase 4',
          title: `Security Hardening & Production Operations`,
          description: `Apply defense-in-depth security, vulnerability scanning, telemetry, and structured observability logging.`,
          topics: ['Security Vulnerability Audits', 'Secrets Management', 'Telemetry & APM', 'Error Alerting', 'Cloud Infrastructure'],
          project: {
            title: 'Hardened Production-Grade Service',
            desc: 'Implement authentication, rate limiting, and structured logging with automated alert triggers.'
          },
          resources: [
            { name: 'OWASP Security Guidelines', url: 'https://owasp.org/' }
          ],
          baseHours: 22
        },
        {
          phase: 'Phase 5',
          title: `Capstone: Production-Grade ${capitalizedSkill} Solution`,
          description: 'Deploy a comprehensive, robust production solution with documented architecture, metrics, and automated tests.',
          topics: ['Production Deployment', 'Monitoring Dashboards', 'System Documentation', 'Post-Mortem Runbooks', 'Showcase Presentation'],
          project: {
            title: `Production ${capitalizedSkill} Cloud Application`,
            desc: 'Launch a resilient live system equipped with automated backups, monitoring, and live telemetry.'
          },
          resources: [
            { name: 'System Architecture Standards', url: 'https://www.google.com/search?q=' + encodeURIComponent('production architecture best practices') }
          ],
          baseHours: 26
        }
      ];
    } else {
      // Advanced
      return [
        {
          phase: 'Phase 1',
          title: `Deep Internals & Systems Engineering in ${capitalizedSkill}`,
          description: `Understand underlying runtime mechanics, compiler/engine internals, memory layouts, and algorithmic limits.`,
          topics: ['Runtime Internals', 'Memory Layout & GC', 'Low-Level Optimizations', 'Benchmarking Protocols', 'System Boundaries'],
          project: {
            title: 'Low-Level Computational Engine Optimization',
            desc: 'Profile low-level bottlenecks and re-architect the engine for maximum hardware efficiency.'
          },
          resources: [
            { name: `${capitalizedSkill} Internals Deep Dive`, url: 'https://www.google.com/search?q=' + encodeURIComponent(cleanSkill + ' internals architecture') }
          ],
          baseHours: 24
        },
        {
          phase: 'Phase 2',
          title: `Distributed Systems & Fault-Tolerant Design`,
          description: `Architect resilient distributed topologies, event-driven architectures, consensus mechanisms, and data replication.`,
          topics: ['Distributed Architecture', 'Event-Driven Systems', 'Fault Tolerance & Retries', 'SLA/SLO Engineering', 'Idempotent Operations'],
          project: {
            title: 'Fault-Tolerant Distributed Coordination Cluster',
            desc: 'Build an event-driven cluster with simulated network partitions and automated failover recovery.'
          },
          resources: [
            { name: 'Distributed Systems Patterns', url: 'https://www.google.com/search?q=distributed+systems+design+patterns' }
          ],
          baseHours: 26
        },
        {
          phase: 'Phase 3',
          title: `Zero-Trust Security & Enterprise Compliance`,
          description: 'Enforce enterprise security postures, cryptographic verification, compliance governance, and audit trails.',
          topics: ['Zero Trust Architecture', 'Cryptographic Proofs', 'Compliance (SOC2 / ISO)', 'Threat Modeling', 'Disaster Recovery Protocols'],
          project: {
            title: 'Enterprise Security & Audit Isolation Vault',
            desc: 'Design an isolated security enforcement layer with automated tamper detection and cryptographic hashing.'
          },
          resources: [
            { name: 'NIST Security Framework', url: 'https://www.nist.gov/cyberframework' }
          ],
          baseHours: 24
        },
        {
          phase: 'Phase 4',
          title: `Platform Engineering & Cloud Infrastructure as Code`,
          description: 'Orchestrate infrastructure via Terraform, Kubernetes, automated progressive rollouts, and self-healing clusters.',
          topics: ['Infrastructure as Code (IaC)', 'Kubernetes Orchestration', 'Canary & Blue/Green Deploys', 'Observability (Prometheus/Grafana)', 'Chaos Engineering'],
          project: {
            title: 'Self-Healing Cloud Platform with Automated Chaos Tests',
            desc: 'Deploy automated infrastructure with chaos engineering experiments verifying 99.99% availability.'
          },
          resources: [
            { name: 'Cloud Native Computing Foundation (CNCF)', url: 'https://www.cncf.io/' }
          ],
          baseHours: 26
        },
        {
          phase: 'Phase 5',
          title: `Capstone: Enterprise Strategic Platform Blueprint`,
          description: `Deliver a mission-critical platform architecture with live demonstration, whitepaper documentation, and executive pitch.`,
          topics: ['Enterprise Strategy', 'Technical Whitepaper', 'Scalability Projections', 'Executive Architecture Review', 'Global Rollout Plan'],
          project: {
            title: `Global Scalable Enterprise Ecosystem in ${capitalizedSkill}`,
            desc: 'Deliver an executive-level platform with multi-region failover, complete RFC documentation, and live benchmarks.'
          },
          resources: [
            { name: 'High Scalability Architecture Library', url: 'http://highscalability.com/' }
          ],
          baseHours: 32
        }
      ];
    }
  }

  // Helper to retrieve roadmap data
  function getCurriculum(skillName, level) {
    const normalized = skillName.trim().toLowerCase();
    
    // Check known keys
    for (const key of Object.keys(CURRICULUM_DATABASE)) {
      if (normalized.includes(key) || key.includes(normalized)) {
        const item = CURRICULUM_DATABASE[key];
        const steps = item.curriculum[level] || item.curriculum['Beginner'];
        return {
          title: item.title,
          steps: JSON.parse(JSON.stringify(steps))
        };
      }
    }

    // Fallback: dynamic generator
    const steps = generateDynamicCurriculum(skillName, level);
    return {
      title: `${skillName.trim()} Mastery`,
      steps: steps
    };
  }

  // ==========================================================================
  // 2. DOM Elements Selection
  // ==========================================================================

  const generatorForm = document.getElementById('generatorForm');
  const targetSkillInput = document.getElementById('targetSkillInput');
  const timeRangeInput = document.getElementById('timeRangeInput');
  const hoursDisplay = document.getElementById('hoursDisplay');
  const timeChipButtons = document.querySelectorAll('.btn-time-chip');
  const skillPills = document.querySelectorAll('.skill-pill');
  const levelCards = document.querySelectorAll('.level-card');
  const generateBtn = document.getElementById('generateBtn');
  const btnText = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');

  // Navigation & Export Buttons
  const quickDemoBtn = document.getElementById('quickDemoBtn');
  const printPdfBtn = document.getElementById('printPdfBtn');
  const shareModalBtn = document.getElementById('shareModalBtn');
  const emptyDemoBtn = document.getElementById('emptyDemoBtn');

  // Sticky Progress Bar
  const stickyProgressTracker = document.getElementById('stickyProgressTracker');
  const trackerSkillName = document.getElementById('trackerSkillName');
  const trackerMeta = document.getElementById('trackerMeta');
  const trackerStepCount = document.getElementById('trackerStepCount');
  const trackerPercentBadge = document.getElementById('trackerPercentBadge');
  const trackerProgressBar = document.getElementById('trackerProgressBar');

  // Roadmap Display Elements
  const emptyRoadmapState = document.getElementById('emptyRoadmapState');
  const activeRoadmapContent = document.getElementById('activeRoadmapContent');
  const roadmapSkillTitle = document.getElementById('roadmapSkillTitle');
  const roadmapKicker = document.getElementById('roadmapKicker');
  const metricLevel = document.getElementById('metricLevel');
  const metricDuration = document.getElementById('metricDuration');
  const metricHours = document.getElementById('metricHours');
  const metricModules = document.getElementById('metricModules');
  const cardProgressText = document.getElementById('cardProgressText');
  const cardProgressBar = document.getElementById('cardProgressBar');
  const timelineNodesList = document.getElementById('timelineNodesList');
  const resetProgressBtn = document.getElementById('resetProgressBtn');
  const finishShareBtn = document.getElementById('finishShareBtn');

  // Share Modal Elements
  const shareModal = document.getElementById('shareModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const sharePostText = document.getElementById('sharePostText');
  const copyShareTextBtn = document.getElementById('copyShareTextBtn');
  const openLinkedInBtn = document.getElementById('openLinkedInBtn');
  const copySuccessAlert = document.getElementById('copySuccessAlert');

  // Toast & Confetti
  const toastContainer = document.getElementById('toastContainer');
  const confettiCanvas = document.getElementById('confettiCanvas');

  // Application State
  let currentRoadmap = null;
  let completedSteps = new Set();

  // ==========================================================================
  // 3. Form Controls & Event Handlers
  // ==========================================================================

  // Time Slider Interaction
  timeRangeInput.addEventListener('input', (e) => {
    const val = e.target.value;
    hoursDisplay.textContent = val;
    syncTimeChips(val);
  });

  function syncTimeChips(hours) {
    timeChipButtons.forEach(btn => {
      if (btn.dataset.hours === hours.toString()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  timeChipButtons.forEach(chip => {
    chip.addEventListener('click', () => {
      const hours = chip.dataset.hours;
      timeRangeInput.value = hours;
      hoursDisplay.textContent = hours;
      syncTimeChips(hours);
    });
  });

  // Level Card Selector (Radio style)
  levelCards.forEach(card => {
    card.addEventListener('click', () => {
      levelCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Quick Skill Pill Selector
  skillPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const skill = pill.dataset.skill;
      targetSkillInput.value = skill;
      targetSkillInput.focus();

      skillPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  targetSkillInput.addEventListener('input', () => {
    skillPills.forEach(p => {
      if (p.dataset.skill.toLowerCase() === targetSkillInput.value.toLowerCase()) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  });

  // Get selected level
  function getSelectedLevel() {
    const checked = document.querySelector('input[name="experienceLevel"]:checked');
    return checked ? checked.value : 'Beginner';
  }

  // ==========================================================================
  // 4. Roadmap Generation Engine
  // ==========================================================================

  generatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const skill = targetSkillInput.value.trim();
    if (!skill) {
      showToast('Please enter a target skill or pick a suggestion!', 'error');
      targetSkillInput.focus();
      return;
    }

    const level = getSelectedLevel();
    const hoursPerWeek = parseInt(timeRangeInput.value, 10) || 10;
    const focus = document.getElementById('learningFocusSelect').value;

    triggerGeneration(skill, level, hoursPerWeek, focus);
  });

  function triggerGeneration(skill, level, hoursPerWeek, focus) {
    // Show loading state
    generateBtn.disabled = true;
    btnSpinner.classList.remove('hidden');
    btnText.textContent = 'Generating Roadmap...';

    setTimeout(() => {
      buildRoadmap(skill, level, hoursPerWeek, focus);

      // Restore button
      generateBtn.disabled = false;
      btnSpinner.classList.add('hidden');
      btnText.textContent = 'Generate Roadmap';

      showToast(`🎉 Roadmap generated for ${skill}!`, 'success');
    }, 450);
  }

  function buildRoadmap(skill, level, hoursPerWeek, focus) {
    const rawData = getCurriculum(skill, level);
    const steps = rawData.steps;

    // Calculate realistic time estimation per phase based on weekly hours
    let totalEstimatedHours = 0;
    steps.forEach((step, idx) => {
      // Adjust base hours according to level
      let stepHours = step.baseHours || 20;
      if (level === 'Intermediate') stepHours = Math.round(stepHours * 1.15);
      if (level === 'Advanced') stepHours = Math.round(stepHours * 1.35);

      step.allocatedHours = stepHours;
      totalEstimatedHours += stepHours;

      // Calculate weeks for this step
      const stepWeeks = Math.max(1, Math.round((stepHours / hoursPerWeek) * 10) / 10);
      step.allocatedWeeks = stepWeeks;
    });

    const totalWeeks = Math.max(1, Math.ceil(totalEstimatedHours / hoursPerWeek));

    currentRoadmap = {
      skillName: skill,
      fullTitle: rawData.title,
      level: level,
      hoursPerWeek: hoursPerWeek,
      focus: focus,
      totalHours: totalEstimatedHours,
      totalWeeks: totalWeeks,
      steps: steps
    };

    // Reset completed steps for new generation
    completedSteps.clear();

    // Render to DOM
    renderRoadmapView();

    // Enable Export and Share Buttons
    printPdfBtn.disabled = false;
    shareModalBtn.disabled = false;

    // Save to localStorage for persistence
    saveStateToStorage();

    // Smooth scroll to roadmap container on mobile
    if (window.innerWidth < 1040) {
      document.getElementById('roadmapContainer').scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ==========================================================================
  // 5. Render Roadmap View & Timeline Nodes
  // ==========================================================================

  function renderRoadmapView() {
    if (!currentRoadmap) return;

    emptyRoadmapState.classList.add('hidden');
    activeRoadmapContent.classList.remove('hidden');
    stickyProgressTracker.classList.remove('hidden');

    // Update Header Metadata
    roadmapSkillTitle.textContent = currentRoadmap.fullTitle;
    roadmapKicker.textContent = `${currentRoadmap.level} Level Roadmap`;
    metricLevel.textContent = currentRoadmap.level;
    metricDuration.textContent = `${currentRoadmap.totalWeeks} Weeks`;
    metricHours.textContent = `${currentRoadmap.totalHours} Hours`;
    metricModules.textContent = `${currentRoadmap.steps.length} Phases`;

    // Update Sticky Tracker Info
    trackerSkillName.textContent = currentRoadmap.skillName;
    trackerMeta.textContent = `${currentRoadmap.level} • ${currentRoadmap.hoursPerWeek}h/wk`;

    // Render Timeline Nodes
    timelineNodesList.innerHTML = '';
    currentRoadmap.steps.forEach((step, index) => {
      const nodeEl = createTimelineNodeElement(step, index);
      timelineNodesList.appendChild(nodeEl);
    });

    updateProgressUI();
  }

  function createTimelineNodeElement(step, index) {
    const isCompleted = completedSteps.has(index);
    const node = document.createElement('div');
    node.className = `timeline-node ${isCompleted ? 'completed' : ''}`;
    node.id = `node-phase-${index}`;

    // Format week duration string
    const weekStr = step.allocatedWeeks === 1 ? '1 Week' : `${step.allocatedWeeks} Weeks`;

    // Topics HTML
    const topicsHtml = (step.topics || []).map(t => `<span class="topic-tag">${escapeHtml(t)}</span>`).join('');

    // Resources HTML
    const resourcesHtml = (step.resources || []).map(r => `
      <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer" class="resource-link">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        ${escapeHtml(r.name)}
      </a>
    `).join('');

    node.innerHTML = `
      <div class="node-marker-wrap">
        <div class="node-number-badge">
          ${isCompleted ? '✓' : index + 1}
        </div>
        <label class="node-checkbox-label" title="Mark this phase complete">
          <input type="checkbox" class="node-checkbox" data-index="${index}" ${isCompleted ? 'checked' : ''}>
          <span class="custom-checkbox">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </label>
      </div>

      <div class="node-card">
        <div class="node-card-header">
          <div>
            <div class="node-badge-row">
              <span class="node-phase-tag">${escapeHtml(step.phase)}</span>
              <span class="node-time-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                ${weekStr} • ${step.allocatedHours} Hours
              </span>
            </div>
            <h3 class="node-title">${escapeHtml(step.title)}</h3>
          </div>
        </div>

        <p class="node-description">${escapeHtml(step.description)}</p>

        <div class="node-topics-group">
          <span class="topics-label">Key Competencies & Modules:</span>
          <div class="topic-tags-list">
            ${topicsHtml}
          </div>
        </div>

        ${step.project ? `
          <div class="node-project-box">
            <div class="project-box-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <span>Milestone Project</span>
            </div>
            <div class="project-title">${escapeHtml(step.project.title)}</div>
            <div class="project-desc">${escapeHtml(step.project.desc)}</div>
          </div>
        ` : ''}

        ${resourcesHtml ? `
          <div class="node-resources-list">
            <span class="resources-label">Resources:</span>
            ${resourcesHtml}
          </div>
        ` : ''}
      </div>
    `;

    // Checkbox Event Listener
    const checkbox = node.querySelector('.node-checkbox');
    checkbox.addEventListener('change', (e) => {
      toggleStepCompletion(index, e.target.checked);
    });

    return node;
  }

  // ==========================================================================
  // 6. Interactive Progress & Completion Logic
  // ==========================================================================

  function toggleStepCompletion(index, isChecked) {
    const nodeEl = document.getElementById(`node-phase-${index}`);
    const badgeEl = nodeEl ? nodeEl.querySelector('.node-number-badge') : null;

    if (isChecked) {
      completedSteps.add(index);
      if (nodeEl) nodeEl.classList.add('completed');
      if (badgeEl) badgeEl.textContent = '✓';

      const phaseName = currentRoadmap.steps[index].phase || `Phase ${index + 1}`;
      showToast(`✨ Completed ${phaseName}! Outstanding progress!`, 'success');
    } else {
      completedSteps.delete(index);
      if (nodeEl) nodeEl.classList.remove('completed');
      if (badgeEl) badgeEl.textContent = index + 1;
    }

    updateProgressUI();
    saveStateToStorage();

    // Check if 100% completed!
    if (currentRoadmap && completedSteps.size === currentRoadmap.steps.length) {
      celebrateCompletion();
    }
  }

  function updateProgressUI() {
    if (!currentRoadmap) return;

    const total = currentRoadmap.steps.length;
    const count = completedSteps.size;
    const percentage = Math.round((count / total) * 100);

    // In-Card Progress Bar
    cardProgressText.textContent = `${count} of ${total} Completed (${percentage}%)`;
    cardProgressBar.style.width = `${percentage}%`;

    // Top Sticky Tracker
    trackerStepCount.textContent = `${count} of ${total} steps completed`;
    trackerPercentBadge.textContent = `${percentage}%`;
    trackerProgressBar.style.width = `${percentage}%`;

    if (percentage === 100) {
      cardProgressBar.classList.add('completed-all');
      trackerProgressBar.classList.add('completed-all');
      trackerPercentBadge.textContent = '100% 🏆';
    } else {
      cardProgressBar.classList.remove('completed-all');
      trackerProgressBar.classList.remove('completed-all');
    }
  }

  // Reset Progress Button
  resetProgressBtn.addEventListener('click', () => {
    if (completedSteps.size === 0) {
      showToast('Progress is already reset.', 'info');
      return;
    }

    if (confirm('Reset all completed milestones for this roadmap?')) {
      completedSteps.clear();
      renderRoadmapView();
      saveStateToStorage();
      showToast('Progress reset to 0%. Ready for a fresh run!', 'info');
    }
  });

  // ==========================================================================
  // 7. Confetti Celebration Engine (100% Completion)
  // ==========================================================================

  function celebrateCompletion() {
    showToast('🏆 CONGRATULATIONS! You completed 100% of your roadmap!', 'success');
    runConfettiAnimation();
  }

  function runConfettiAnimation() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#2563eb', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#ffffff'];

    for (let i = 0; i < 140; i++) {
      particles.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        w: Math.random() * 10 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        velY: Math.random() * 4 + 3,
        velX: Math.random() * 4 - 2,
        rot: Math.random() * 360,
        rotSpeed: Math.random() * 8 - 4
      });
    }

    let animationFrameId;
    let frameCount = 0;

    function renderConfetti() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      frameCount++;

      particles.forEach(p => {
        p.y += p.velY;
        p.x += p.velX;
        p.rot += p.rotSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (frameCount < 160) {
        animationFrameId = requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        cancelAnimationFrame(animationFrameId);
      }
    }

    renderConfetti();
  }

  // ==========================================================================
  // 8. Export to PDF & LinkedIn Share Modal
  // ==========================================================================

  // PDF Export
  printPdfBtn.addEventListener('click', () => {
    if (!currentRoadmap) {
      showToast('Please generate a roadmap first!', 'error');
      return;
    }
    window.print();
  });

  // ==========================================================================
  // 8. Export to PDF & LinkedIn Share Modal with Live GitHub Pages URL
  // ==========================================================================

  const GITHUB_PAGES_LIVE_URL = 'https://upparakavyacharitha22-hue.github.io/learning-path-generator/';

  // PDF Export
  printPdfBtn.addEventListener('click', () => {
    if (!currentRoadmap) {
      showToast('Please generate a roadmap first!', 'error');
      return;
    }
    window.print();
  });

  // Share Modal Logic
  shareModalBtn.addEventListener('click', openShareModal);
  finishShareBtn.addEventListener('click', openShareModal);

  function openShareModal() {
    if (!currentRoadmap) {
      showToast('Generate a roadmap first to share your plan!', 'error');
      return;
    }

    // Generate formatted LinkedIn post text
    const completedCount = completedSteps.size;
    const totalCount = currentRoadmap.steps.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    const postDraft = 
`🚀 Excited to share my personalized learning roadmap for ${currentRoadmap.skillName}!

🎯 Skill Goal: ${currentRoadmap.fullTitle}
📊 Level: ${currentRoadmap.level}
⏱️ Weekly Commitment: ${currentRoadmap.hoursPerWeek} hrs/week
⏳ Total Duration: ${currentRoadmap.totalWeeks} Weeks (~${currentRoadmap.totalHours} hours)
📈 Current Progress: ${completedCount}/${totalCount} Phases Completed (${progressPercent}%)

Key Milestone Phases:
${currentRoadmap.steps.map((s, i) => `${i + 1}. ${s.title} (${s.allocatedHours} hrs)`).join('\n')}

🔗 Try out the live interactive Roadmap Generator here:
${GITHUB_PAGES_LIVE_URL}

Excited to keep building and leveling up! Continuous learning is the best investment. 💡

#ContinuousLearning #${currentRoadmap.skillName.replace(/[^a-zA-Z0-9]/g, '')} #CareerGrowth #TechEducation #LearningPath`;

    sharePostText.value = postDraft;
    copySuccessAlert.classList.add('hidden');
    shareModal.classList.remove('hidden');
    sharePostText.focus();
  }

  function closeShareModal() {
    shareModal.classList.add('hidden');
  }

  closeModalBtn.addEventListener('click', closeShareModal);
  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) closeShareModal();
  });

  // Copy Live URL Button in Share Modal
  const copyLiveUrlBtn = document.getElementById('copyLiveUrlBtn');
  if (copyLiveUrlBtn) {
    copyLiveUrlBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(GITHUB_PAGES_LIVE_URL);
        showToast('🌐 Live GitHub Pages URL copied to clipboard!', 'success');
      } catch (e) {
        showToast('Link copied: ' + GITHUB_PAGES_LIVE_URL, 'info');
      }
    });
  }

  // Copy Post Text to Clipboard
  copyShareTextBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(sharePostText.value);
      copySuccessAlert.classList.remove('hidden');
      showToast('📋 Post draft & live link copied to clipboard!', 'success');
      setTimeout(() => {
        copySuccessAlert.classList.add('hidden');
      }, 4000);
    } catch (err) {
      sharePostText.select();
      document.execCommand('copy');
      copySuccessAlert.classList.remove('hidden');
      showToast('📋 Copied to clipboard!', 'success');
    }
  });

  // Open LinkedIn Web Intent with Live URL & Post Text
  openLinkedInBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(sharePostText.value).catch(() => {});
    
    // LinkedIn share URL with article URL and prefilled text
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(sharePostText.value)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    showToast('🚀 Opened LinkedIn! Your text & link are copied to clipboard.', 'success');
  });

  // ==========================================================================
  // 9. User Authentication & Profile State Management
  // ==========================================================================

  const AUTH_STORAGE_KEY = 'skillcraft_auth_user_v1';
  const openAuthBtn = document.getElementById('openAuthBtn');
  const userProfileBadge = document.getElementById('userProfileBadge');
  const userAvatar = document.getElementById('userAvatar');
  const userDisplayName = document.getElementById('userDisplayName');
  const signOutBtn = document.getElementById('signOutBtn');
  const authModal = document.getElementById('authModal');
  const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const fullNameGroup = document.getElementById('fullNameGroup');
  const authSubmitBtn = document.getElementById('authSubmitBtn');
  const authForm = document.getElementById('authForm');
  const demoUserLoginBtn = document.getElementById('demoUserLoginBtn');
  const googleAuthBtn = document.getElementById('googleAuthBtn');
  const githubAuthBtn = document.getElementById('githubAuthBtn');
  const heroSubtitle = document.getElementById('heroSubtitle');

  let currentUser = null;
  let isRegisterTab = false;

  function initAuth() {
    const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
    if (savedUser) {
      try {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
      } catch (e) {
        currentUser = null;
      }
    }
  }

  function updateUserUI() {
    if (currentUser) {
      openAuthBtn.classList.add('hidden');
      userProfileBadge.classList.remove('hidden');
      userDisplayName.textContent = currentUser.name.split(' ')[0] || 'Kavya';
      
      const initials = currentUser.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'KC';
      userAvatar.textContent = initials;

      if (heroSubtitle) {
        heroSubtitle.innerHTML = `Welcome back, <strong>${escapeHtml(currentUser.name)}</strong>! Track your milestones in real time and showcase your journey on LinkedIn.`;
      }
    } else {
      openAuthBtn.classList.remove('hidden');
      userProfileBadge.classList.add('hidden');
      if (heroSubtitle) {
        heroSubtitle.textContent = 'Generate a custom learning roadmap tailored to your current knowledge level and weekly availability. Track your milestones in real time and showcase your journey.';
      }
    }
  }

  function setAuthenticatedUser(name, email) {
    currentUser = { name, email, loggedInAt: new Date().toISOString() };
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser));
    } catch (e) {}
    updateUserUI();
    closeAuthModal();
    showToast(`👋 Welcome, ${currentUser.name}! Signed in successfully.`, 'success');
  }

  function signOut() {
    currentUser = null;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    updateUserUI();
    showToast('Signed out of SkillCraft.', 'info');
  }

  function openAuthModal() {
    authModal.classList.remove('hidden');
  }

  function closeAuthModal() {
    authModal.classList.add('hidden');
  }

  // Event Listeners for Auth
  if (openAuthBtn) openAuthBtn.addEventListener('click', openAuthModal);
  if (closeAuthModalBtn) closeAuthModalBtn.addEventListener('click', closeAuthModal);
  if (signOutBtn) signOutBtn.addEventListener('click', signOut);

  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  // Switch between Sign In and Register Tabs
  tabSignInBtn.addEventListener('click', () => {
    isRegisterTab = false;
    tabSignInBtn.classList.add('active');
    tabRegisterBtn.classList.remove('active');
    fullNameGroup.style.display = 'none';
    authSubmitBtn.textContent = 'Sign In to Account';
  });

  tabRegisterBtn.addEventListener('click', () => {
    isRegisterTab = true;
    tabRegisterBtn.classList.add('active');
    tabSignInBtn.classList.remove('active');
    fullNameGroup.style.display = 'flex';
    authSubmitBtn.textContent = 'Create SkillCraft Account';
  });

  // 1-Click Workshop Demo Sign In
  demoUserLoginBtn.addEventListener('click', () => {
    setAuthenticatedUser('Kavya Charitha', 'kavya@learningpaths.dev');
  });

  // Social Auth Simulation
  googleAuthBtn.addEventListener('click', () => {
    setAuthenticatedUser('Kavya Charitha', 'kavya.google@gmail.com');
  });

  githubAuthBtn.addEventListener('click', () => {
    setAuthenticatedUser('upparakavyacharitha22-hue', 'ulakshminarayana1967@gmail.com');
  });

  // Form Submit Login
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmailInput').value.trim();
    let name = 'Kavya Charitha';
    if (isRegisterTab) {
      const nameInput = document.getElementById('authNameInput').value.trim();
      if (nameInput) name = nameInput;
    }
    setAuthenticatedUser(name, email);
  });

  // ==========================================================================
  // 10. Quick Demo & Persistence
  // ==========================================================================

  function loadDemoPath() {
    targetSkillInput.value = 'Python Programming';
    skillPills.forEach(p => {
      if (p.dataset.skill === 'Python Programming') p.classList.add('active');
      else p.classList.remove('active');
    });

    levelCards.forEach(c => {
      if (c.dataset.level === 'Beginner') {
        c.classList.add('active');
        c.querySelector('input').checked = true;
      } else {
        c.classList.remove('active');
      }
    });

    timeRangeInput.value = 10;
    hoursDisplay.textContent = '10';
    syncTimeChips(10);

    triggerGeneration('Python Programming', 'Beginner', 10, 'project-based');
  }

  quickDemoBtn.addEventListener('click', loadDemoPath);
  emptyDemoBtn.addEventListener('click', loadDemoPath);

  // Storage Key
  const STORAGE_KEY = 'skillcraft_roadmap_state_v1';

  function saveStateToStorage() {
    if (!currentRoadmap) return;
    const payload = {
      roadmap: currentRoadmap,
      completedIndices: Array.from(completedSteps)
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      // Ignore quota errors
    }
  }

  function loadStateFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.roadmap && Array.isArray(parsed.roadmap.steps)) {
          currentRoadmap = parsed.roadmap;
          completedSteps = new Set(parsed.completedIndices || []);

          targetSkillInput.value = currentRoadmap.skillName;
          timeRangeInput.value = currentRoadmap.hoursPerWeek;
          hoursDisplay.textContent = currentRoadmap.hoursPerWeek;
          syncTimeChips(currentRoadmap.hoursPerWeek);

          levelCards.forEach(c => {
            if (c.dataset.level === currentRoadmap.level) {
              c.classList.add('active');
              c.querySelector('input').checked = true;
            } else {
              c.classList.remove('active');
            }
          });

          renderRoadmapView();
          printPdfBtn.disabled = false;
          shareModalBtn.disabled = false;
          return true;
        }
      }
    } catch (e) {
      // Storage parsing failed, start fresh
    }
    return false;
  }

  // ==========================================================================
  // 11. Utility Functions: Toast & HTML Escaping
  // ==========================================================================

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    `;

    if (type === 'success') {
      iconSvg = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    }

    toast.innerHTML = `${iconSvg} <span>${escapeHtml(message)}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 250ms forwards';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Boot: Check storage, auth, and load demo
  initAuth();
  const hasLoaded = loadStateFromStorage();
  if (!hasLoaded) {
    loadDemoPath();
  }
});
