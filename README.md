# laniw.com

[![Build laniw.com](https://github.com/lanijw/laniw.com/actions/workflows/build.yml/badge.svg)](https://github.com/lanijw/laniw.com/actions/workflows/build.yml)
[![Lint laniw.com](https://github.com/lanijw/laniw.com/actions/workflows/lint.yml/badge.svg)](https://github.com/lanijw/laniw.com/actions/workflows/lint.yml)
[![Test laniw.com](https://github.com/lanijw/laniw.com/actions/workflows/test.yml/badge.svg)](https://github.com/lanijw/laniw.com/actions/workflows/test.yml)

## Develop

```bash
npm install
npm run dev -- --open
```

## Deploy

Preview production build: `npm run preview`.

Windows:

```bash
npm run build
set PATH=5000
node ./build/index.js
```

Linux:

```bash
npm run build
PATH = 5000
node ./build/index.js
```
