# Golden Luxury Theme Portfolio

[![CodSpeed](https://img.shields.io/endpoint?url=https://codspeed.io/badge.json)](https://app.codspeed.io/Dev-moe-kyawaung/Golden-Luxury-Theme-Portfolio-01?utm_source=badge)

A single-page portfolio built with React 19, TypeScript, Vite and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build inlines every asset into a single `dist/index.html` file.

## Benchmarks

Performance is tracked continuously with [CodSpeed](https://codspeed.io). Benchmarks live in
`bench/` and are written with [vitest bench](https://vitest.dev/guide/features.html#benchmarking).

```bash
npm run bench
```

They cover the server rendering of the full page and of the `PhoneFrame` previews, plus the
`cn` class-merging helper that every component relies on.
