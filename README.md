## DevKasun's personal portfolio website

Built with Astro 5 and deployed to Cloudflare Workers using the Cloudflare adapter.

Use Node.js 24 and pnpm 12.6.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Build with `pnpm run build`. Preview the Cloudflare build locally with
`pnpm exec wrangler dev`, or build and deploy with `pnpm run deploy`.

Cloudflare Workers Builds settings:

- Build command: `pnpm run build`
- Deploy command: `pnpm exec wrangler deploy`

Wrangler configuration is committed in `wrangler.jsonc`; CI should use it without
running automatic framework setup. Existing routes remain prerendered, and images
are processed at build time.

Follow me on:
* Youtube: https://www.youtube.com/@devkasun
* Twitter/X: https://x.com/KasunLuckshitha
* Instagram: https://www.instagram.com/devkasun
* Threads: https://www.threads.net/@devkasun

---
