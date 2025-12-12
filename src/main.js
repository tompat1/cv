import './styles.css';

const THEME_KEY = 'tr-theme';
const LANGUAGE_KEY = 'tr-language';
const personas = [
  {
    title: 'Digital Design & UX',
    slug: 'digital-design-ux',
    palette: {
      accent: '#e15b9e',
      accentStrong: '#d14888',
      accentSoft: 'rgba(225, 91, 158, 0.16)',
      accentSurface: 'rgba(225, 91, 158, 0.12)',
      accentBorder: 'rgba(225, 91, 158, 0.4)',
    },
    icon: '/assets/product-designer.svg',
    iconAlt: 'Geometric icon for a digital product designer',
    heroCopy: {
      eyebrow: 'Consultant & designer for web and digital products',
      heading: 'Designing intuitive experiences for',
      highlight: 'modern products & services.',
      lead:
        'I bring 30+ years across IT, digital design, and product to move ideas from discovery through validated prototypes into developer-ready design systems.',
      stats: [
        { value: '30+ yrs', label: 'Consulting across IT & design' },
        { value: '12 yrs', label: 'Digital product & UX focus' },
        { value: '200+', label: 'Flows prototyped & tested' },
      ],
      focus: [
        'I design intuitive product flows, validate with users, and deliver Figma systems ready for dev handoff.',
        'Hands-on research loops, from interviews to moderated tests, keep usability grounded in real feedback.',
        'Design systems, UI kits, and accessibility baked into every component for smoother builds.',
      ],
      actions: [
        { label: 'See recent assignments', href: '#work', variant: 'primary' },
        { label: 'Get in touch', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'News / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Product discovery, UX, and redesign for a digital news platform with TypeScript, RESTful APIs, and graph visualizations.',
        tags: ['User flows & prototypes', 'Design systems', 'React / Next.js'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Research-led UX direction for environmental reporting tools, interactive maps, and complex forms.',
        tags: ['Accessibility', 'Data-driven UX', 'Stakeholder workshops'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
      {
        badge: 'Banking',
        year: '2014',
        title: 'Bankgirocentralen',
        description:
          'Flow design and responsive UI for online bank applications and dashboards across multiple business lines.',
        tags: ['Responsive UX', 'Design leadership', 'Agile delivery'],
        linkLabel: 'Engagement highlights ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Product discovery',
        description:
          'Shape journeys with research, interviews, and co-creation that clarify user intent and business value.',
        bullets: ['Problem framing & workshops', 'User interviews & synthesis', 'Personas, jobs-to-be-done, service maps'],
      },
      {
        title: 'UX & product design',
        description:
          'Prototype flows, validate them with users, and refine the details until they are ready for build.',
        bullets: ['Flows, wires, and high-fidelity UI', 'Usability tests & iteration', 'Microcopy & interaction design'],
      },
      {
        title: 'Design systems',
        description:
          'Deliver accessible, reusable components with Figma libraries and implementation notes for dev teams.',
        bullets: ['Foundations & tokens', 'UI kits with states', 'Handoff specs & documentation'],
      },
    ],
    testimonial: {
      quote:
        'Combining the demands of digital design, front-end, and product thinking—paired with my sensibilities as a graphic designer.',
      name: 'Personal motto',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready to ship a validated experience?',
      body:
        'Bring me in for discovery, UX leadership, or design system delivery. We will test, refine, and hand off a build-ready solution.',
      button: { label: 'Start a UX project', href: '#contact' },
    },
  },
  {
    title: 'Branding & Content',
    slug: 'branding-content',
    palette: {
      accent: '#7157ff',
      accentStrong: '#5a3df3',
      accentSoft: 'rgba(113, 87, 255, 0.16)',
      accentSurface: 'rgba(113, 87, 255, 0.12)',
      accentBorder: 'rgba(113, 87, 255, 0.4)',
    },
    icon: '/assets/design-systems.svg',
    iconAlt: 'Geometric icon for brand and content strategy',
    heroCopy: {
      eyebrow: 'Brand and content leader for product teams',
      heading: 'Building cohesive stories through',
      highlight: 'identity, messaging, and content.',
      lead:
        'I create brand systems, messaging frameworks, and content plans that keep every touchpoint consistent while supporting product goals.',
      stats: [
        { value: '25+', label: 'Brands refreshed or launched' },
        { value: '6', label: 'Languages coordinated for content ops' },
        { value: '12 yrs', label: 'Storytelling for digital products' },
      ],
      focus: [
        'I craft cohesive visual identities, messaging frameworks, and content that keeps your voice consistent.',
        'Style guides, design tokens, and brand toolkits that scale from decks to product UI.',
        'Editorial calendars, long- and short-form copy, and governance to keep teams aligned.',
      ],
      actions: [
        { label: 'See recent assignments', href: '#work', variant: 'primary' },
        { label: 'Get in touch', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'Finance',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'Brand and content direction for multilingual platforms, dashboards, and campaigns across 23 languages.',
        tags: ['Messaging frameworks', 'Design direction', 'Localization ops'],
        linkLabel: 'See project notes ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Identity refresh and content strategy for environmental reporting tools and public-facing communications.',
        tags: ['Brand systems', 'Editorial voice', 'Accessibility'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
      {
        badge: 'News / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Narrative and UI content for subscription funnels, dashboards, and data-heavy visualizations.',
        tags: ['Narrative design', 'Content design', 'Conversion copy'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Identity systems',
        description:
          'Define the visual language, from logos to UI styling, with scalable guidelines that teams can ship with.',
        bullets: ['Visual identity refresh', 'Design tokens & UI styling', 'Brand toolkits & templates'],
      },
      {
        title: 'Messaging frameworks',
        description:
          'Clarify positioning, value props, and proof points so every channel speaks in one voice.',
        bullets: ['Positioning & story pillars', 'Product messaging hierarchy', 'Tone & voice playbooks'],
      },
      {
        title: 'Content & ops',
        description:
          'Plan and deliver content that stays on-brand—from landing pages to lifecycle campaigns.',
        bullets: ['Editorial calendars', 'Localization & governance', 'Content design for product UI'],
      },
    ],
    testimonial: {
      quote:
        'A cohesive brand voice across product, marketing, and support makes every experience feel intentional.',
      name: 'Guiding principle',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready for a consistent brand voice?',
      body:
        'Let us craft the identity, messaging, and content frameworks that keep your product recognizable everywhere.',
      button: { label: 'Plan a brand sprint', href: '#contact' },
    },
  },
  {
    title: 'Web Development',
    slug: 'web-development',
    palette: {
      accent: '#20b0b5',
      accentStrong: '#1a8f93',
      accentSoft: 'rgba(32, 176, 181, 0.16)',
      accentSurface: 'rgba(32, 176, 181, 0.12)',
      accentBorder: 'rgba(32, 176, 181, 0.42)',
    },
    icon: '/assets/ux-engineer.svg',
    iconAlt: 'Geometric icon for a web developer',
    heroCopy: {
      eyebrow: 'Front-end engineer & UX technologist',
      heading: 'Building performant, maintainable sites with',
      highlight: 'modern tooling and best practices.',
      lead:
        'From design handoff to deployment, I ship reliable front-end systems with clean architecture, accessibility, and analytics baked in.',
      stats: [
        { value: '50+', label: 'Sites & apps launched' },
        { value: '8', label: 'Design systems engineered' },
        { value: '99.9%', label: 'Uptime on recent launches' },
      ],
      focus: [
        'I build performant, maintainable sites with modern tooling, from design handoff to deployment.',
        'Front-end architecture in React/Next.js with component libraries mapped to design systems.',
        'CI/CD, performance budgets, and analytics instrumentation to keep releases predictable.',
      ],
      actions: [
        { label: 'See recent assignments', href: '#work', variant: 'primary' },
        { label: 'Get in touch', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'News / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Front-end development for a high-traffic news platform with TypeScript, RESTful APIs, and graph visualizations.',
        tags: ['React & Next.js', 'API integrations', 'Performance tuning'],
        linkLabel: 'Assignment overview ->',
        href: '#',
      },
      {
        badge: 'Finance',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'Front-end delivery for multilingual platforms, dashboards, and campaign pages across 23 languages.',
        tags: ['Front-end build', 'Localization', 'Design-system mapping'],
        linkLabel: 'See project notes ->',
        href: '#',
      },
      {
        badge: 'Gov & Sustainability',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Accessibility-focused front-end for environmental reporting tools, interactive maps, and complex forms.',
        tags: ['Accessibility', 'Data-rich UI', 'Mapping & visualization'],
        linkLabel: 'Read summary ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Front-end architecture',
        description:
          'Set up scalable foundations with modern frameworks, linting, testing, and component libraries.',
        bullets: ['React, Next.js, Vite', 'TypeScript & testing', 'Design system implementation'],
      },
      {
        title: 'UI implementation',
        description:
          'Translate Figma into responsive, accessible interfaces that perform across devices.',
        bullets: ['Semantic HTML & ARIA', 'Performance budgets', 'Animations & micro-interactions'],
      },
      {
        title: 'Delivery & ops',
        description:
          'Own the release chain with CI/CD, hosting, monitoring, and analytics wired from day one.',
        bullets: ['CI/CD & hosting', 'Error monitoring', 'Analytics & A/B testing'],
      },
    ],
    testimonial: {
      quote:
        'Robust delivery pairs clean front-end engineering with thoughtful UX details that make releases feel polished.',
      name: 'Delivery mantra',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Next step',
      heading: 'Ready to launch with confidence?',
      body:
        'Let us build and ship the front-end—from design handoff to production—complete with QA, analytics, and monitoring.',
      button: { label: 'Kick off a build', href: '#contact' },
    },
  },
];

const svPersonas = [
  {
    title: 'Digital design & UX',
    slug: 'digital-design-ux',
    palette: {
      accent: '#e15b9e',
      accentStrong: '#d14888',
      accentSoft: 'rgba(225, 91, 158, 0.16)',
      accentSurface: 'rgba(225, 91, 158, 0.12)',
      accentBorder: 'rgba(225, 91, 158, 0.4)',
    },
    icon: '/assets/product-designer.svg',
    iconAlt: 'Geometrisk ikon för en digital produktdesigner',
    heroCopy: {
      eyebrow: 'Konsult och designer för webb och digitala produkter',
      heading: 'Designar intuitiva upplevelser för',
      highlight: 'moderna produkter och tjänster.',
      lead:
        'Jag tar 30+ år inom IT, digital design och produkt från discovery till validerade prototyper och utvecklingsredo designsystem.',
      stats: [
        { value: '30+ år', label: 'Konsult inom IT & design' },
        { value: '12 år', label: 'Fokus på digital produkt & UX' },
        { value: '200+', label: 'Flöden prototypade & testade' },
      ],
      focus: [
        'Jag designar intuitiva produktflöden, validerar med användare och levererar Figma-system redo för utveckling.',
        'Praktiska forskningsloopar, från intervjuer till modererade tester, håller användbarheten förankrad i verklig feedback.',
        'Designsystem, UI-kit och tillgänglighet bakas in i varje komponent för smidigare byggnationer.',
      ],
      actions: [
        { label: 'Se senaste uppdrag', href: '#work', variant: 'primary' },
        { label: 'Ta kontakt', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'Nyheter / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Produktupptäck, UX och redesign för en digital nyhetsplattform med TypeScript, REST-API:er och grafvisualiseringar.',
        tags: ['Användarflöden & prototyper', 'Designsystem', 'React / Next.js'],
        linkLabel: 'Uppdragsöversikt ->',
        href: '#',
      },
      {
        badge: 'Myndighet & hållbarhet',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Forskningsdriven UX-inriktning för verktyg inom miljörapportering, interaktiva kartor och komplexa formulär.',
        tags: ['Tillgänglighet', 'Datadriven UX', 'Workshops med intressenter'],
        linkLabel: 'Läs sammanfattning ->',
        href: '#',
      },
      {
        badge: 'Bank',
        year: '2014',
        title: 'Bankgirocentralen',
        description:
          'Flödesdesign och responsiv UI för banktjänster och dashboards över flera affärsområden.',
        tags: ['Responsiv UX', 'Designledning', 'Agil leverans'],
        linkLabel: 'Höjdpunkter från uppdraget ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Produktupptäck',
        description:
          'Forma resor med research, intervjuer och samskapande som tydliggör användarintention och affärsvärde.',
        bullets: ['Problemformulering & workshops', 'Användarintervjuer & syntes', 'Personas, jobs-to-be-done, servicekartor'],
      },
      {
        title: 'UX- och produktdesign',
        description:
          'Prototypa flöden, validera dem med användare och slipa detaljerna tills de är redo för utveckling.',
        bullets: ['Flöden, wireframes och pixelperfekt UI', 'Användningstester & iteration', 'Mikrocopy och interaktioner'],
      },
      {
        title: 'Designsystem',
        description:
          'Leverera tillgängliga, återanvändbara komponenter med Figma-bibliotek och implementeringsnoter för dev-team.',
        bullets: ['Grunder & tokens', 'UI-kit med tillstånd', 'Handoff-specifikationer & dokumentation'],
      },
    ],
    testimonial: {
      quote:
        'Jag kombinerar kraven från digital design, frontend och produkt—parat med min känsla som grafisk designer.',
      name: 'Personligt motto',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Nästa steg',
      heading: 'Redo att skeppa en validerad upplevelse?',
      body:
        'Ta in mig för discovery, UX-ledning eller ett levererat designsystem. Vi testar, förfinar och lämnar över en byggklar lösning.',
      button: { label: 'Starta ett UX-projekt', href: '#contact' },
    },
  },
  {
    title: 'Branding & innehåll',
    slug: 'branding-content',
    palette: {
      accent: '#7157ff',
      accentStrong: '#5a3df3',
      accentSoft: 'rgba(113, 87, 255, 0.16)',
      accentSurface: 'rgba(113, 87, 255, 0.12)',
      accentBorder: 'rgba(113, 87, 255, 0.4)',
    },
    icon: '/assets/design-systems.svg',
    iconAlt: 'Geometrisk ikon för varumärkes- och innehållsstrategi',
    heroCopy: {
      eyebrow: 'Varumärkes- och innehållsledare för produktteam',
      heading: 'Bygger sammanhållna berättelser genom',
      highlight: 'identitet, budskap och innehåll.',
      lead:
        'Jag skapar varumärkessystem, budskapsramverk och innehållsplaner som håller varje touchpoint konsekvent och stärker produktmålen.',
      stats: [
        { value: '25+', label: 'Varumärken uppdaterade eller lanserade' },
        { value: '6', label: 'Språk koordinerade för content ops' },
        { value: '12 år', label: 'Storytelling för digitala produkter' },
      ],
      focus: [
        'Jag tar fram visuella identiteter, budskapsramverk och innehåll som håller rösten konsekvent.',
        'Stilguider, designtokens och varumärkeskit som skalar från pitchdecks till produkt-UI.',
        'Redaktionella kalendrar, korta och långa format samt governance som håller teamen synkade.',
      ],
      actions: [
        { label: 'Se senaste uppdrag', href: '#work', variant: 'primary' },
        { label: 'Ta kontakt', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'Finans',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'Varumärkes- och innehållsstrategi för flerspråkiga plattformar, dashboards och kampanjer på 23 språk.',
        tags: ['Budskapsramverk', 'Designdirektion', 'Lokalisering & processer'],
        linkLabel: 'Se projektanteckningar ->',
        href: '#',
      },
      {
        badge: 'Myndighet & hållbarhet',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Identitetsförnyelse och innehållsstrategi för miljörapporteringsverktyg och externa kommunikationer.',
        tags: ['Varumärkessystem', 'Redaktionell röst', 'Tillgänglighet'],
        linkLabel: 'Läs sammanfattning ->',
        href: '#',
      },
      {
        badge: 'Nyheter / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Berättelser och UI-innehåll för prenumerationsflöden, dashboards och dataintensiva visualiseringar.',
        tags: ['Narrative design', 'Innehållsdesign', 'Konverterande copy'],
        linkLabel: 'Uppdragsöversikt ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Identitetssystem',
        description:
          'Definiera det visuella språket, från logotyp till UI, med skalbara riktlinjer som team kan leverera med.',
        bullets: ['Visuell identitetsförnyelse', 'Designtokens & UI-styling', 'Varumärkeskit & mallar'],
      },
      {
        title: 'Budskapsramverk',
        description:
          'Tydliggör positionering, värdeerbjudanden och bevispunkter så att varje kanal talar med en röst.',
        bullets: ['Positionering & storypelare', 'Produktbudskapshierarki', 'Ton & röst-playbooks'],
      },
      {
        title: 'Innehåll & process',
        description:
          'Planera och leverera innehåll som håller sig till varumärket—from landningssidor till livscykelkampanjer.',
        bullets: ['Redaktionella kalendrar', 'Lokalisering & governance', 'Innehållsdesign för produkt-UI'],
      },
    ],
    testimonial: {
      quote: 'En sammanhållen varumärkesröst i produkt, marknad och support får varje upplevelse att kännas genomtänkt.',
      name: 'Vägledande princip',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Nästa steg',
      heading: 'Redo för en konsekvent varumärkesröst?',
      body:
        'Låt oss ta fram identiteten, budskapen och innehållsramarna som gör produkten igenkännbar överallt.',
      button: { label: 'Planera en varumärkesworkshop', href: '#contact' },
    },
  },
  {
    title: 'Webbutveckling',
    slug: 'web-development',
    palette: {
      accent: '#20b0b5',
      accentStrong: '#1a8f93',
      accentSoft: 'rgba(32, 176, 181, 0.16)',
      accentSurface: 'rgba(32, 176, 181, 0.12)',
      accentBorder: 'rgba(32, 176, 181, 0.42)',
    },
    icon: '/assets/ux-engineer.svg',
    iconAlt: 'Geometrisk ikon för en webbutvecklare',
    heroCopy: {
      eyebrow: 'Frontend-utvecklare & UX-teknolog',
      heading: 'Bygger presterande, underhållbara sajter med',
      highlight: 'modern verktygskedja och best practices.',
      lead:
        'Från design-handoff till produktion levererar jag tillförlitlig frontend med ren arkitektur, tillgänglighet och analys inbyggt.',
      stats: [
        { value: '50+', label: 'Sajter & appar lanserade' },
        { value: '8', label: 'Designsystem implementerade' },
        { value: '99,9%', label: 'Uptime på senaste lanseringar' },
      ],
      focus: [
        'Jag bygger snabba, underhållbara sajter med modern verktygskedja från handoff till deployment.',
        'Frontend-arkitektur i React/Next.js med komponentbibliotek kopplade till designsystem.',
        'CI/CD, prestandabudgetar och analys som gör releaser förutsägbara.',
      ],
      actions: [
        { label: 'Se senaste uppdrag', href: '#work', variant: 'primary' },
        { label: 'Ta kontakt', href: '#contact', variant: 'ghost' },
      ],
      portrait:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    },
    projects: [
      {
        badge: 'Nyheter / SaaS',
        year: '2016-2023',
        title: 'Rapidus',
        description:
          'Frontend-utveckling för en trafiktung nyhetsplattform med TypeScript, REST-API:er och grafvisualiseringar.',
        tags: ['React & Next.js', 'API-integrationer', 'Prestandaoptimering'],
        linkLabel: 'Uppdragsöversikt ->',
        href: '#',
      },
      {
        badge: 'Finans',
        year: '2016-2020',
        title: 'Intrum',
        description:
          'Frontend-leverans för flerspråkiga plattformar, dashboards och kampanjsidor på 23 språk.',
        tags: ['Frontendbygge', 'Lokalisering', 'Designsystemskoppling'],
        linkLabel: 'Se projektanteckningar ->',
        href: '#',
      },
      {
        badge: 'Myndighet & hållbarhet',
        year: '2015-2021',
        title: 'Naturvårdsverket',
        description:
          'Tillgänglighetsfokuserad frontend för miljörapporteringsverktyg, interaktiva kartor och komplexa formulär.',
        tags: ['Tillgänglighet', 'Datarik UI', 'Kartor & visualisering'],
        linkLabel: 'Läs sammanfattning ->',
        href: '#',
      },
    ],
    skills: [
      {
        title: 'Frontend-arkitektur',
        description:
          'Sätter upp skalbara grunder med moderna ramverk, lintning, testning och komponentbibliotek.',
        bullets: ['React, Next.js, Vite', 'TypeScript & testning', 'Implementering av designsystem'],
      },
      {
        title: 'UI-implementation',
        description:
          'Översätter Figma till responsiva, tillgängliga gränssnitt som presterar på alla enheter.',
        bullets: ['Semantisk HTML & ARIA', 'Prestandabudgetar', 'Animationer & mikrointeraktioner'],
      },
      {
        title: 'Leverans & process',
        description:
          'Äger releasekedjan med CI/CD, hosting, monitorering och analys från dag ett.',
        bullets: ['CI/CD & hosting', 'Felkoll & monitorering', 'Analys & A/B-testning'],
      },
    ],
    testimonial: {
      quote:
        'Robust leverans kombinerar ren frontend-engineering med genomtänkta UX-detaljer som gör lanseringar polerade.',
      name: 'Leveransmantra',
      title: 'Thomas Rynell',
    },
    cta: {
      eyebrow: 'Nästa steg',
      heading: 'Redo att lansera med självförtroende?',
      body:
        'Jag bygger och skeppar frontenden—från design-handoff till produktion—med QA, analys och monitorering på plats.',
      button: { label: 'Kickstarta en release', href: '#contact' },
    },
  },
];

const copy = {
  en: {
    personaSwitcher: 'Focus',
    nav: {
      links: ['Work', 'Services', 'Experience', 'Contact'],
      cta: "Let's work",
    },
    work: {
      eyebrow: 'Select Assignments',
      heading: 'Recent collaborations & outcomes.',
      cta: 'View PDF case studies',
    },
    services: {
      eyebrow: 'Capabilities',
      heading: 'Where I plug in.',
      summary: 'Embedded with founders, product leads, and multi-functional teams.',
    },
    experience: {
      eyebrow: 'Experience',
      heading: 'Consulting across IT, design, and product.',
      cta: 'Download full resume',
      timeline: [
        {
          heading: 'Rapidus · Front-end & UX',
          meta: '2016-2023 · Malmö',
          body:
            'Front-end development and redesign of a digital news platform using TypeScript, React/Next.js, RESTful APIs, graph databases, and advanced data visualization.',
        },
        {
          heading: 'Intrum · UX, Design Direction, Front-end',
          meta: '2016-2020 · Stockholm',
          body:
            'Led UX and front-end for multilingual platforms, dashboards, and campaign pages across 23 languages; collaborated closely with product, marketing, and engineering stakeholders.',
        },
        {
          heading: 'Naturvårdsverket · UX, Design Direction, Front-end',
          meta: '2015-2021 · Stockholm',
          body:
            'UX/design direction and front-end work for environmental reporting tools, interactive maps, and complex forms with accessibility and data quality in focus.',
        },
        {
          heading: 'Bankgirocentralen · Front-end & Graphic Design',
          meta: '2014 · Stockholm',
          body:
            'Front-end development, UX, and graphic design for online bank applications and dashboards across multiple lines of business.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      heading: 'Trusted by product leaders.',
    },
    footer: {
      heading: "Let's shape the next release.",
      body: 'Send a note to <a href="mailto:thomas@rynell.com">thomas@rynell.com</a> or connect on the platforms below.',
      cta: 'Start a project',
      socials: { linkedin: 'LinkedIn', portfolio: 'Portfolio', email: 'Email' },
      backToTop: 'Back to top ↑',
    },
  },
  sv: {
    personaSwitcher: 'Fokus',
    nav: {
      links: ['Arbete', 'Tjänster', 'Erfarenhet', 'Kontakt'],
      cta: 'Samarbeta',
    },
    work: {
      eyebrow: 'Utvalda uppdrag',
      heading: 'Aktuella samarbeten och resultat.',
      cta: 'Visa PDF-case',
    },
    services: {
      eyebrow: 'Förmågor',
      heading: 'Där jag kliver in.',
      summary: 'Inbakad i team med grundare, produktledare och tvärfunktionella roller.',
    },
    experience: {
      eyebrow: 'Erfarenhet',
      heading: 'Konsult inom IT, design och produkt.',
      cta: 'Ladda ner komplett CV',
      timeline: [
        {
          heading: 'Rapidus · Frontend & UX',
          meta: '2016-2023 · Malmö',
          body:
            'Frontend-utveckling och redesign av en digital nyhetsplattform med TypeScript, React/Next.js, REST-API:er, grafdatabaser och avancerad datavisualisering.',
        },
        {
          heading: 'Intrum · UX, designdirektion, frontend',
          meta: '2016-2020 · Stockholm',
          body:
            'Ledde UX och frontend för flerspråkiga plattformar, dashboards och kampanjsidor över 23 språk i nära samarbete med produkt, marknad och teknik.',
        },
        {
          heading: 'Naturvårdsverket · UX, designdirektion, frontend',
          meta: '2015-2021 · Stockholm',
          body:
            'UX/designledning och frontend-arbete för miljörapporteringsverktyg, interaktiva kartor och komplexa formulär med fokus på tillgänglighet och datakvalitet.',
        },
        {
          heading: 'Bankgirocentralen · Frontend & grafisk design',
          meta: '2014 · Stockholm',
          body:
            'Frontend-utveckling, UX och grafisk design för bankapplikationer och dashboards över flera affärsområden.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Omdömen',
      heading: 'Förtroende från produktledare.',
    },
    footer: {
      heading: 'Låt oss forma nästa release.',
      body: 'Hör av dig till <a href="mailto:thomas@rynell.com">thomas@rynell.com</a> eller connecta på plattformarna nedan.',
      cta: 'Starta ett projekt',
      socials: { linkedin: 'LinkedIn', portfolio: 'Portfolio', email: 'E-post' },
      backToTop: 'Till toppen ↑',
    },
  },
};

let locales = {
  en: { label: 'English', personas, copy: copy.en },
  sv: { label: 'Svenska', personas: svPersonas, copy: copy.sv },
};

const cloneDeep = (value) => JSON.parse(JSON.stringify(value));

const flattenTranslations = (value, path = []) => {
  if (value === null || value === undefined) return [];
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return [{ key: path.join('.'), value: String(value) }];
  }

  if (Array.isArray(value)) {
    return value.flatMap((entry, index) => flattenTranslations(entry, [...path, index]));
  }

  if (typeof value === 'object') {
    return Object.entries(value).flatMap(([childKey, childValue]) =>
      flattenTranslations(childValue, [...path, childKey])
    );
  }

  return [];
};

const applyValueAtPath = (target, path, nextValue) => {
  let cursor = target;
  path.forEach((segment, index) => {
    const isLast = index === path.length - 1;
    const numericKey = Number.isInteger(Number(segment));
    const key = numericKey ? Number(segment) : segment;

    if (isLast) {
      cursor[key] = nextValue;
      return;
    }

    if (!cursor[key] || typeof cursor[key] !== 'object') {
      cursor[key] = numericKey ? [] : {};
    }

    cursor = cursor[key];
  });
};

const getInitialLanguage = () => {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (stored && locales[stored]) return stored;
  const docLang = document.documentElement.lang;
  if (docLang && locales[docLang]) return docLang;
  return 'en';
};

let activeLanguage = getInitialLanguage();
let translationManagerLocale = activeLanguage;
const getLocale = () => locales[activeLanguage];
const getPersonas = () => getLocale().personas;
let activePersona = getPersonas()[0];
const getRoot = () => document.documentElement;
const getThemeToggle = () => document.getElementById('themeToggle');
const getLanguagePicker = () => document.getElementById('languagePicker');
const getPersonaSwitcher = () => document.querySelector('[data-persona-switcher]');
const getTranslationManager = () => document.querySelector('[data-translation-manager]');

const renderLanguagePickerOptions = () => {
  const picker = getLanguagePicker();
  if (!picker) return;

  const current = picker.value;
  picker.innerHTML = '';

  Object.entries(locales).forEach(([key, locale]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = key.toUpperCase();
    option.setAttribute('data-label', locale.label);
    picker.appendChild(option);
  });

  if (locales[current]) {
    picker.value = current;
  }
};

const buildTranslationsForLocale = (localeKey) => {
  const localeCopy = copy[localeKey];
  if (!localeCopy) return [];
  return flattenTranslations(localeCopy);
};

const renderTranslationList = (localeKey) => {
  const manager = getTranslationManager();
  if (!manager) return;
  const list = manager.querySelector('[data-translation-list]');
  const count = manager.querySelector('[data-translation-count]');
  if (!list) return;

  const entries = buildTranslationsForLocale(localeKey);
  list.innerHTML = '';

  entries.forEach((entry) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'translation-item';

    const keyEl = document.createElement('div');
    keyEl.className = 'translation-item__key';
    keyEl.textContent = entry.key;

    const textarea = document.createElement('textarea');
    textarea.dataset.translationKey = entry.key;
    textarea.value = entry.value;

    wrapper.append(keyEl, textarea);
    list.appendChild(wrapper);
  });

  if (count) {
    count.textContent = `${entries.length} keys`;
  }
};

const addTranslationValue = (localeKey, keyPath, value) => {
  if (!copy[localeKey]) return;
  const segments = keyPath.split('.').filter(Boolean);
  if (!segments.length) return;
  applyValueAtPath(copy[localeKey], segments, value);
};

const addLocale = (code, label) => {
  if (!code) return;
  const normalized = code.trim();
  if (locales[normalized]) return;
  copy[normalized] = cloneDeep(copy.en);
  locales = {
    ...locales,
    [normalized]: {
      label: label || normalized.toUpperCase(),
      personas: cloneDeep(personas),
      copy: copy[normalized],
    },
  };
  renderLanguagePickerOptions();
};

const setPersonaContext = (persona) => {
  const root = getRoot();
  root.setAttribute('data-persona', persona.slug);

  if (persona.palette) {
    root.style.setProperty('--accent', persona.palette.accent);
    root.style.setProperty('--accent-strong', persona.palette.accentStrong);
    root.style.setProperty('--accent-soft', persona.palette.accentSoft);
    root.style.setProperty('--accent-surface', persona.palette.accentSurface);
    root.style.setProperty('--accent-border', persona.palette.accentBorder);
  }
};

const getPersonaPanels = () =>
  document.querySelectorAll('.hero, [data-projects], [data-skills], [data-testimonial], .persona-cta');

const animatePersonaPanels = () => {
  const panels = getPersonaPanels();
  if (!panels.length) return;

  panels.forEach((panel) => {
    const shouldSkipHero = panel.classList.contains('hero') && !panel.classList.contains('hero--visible');
    if (shouldSkipHero) return;
    panel.classList.add('persona-panel');
    panel.classList.remove('persona-panel--active');
  });

  requestAnimationFrame(() => {
    panels.forEach((panel) => {
      const shouldSkipHero = panel.classList.contains('hero') && !panel.classList.contains('hero--visible');
      if (shouldSkipHero) return;
      // eslint-disable-next-line no-unused-expressions
      panel.offsetWidth;
      panel.classList.add('persona-panel--active');
    });
  });
};

const renderHero = (persona) => {
  const heroEyebrow = document.querySelector('[data-hero-eyebrow]');
  const heroPersonaTitle = document.querySelector('[data-hero-persona-title]');
  const heroPersonaIcon = document.querySelector('[data-hero-persona-icon]');
  const heroHeading = document.querySelector('[data-hero-heading]');
  const heroHighlight = document.querySelector('[data-hero-highlight]');
  const heroLead = document.querySelector('[data-hero-lead]');
  const heroActions = document.querySelector('[data-hero-actions]');
  const heroStats = document.querySelector('[data-hero-stats]');
  const heroPortrait = document.querySelector('[data-hero-portrait]');
  const focusList = document.querySelector('[data-focus-list]');

  if (
    !heroEyebrow ||
    !heroPersonaTitle ||
    !heroPersonaIcon ||
    !heroHeading ||
    !heroHighlight ||
    !heroLead ||
    !heroActions ||
    !heroStats ||
    !heroPortrait ||
    !focusList
  )
    return;

  const { heroCopy } = persona;
  heroEyebrow.textContent = heroCopy.eyebrow;
  heroPersonaTitle.textContent = persona.title;
  heroPersonaIcon.setAttribute('src', persona.icon);
  heroPersonaIcon.setAttribute('alt', persona.iconAlt);
  heroHeading.textContent = `${heroCopy.heading} `;
  heroHighlight.textContent = heroCopy.highlight;
  heroLead.textContent = heroCopy.lead;
  heroPortrait.setAttribute('src', heroCopy.portrait);

  heroActions.innerHTML = '';
  heroCopy.actions.forEach((action) => {
    const link = document.createElement('a');
    link.className = `btn ${action.variant === 'ghost' ? 'btn--ghost' : 'btn--primary'}`;
    link.href = action.href;
    link.textContent = action.label;
    heroActions.appendChild(link);
  });

  heroStats.innerHTML = '';
  heroCopy.stats.forEach((stat) => {
    const statItem = document.createElement('div');
    const dt = document.createElement('dt');
    dt.textContent = stat.value;
    const dd = document.createElement('dd');
    dd.textContent = stat.label;
    statItem.append(dt, dd);
    heroStats.appendChild(statItem);
  });

  focusList.innerHTML = '';
  heroCopy.focus.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    focusList.appendChild(li);
  });
};

const renderProjects = (projects) => {
  const projectsContainer = document.querySelector('[data-projects]');
  if (!projectsContainer) return;
  projectsContainer.innerHTML = '';

  projects.forEach((project) => {
    const article = document.createElement('article');
    article.className = 'card project-card';

    const meta = document.createElement('div');
    meta.className = 'card__meta';
    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = project.badge;
    const time = document.createElement('time');
    time.dateTime = project.year;
    time.textContent = project.year;
    meta.append(pill, time);

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const tags = document.createElement('ul');
    project.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.textContent = tag;
      tags.appendChild(li);
    });

    const link = document.createElement('a');
    link.href = project.href;
    link.className = 'card__link';
    link.textContent = project.linkLabel;

    article.append(meta, title, description, tags, link);
    projectsContainer.appendChild(article);
  });
};

const renderSkills = (skills) => {
  const skillsContainer = document.querySelector('[data-skills]');
  if (!skillsContainer) return;
  skillsContainer.innerHTML = '';

  skills.forEach((skill) => {
    const article = document.createElement('article');
    article.className = 'card service-card';

    const title = document.createElement('h3');
    title.textContent = skill.title;

    const description = document.createElement('p');
    description.textContent = skill.description;

    const bullets = document.createElement('ul');
    skill.bullets.forEach((bullet) => {
      const li = document.createElement('li');
      li.textContent = bullet;
      bullets.appendChild(li);
    });

    article.append(title, description, bullets);
    skillsContainer.appendChild(article);
  });
};

const renderTestimonial = (testimonial) => {
  const testimonialContainer = document.querySelector('[data-testimonial]');
  if (!testimonialContainer) return;
  testimonialContainer.innerHTML = '';

  const figure = document.createElement('figure');
  figure.className = 'card quote';

  const quote = document.createElement('blockquote');
  quote.textContent = testimonial.quote;

  const figcaption = document.createElement('figcaption');
  const strong = document.createElement('strong');
  strong.textContent = testimonial.name;
  figcaption.append(strong, document.createTextNode(`, ${testimonial.title}`));

  figure.append(quote, figcaption);
  testimonialContainer.appendChild(figure);
};

const renderCta = (cta) => {
  const ctaHeading = document.querySelector('[data-cta-heading]');
  const ctaBody = document.querySelector('[data-cta-body]');
  const ctaLink = document.querySelector('[data-cta-link]');
  const ctaEyebrow = document.querySelector('[data-cta-eyebrow]');

  if (!ctaHeading || !ctaBody || !ctaLink || !ctaEyebrow) return;

  ctaEyebrow.textContent = cta.eyebrow;
  ctaHeading.textContent = cta.heading;
  ctaBody.textContent = cta.body;
  ctaLink.textContent = cta.button.label;
  ctaLink.href = cta.button.href;
};

const renderStaticCopy = () => {
  const localeCopy = getLocale().copy;

  const personaLabel = document.querySelector('[data-persona-switcher-label]');
  if (personaLabel) personaLabel.textContent = localeCopy.personaSwitcher;

  const navLinks = document.querySelectorAll('[data-nav-link]');
  if (navLinks.length) {
    localeCopy.nav.links.forEach((label, index) => {
      if (navLinks[index]) navLinks[index].textContent = label;
    });
  }

  const navCta = document.querySelector('[data-nav-cta]');
  if (navCta) navCta.textContent = localeCopy.nav.cta;

  const workEyebrow = document.querySelector('[data-work-eyebrow]');
  const workHeading = document.querySelector('[data-work-heading]');
  const workCta = document.querySelector('[data-work-cta]');
  if (workEyebrow) workEyebrow.textContent = localeCopy.work.eyebrow;
  if (workHeading) workHeading.textContent = localeCopy.work.heading;
  if (workCta) workCta.textContent = localeCopy.work.cta;

  const servicesEyebrow = document.querySelector('[data-services-eyebrow]');
  const servicesHeading = document.querySelector('[data-services-heading]');
  const servicesSummary = document.querySelector('[data-services-summary]');
  if (servicesEyebrow) servicesEyebrow.textContent = localeCopy.services.eyebrow;
  if (servicesHeading) servicesHeading.textContent = localeCopy.services.heading;
  if (servicesSummary) servicesSummary.textContent = localeCopy.services.summary;

  const experienceEyebrow = document.querySelector('[data-experience-eyebrow]');
  const experienceHeading = document.querySelector('[data-experience-heading]');
  const experienceCta = document.querySelector('[data-experience-cta]');
  if (experienceEyebrow) experienceEyebrow.textContent = localeCopy.experience.eyebrow;
  if (experienceHeading) experienceHeading.textContent = localeCopy.experience.heading;
  if (experienceCta) experienceCta.textContent = localeCopy.experience.cta;

  const timelineArticles = document.querySelectorAll('[data-timeline-index]');
  timelineArticles.forEach((article) => {
    const entry = localeCopy.experience.timeline[Number(article.dataset.timelineIndex)];
    if (!entry) return;
    const heading = article.querySelector('[data-timeline-heading]');
    const meta = article.querySelector('[data-timeline-meta]');
    const body = article.querySelector('[data-timeline-body]');
    if (heading) heading.textContent = entry.heading;
    if (meta) meta.textContent = entry.meta;
    if (body) body.textContent = entry.body;
  });

  const testimonialsEyebrow = document.querySelector('[data-testimonials-eyebrow]');
  const testimonialsHeading = document.querySelector('[data-testimonials-heading]');
  if (testimonialsEyebrow) testimonialsEyebrow.textContent = localeCopy.testimonials.eyebrow;
  if (testimonialsHeading) testimonialsHeading.textContent = localeCopy.testimonials.heading;

  const footerHeading = document.querySelector('[data-footer-heading]');
  const footerBody = document.querySelector('[data-footer-body]');
  const footerCta = document.querySelector('[data-footer-cta]');
  if (footerHeading) footerHeading.textContent = localeCopy.footer.heading;
  if (footerBody) footerBody.innerHTML = localeCopy.footer.body;
  if (footerCta) footerCta.textContent = localeCopy.footer.cta;

  const footerLinks = document.querySelectorAll('[data-footer-link]');
  footerLinks.forEach((link) => {
    const key = link.dataset.footerLink;
    if (key && localeCopy.footer.socials[key]) {
      link.textContent = localeCopy.footer.socials[key];
    }
  });

  const backToTop = document.querySelector('[data-back-to-top]');
  if (backToTop) backToTop.textContent = localeCopy.footer.backToTop;
};

const renderPersonaContent = (persona) => {
  setPersonaContext(persona);
  renderHero(persona);
  renderProjects(persona.projects);
  renderSkills(persona.skills);
  renderTestimonial(persona.testimonial);
  renderCta(persona.cta);
  animatePersonaPanels();
};

const renderPersonaTabs = (container) => {
  container.innerHTML = '';
  getPersonas().forEach((persona) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'persona-tab';
    button.dataset.personaOption = persona.slug;
    button.setAttribute('role', 'tab');
    const icon = document.createElement('img');
    icon.src = persona.icon;
    icon.alt = persona.iconAlt;
    icon.className = 'persona-tab__icon';

    const label = document.createElement('span');
    label.className = 'persona-tab__label';
    label.textContent = persona.title;

    button.append(icon, label);
    container.appendChild(button);
  });
};

const setSelectedPersonaTab = (container, slug) => {
  container
    .querySelectorAll('[data-persona-option]')
    .forEach((tab) => tab.setAttribute('aria-selected', tab.dataset.personaOption === slug ? 'true' : 'false'));
};

const getPersonaBySlug = (slug) => getPersonas().find((persona) => persona.slug === slug);

const renderPersonasForLanguage = () => {
  const switcher = getPersonaSwitcher();
  if (!switcher) return;
  renderPersonaTabs(switcher);
  setSelectedPersonaTab(switcher, activePersona.slug);
  renderPersonaContent(activePersona);
};

const applyLanguage = () => {
  document.documentElement.setAttribute('lang', activeLanguage);
  renderStaticCopy();
  renderPersonasForLanguage();
};

export const setLanguage = (nextLanguage) => {
  if (!locales[nextLanguage]) return;
  activeLanguage = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, nextLanguage);
  const personaMatch = getPersonaBySlug(activePersona.slug);
  activePersona = personaMatch || getPersonas()[0];
  applyLanguage();
  const picker = getLanguagePicker();
  if (picker && picker.value !== nextLanguage) {
    picker.value = nextLanguage;
  }
};

export const initLanguage = () => {
  renderLanguagePickerOptions();
  setLanguage(activeLanguage);
  const picker = getLanguagePicker();
  if (picker) {
    picker.value = activeLanguage;
    picker.addEventListener('change', (event) => setLanguage(event.target.value));
  }
};

export const initPersonas = () => {
  const switcher = getPersonaSwitcher();
  if (!switcher) return;

  const setPersona = (slug) => {
    const candidate = getPersonaBySlug(slug);
    if (!candidate || candidate.slug === activePersona.slug) return;
    activePersona = candidate;
    renderPersonaContent(candidate);
    setSelectedPersonaTab(switcher, candidate.slug);
  };

  switcher.addEventListener('click', (event) => {
    const target = event.target.closest('[data-persona-option]');
    if (!target) return;
    setPersona(target.dataset.personaOption);
  });

  renderPersonaTabs(switcher);
  setSelectedPersonaTab(switcher, activePersona.slug);
  renderPersonaContent(activePersona);
};

export const setTheme = (nextTheme) => {
  const root = getRoot();
  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);

  const toggle = getThemeToggle();
  if (toggle) {
    toggle.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
  }
};

export const getPreferredTheme = () => {
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const initTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) {
    setTheme(stored);
  } else {
    setTheme(getPreferredTheme());
  }
};

export const toggleTheme = () => {
  const current = getRoot().getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
};

export const initThemeToggle = () => {
  const toggle = getThemeToggle();
  if (!toggle) return;
  toggle.addEventListener('click', toggleTheme);
};

export const initBackToTop = () => {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

export const initNavToggle = () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('nav__links--open');
    }
  });
};

export const initHeroObserver = () => {
  const hero = document.querySelector('.hero');
  if (!hero || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          hero.classList.add('hero--visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(hero);
};

export const initYear = () => {
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
};

export const initTranslationManager = () => {
  const manager = getTranslationManager();
  if (!manager) return;

  const localePicker = manager.querySelector('[data-translation-locale]');
  const translationList = manager.querySelector('[data-translation-list]');
  const addTranslationForm = manager.querySelector('[data-add-translation-form]');
  const newLocaleForm = manager.querySelector('[data-new-locale-form]');

  renderLanguagePickerOptions();

  if (localePicker) {
    localePicker.value = translationManagerLocale;
    localePicker.addEventListener('change', (event) => {
      const nextLocale = event.target.value;
      if (!locales[nextLocale]) return;
      translationManagerLocale = nextLocale;
      renderTranslationList(translationManagerLocale);
    });
  }

  if (translationList) {
    translationList.addEventListener('input', (event) => {
      const target = event.target;
      if (!target.dataset.translationKey) return;
      addTranslationValue(translationManagerLocale, target.dataset.translationKey, target.value);
      if (translationManagerLocale === activeLanguage) {
        applyLanguage();
      }
    });
  }

  if (addTranslationForm) {
    addTranslationForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const key = addTranslationForm.translationKey.value.trim();
      const value = addTranslationForm.translationValue.value.trim();
      if (!key || !value) return;
      addTranslationValue(translationManagerLocale, key, value);
      renderTranslationList(translationManagerLocale);
      if (translationManagerLocale === activeLanguage) {
        applyLanguage();
      }
      addTranslationForm.reset();
    });
  }

  if (newLocaleForm) {
    newLocaleForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const code = newLocaleForm.localeCode.value.trim();
      const label = newLocaleForm.localeLabel.value.trim();
      if (!code) return;
      addLocale(code, label);
      translationManagerLocale = code;
      if (localePicker) {
        localePicker.value = translationManagerLocale;
      }
      renderTranslationList(translationManagerLocale);
      newLocaleForm.reset();
    });
  }

  renderTranslationList(translationManagerLocale);
};

export const initApp = () => {
  initTheme();
  initLanguage();
  initPersonas();
  initBackToTop();
  initNavToggle();
  initHeroObserver();
  initYear();
  initThemeToggle();
  initTranslationManager();
};

document.addEventListener('DOMContentLoaded', initApp);


