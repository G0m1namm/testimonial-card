# Testimonial Card Challenge

Pixel-perfect testimonial cards built with Astro and Tailwind, using Biome for formatting and linter.

## Preview URL

https://testimonial-card.coste200910.workers.dev

## Implementation Details

- Optimized `profile_thumbnail` image as webp with 90% size reduction.
- Colors were added and used as part of the Tailwind theme, including the gradient as a utility class.
- Only necessary subset of fonts were used to reduce the footprint.
- Name and handle clamp in one line meanwhile the description clamps after five lines.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
