export const PROFILE = {
  name: "Moe Kyaw Aung",
  mmName: "မိုးကျော်အောင်",
  title: "Senior Android Developer",
  hero: "Moe Kyaw Aung — Senior Android Developer.",
  subtitle: "Building secure, scalable, human-centered mobile products.",
  location: "Tachileik, Myanmar ↔ Bangkok, Thailand",
  portrait:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778763535/MKA_25_lbx6fb.webp",
  avatar:
    "https://res.cloudinary.com/dye5qpwii/image/upload/v1778527878/IMG_20260430_053105_uef0yr.png",
  github: "https://github.com/Dev-moe-kyawaung/",
  githubOrg: "https://github.com/moekyawaung-tech/",
  gravatar: "https://gravatar.com/moekyawaung2026",
  phonePrimary: "+95 9 889 000 889",
  phoneSecondary: "+959 666 000 050",
  email: "moekyawaung@programmer.net",
  years: "6+",
};

export const TRUST_STATS = [
  { value: "6+", label: "Years shipping Android" },
  { value: "16", label: "Apps in production" },
  { value: "43", label: "Live domains & pages" },
  { value: "21+", label: "Open-source repos" },
];

export const MARQUEE_STACK = [
  "Kotlin",
  "Jetpack Compose",
  "Coroutines & Flow",
  "Clean Architecture",
  "Room",
  "Firebase",
  "Media3",
  "React & TypeScript",
  "Offline-First Sync",
  "App Security",
];

export const PILLARS = [
  {
    index: "01",
    title: "Secure by default",
    text: "Encrypted local storage, audited sessions, and permission-minimal design — especially across retail money flows.",
  },
  {
    index: "02",
    title: "Scalable architecture",
    text: "Multi-module Compose apps with unidirectional data flow, so teams can add features without breaking releases.",
  },
  {
    index: "03",
    title: "Human-centered",
    text: "60fps motion, offline resilience, and one-thumb ergonomics. Built for real hands in real shops and streets.",
  },
];

export const WORK = [
  {
    id: "pos",
    no: "01",
    name: "POS Ultimate Pro Max",
    category: "Flagship · Retail Android",
    summary:
      "An offline-first point-of-sale platform that keeps selling with zero connectivity — then syncs cleanly when the network returns.",
    results: [
      { value: "150+", label: "transactions / min offline" },
      { value: "0", label: "sales lost to outages" },
      { value: "4", label: "generations shipped" },
    ],
    stack: ["Kotlin", "Compose", "Room", "Coroutines"],
    media:
      "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031596/Javier_Pardina_10_wttux4.mp4",
    mediaType: "video" as const,
    repo: "https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max",
  },
  {
    id: "player",
    no: "02",
    name: "Gesture Video Player",
    category: "Media · Performance",
    summary:
      "A Media3 pipeline with adaptive streaming and gesture controls, tuned frame-by-frame for buttery playback on mid-range devices.",
    results: [
      { value: "−34%", label: "playback freezes" },
      { value: "60fps", label: "gesture rendering" },
      { value: "HLS", label: "adaptive bitrate" },
    ],
    stack: ["Kotlin", "Media3", "ExoPlayer", "Compose"],
    media:
      "https://res.cloudinary.com/dye5qpwii/video/upload/v1779031566/Javier_Pardina_11_r5y8no.mp4",
    mediaType: "video" as const,
    repo: "https://github.com/moekyawaung-tech/video-player",
  },
  {
    id: "dashboard",
    no: "03",
    name: "Social Analytics Hub",
    category: "Full-stack · Realtime",
    summary:
      "A modular analytics cockpit that turns noisy social feeds into calm, glanceable decisions — fast on any connection.",
    results: [
      { value: "100", label: "Lighthouse performance" },
      { value: "<1.2s", label: "cold start" },
      { value: "Live", label: "feed aggregation" },
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    media:
      "https://res.cloudinary.com/dye5qpwii/image/upload/v1778795822/preview_dzhqvv.webp",
    mediaType: "image" as const,
    repo: "https://github.com/moekyawaung-tech/social-dashboard",
    live: "https://moekyawaung.lovable.app",
  },
];

export const STACK_GROUPS = [
  {
    title: "Android core",
    items: ["Kotlin", "Jetpack Compose", "Coroutines / Flow", "Hilt", "Room / DataStore"],
  },
  {
    title: "Quality & release",
    items: ["Clean Architecture", "Gradle multi-module", "Firebase", "Crash analytics", "Play release trains"],
  },
  {
    title: "Beyond mobile",
    items: ["React / TypeScript", "Node & REST", "PWA & Service Workers", "WebSockets"],
  },
];

export const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Senior Android Developer · Independent",
    place: "Tachileik ↔ Bangkok",
    text: "Own POS and media products end-to-end — architecture, offline sync, release automation — for retail clients across MY & TH.",
  },
  {
    period: "2022 — 2024",
    role: "Lead Mobile Engineer",
    place: "Bangkok",
    text: "Led Compose migration, cut crash rates, and mentored the team on SOLID, testing, and secure data practices.",
  },
  {
    period: "2020 — 2022",
    role: "Android & Web Developer",
    place: "Yangon",
    text: "Shipped dashboards and consumer apps in Kotlin and React with an obsession for cold-start speed.",
  },
];

export const CERTIFICATIONS = [
  "Android architecture & Compose mastery",
  "Clean Architecture & SOLID in production",
  "Offline-first & sync design (retail)",
  "Mobile app security practices",
  "Firebase suite — Auth, Push, Analytics",
];

export const OSS = [
  { value: "21+", label: "Public repositories", href: "https://github.com/moekyawaung-tech/" },
  { value: "43", label: "GitHub Pages live", href: "https://moekyawaung-tech.github.io/" },
  { value: "38", label: "Lovable builds", href: "https://moekyawaung.lovable.app" },
];
