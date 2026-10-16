# Content

Content lives in typed files validated at build time by `src/content.config.ts`.
Both collections start empty in M0; entries are added in M1 once the status
tiers and FAQ answers are confirmed (docs/07, P0 item 4 and P1 item 16).

## `status/events.json` — truth tiers

```json
[
  {
    "id": "events-example",
    "product": "events",
    "tier": "original",
    "order": 10,
    "label": { "pt-PT": "…", "en": "…" },
    "evidence": {
      "kind": "authorised-screenshot",
      "reference": "src/assets/proof/….webp",
      "date": "2026-10-20"
    }
  }
]
```

`tier` is one of `original` (Já funciona no sistema original), `v2` (Já funciona no V2),
`development` (Em desenvolvimento) or `exploring` (Em estudo). `original` and `v2`
entries without `evidence` fail the build.

## `faq/events.json`

Each entry has `id`, `product` (`events`, `beauty` or `programme`), `order`, and
`question` / `answer` objects with `pt-PT` and `en` strings.
