# Fox Solutions — Installed Systems Showcase

Customer-facing project archive with faceted filtering (weigher type × bagger
configuration), parametric 2D layout drawings, 3D GLB models, and Cloudflare
Stream videos. Vite + React + Supabase + Netlify.

## Quick start

```bash
npm install
npm run dev
```

With no `.env` file the app runs in **demo mode** using built-in sample data,
so you can develop and demo immediately with no backend.

## Wire up Supabase

1. In your Supabase project, open the SQL Editor and run `supabase/schema.sql`.
   This creates the `projects` table with RLS (anonymous visitors can only read
   rows where `is_public = true`) and seeds three sample rows.
2. Create a public Storage bucket named `models` (for GLB files) and optionally
   `layouts` (for PNG top views).
3. Copy `.env.example` to `.env` and fill in your project URL and anon key from
   Settings → API.

## Adding a project

Insert a row in the `projects` table (Table Editor is fine). Filters on the
gallery are generated automatically from the distinct values of `weigher_type`
and `bagger_config` — no code changes needed for new types.

Per-project media fields:

- `model_url` — public URL of a GLB in the `models` bucket. Rendered with
  Google `<model-viewer>` (orbit/zoom/touch included).
- `video_id` — Cloudflare Stream video UID. Embedded via iframe.
- `layout_image_url` — optional PNG top view; if empty, the app draws a
  parametric engineering-style SVG from the project data.

## SolidWorks → GLB pipeline

1. Export assembly as STEP (or OBJ for quicker results).
2. Import into Blender (free): File → Import → STEP requires an addon, so OBJ
   is the low-friction path; for STEP use the `sverchok`/CAD importer or
   convert with FreeCAD first.
3. Decimate: select mesh → Modifier → Decimate, target < 200k triangles
   total. Prospects don't need bolt threads.
4. File → Export → glTF 2.0 (.glb). Aim for < 10 MB.
5. Upload to the Supabase `models` bucket, copy the public URL into
   `model_url`.

## Deploy to Netlify

Push to GitHub, then in Netlify: New site → Import from Git. `netlify.toml`
already sets the build command, publish dir, and the SPA redirect so
`/project/:id` deep links work. Add the two `VITE_SUPABASE_*` env vars in
Site settings → Environment variables. Suggested domain:
`projects.foxsolutions.com`.

## Roadmap ideas

- Gate internal projects behind the Hub's PIN login (`is_public = false` rows)
- "Request a similar system" button already links to sales email — point it at
  the customer requirements intake form instead
- Industry facet as a third filter (column already exists)
- Spanish-language toggle for Latin American prospects
