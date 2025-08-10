# Development Quickstart

## Requirements

- Node 20+ (see \.nvmrc\)
- Copy \.env.example\ → \.env.local\ and fill VITE\_\* values

## Scripts

- \
  pm run dev\ — start Vite
- \
  pm run build\ — production build
- \
  pm run preview\ — preview build
- \
  pm run lint\ — ESLint
- \
  pm run format\ — Prettier
- \
  pm run prettier:check\ — verify formatting

## Notes

- CI runs install/lint/build on every push/PR.
- Husky + lint-staged format and lint changed files on commit.
