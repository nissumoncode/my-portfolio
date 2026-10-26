/**
 * 🚧 PLACEHOLDER PROJECTS — 6 fictional case studies that satisfy the
 * "at least 3 projects" requirement with every detail field filled.
 * Replace with your real projects (keep the shape). `liveUrl` / `githubUrl`
 * are null in the placeholders — null hides the button instead of showing a
 * dead "#" link, which keeps the site honest out of the box.
 *
 * `id` doubles as the /projects/[id] route slug — keep it unique + kebab-case.
 */
import type { Project } from "./types";

export const projects: Project[] = [
  {
    // PLACEHOLDER
    id: "taskflow",
    title: "TaskFlow",
    tagline: "Kanban task manager with realtime collaboration",
    overview:
      "PLACEHOLDER — a full-stack kanban board where teams drag tasks across stages, comment in realtime, and track progress with lightweight analytics.",
    role: "Solo project — designed, built, and deployed end to end.",
    techStack: ["Next.js", "TypeScript", "Socket.IO", "PostgreSQL"],
    features: [
      "Drag-and-drop boards with optimistic UI updates",
      "Realtime multi-user sync over WebSockets",
      "Rich-text task descriptions and checklists",
      "Keyboard-first navigation for power users",
    ],
    challenges: [
      "Keeping drag-and-drop state consistent across clients — solved with a server-authoritative move queue and reconciliation on reconnect.",
      "Avoiding duplicated websocket traffic by batching XP-like events into per-frame commits.",
    ],
    ideas: [
      "Add native-mobile shell via Capacitor",
      "Introduce AI-assisted task breakdown suggestions",
    ],
    liveUrl: null, // 🚧 PLACEHOLDER — point at the real deployed app
    githubUrl: null, // 🚧 PLACEHOLDER — point at the real repo
    screenshots: [],
    featured: true,
  },
  {
    // PLACEHOLDER
    id: "shopstack",
    title: "ShopStack",
    tagline: "Headless e-commerce storefront with instant search",
    overview:
      "PLACEHOLDER — a storefront consuming a commerce API with a faceted catalog, instant search-as-you-type, and a checkout flow.",
    role: "Frontend lead — owned catalog UX, search, and performance budget.",
    techStack: ["Next.js", "React", "Zustand", "Tailwind CSS"],
    features: [
      "Faceted filtering with shareable URLs",
      "Sub-50ms instant search against a product index",
      "Persisted cart with cross-tab sync",
    ],
    challenges: [
      "Rendering thousands of SKUs without jank — solved with virtualized lists and memoized facets.",
      "Keeping filter state in the URL canonical across back/forward navigation.",
    ],
    ideas: [
      "Add wishlists and price-drop alerts",
      "Localize currency and shipping rules",
    ],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    featured: true,
  },
  {
    // PLACEHOLDER
    id: "pulseboard",
    title: "PulseBoard",
    tagline: "Analytics dashboard with realtime data viz",
    overview:
      "PLACEHOLDER — a metrics dashboard that ingests event streams and renders live charts, cohorts, and anomaly alerts.",
    role: "Full-stack developer — API design plus charting layer.",
    techStack: ["React", "D3.js", "Node.js", "Redis"],
    features: [
      "Live-updating line/bar/heatmaps built on D3",
      "Custom alerting rules with dashboard badges",
      "Dashboard presets persisted per user",
    ],
    challenges: [
      "Chart re-render storms at 60 incoming updates/sec — throttled to one render per animation frame.",
      "Timezone-correct aggregation windows across regions.",
    ],
    ideas: ["Add forecasting overlays", "Export views as scheduled email digests"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
    featured: true,
  },
  {
    // PLACEHOLDER
    id: "pathfinder-ai",
    title: "PathFinder AI",
    tagline: "Interactive algorithm visualizer",
    overview:
      "PLACEHOLDER — a teaching tool that animates classic graph-search and pathfinding algorithms step by step, with adjustable speed and maze generation.",
    role: "Solo project.",
    techStack: ["TypeScript", "Vite", "Canvas API"],
    features
: [
      "Visualized BFS, DFS, Dijkstra, and A*",
      "Random / recursive-division maze generators",
      "Step-through debugger with speed control",
    ],
    challenges: [
      "Keeping animation frames deterministic while the user edits mid-run — modeled the run as an immutable step log.",
      "Canvas performance on large grids via dirty-rect rendering.",
    ],
    ideas: ["Add maze benchmarks and stats", "Host classroom challenge mode"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
  },
  {
    // PLACEHOLDER
    id: "devblog",
    title: "DevBlog",
    tagline: "MDX blog platform with static generation",
    overview:
      "PLACEHOLDER — a writing platform rendering MDX articles with code highlighting, tags, and full-text search, statically generated at build time.",
    role: "Solo project.",
    techStack: ["Next.js", "MDX", "Contentlayer", "Vercel"],
    features: [
      "MDX components inside articles",
      "Tag + full-text search",
      "Themed code blocks with copy button",
    ],
    challenges: [
      "Validating frontmatter without runtime cost — typed schemas checked at build.",
      "Consistent typography between prose and custom MDX components.",
    ],
    ideas: ["Add RSS + JSON feeds", "Reading-time and progress estimate"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
  },
  {
    // PLACEHOLDER
    id: "weatherlens",
    title: "WeatherLens",
    tagline: "Hyperlocal weather dashboard",
    overview:
      "PLACEHOLDER — a weather app combining geolocation, hourly forecast charts, and severe-weather alerts in a clean mobile-first UI.",
    role: "Solo project.",
    techStack: ["React", "TypeScript", "Chart.js", "Vite"],
    features: [
      "Hourly + 7-day forecast charts",
      "Geolocation with manual city search fallback",
      "Units toggle (°C/°F) persisted locally",
    ],
    challenges: [
      "Mapping two different API schemas into one normalized view model.",
      "Graceful degradation when geolocation permission is denied.",
    ],
    ideas: ["Add air-quality index cards", "Weather-based PWA notifications"],
    liveUrl: null,
    githubUrl: null,
    screenshots: [],
  },
];
