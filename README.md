# Omar Abdesslem — Portfolio

A personal portfolio focused on machine learning, computer vision and efficient computing. Built with Next.js and React for deployment on the existing Netlify setup.

The homepage introduces selected work, research questions, technical notes, experience, education and contact details. The project archive has accessible topic filters, and each project has a dedicated page with its approach and original sources. Three short technical notes explore the reasoning behind the work, with links to the source reports and case studies. FastGATr and depth-estimation pages include report-backed result comparisons. Reported results include their evaluation context; the security demo and conceptual forecasting diagram are labelled accordingly.

## Development

Requires Node.js 20 or newer.

```sh
npm ci --legacy-peer-deps
npm run dev
```

Visit `http://localhost:3000`. To check the production build and preview it:

```sh
npm run build
npm start
```

## Content

- `app/page.tsx`: introduction, background, research questions and contact.
- `app/projects/project-data.ts`: project descriptions, results, sources and tags.
- `app/projects/[slug]/page.tsx`: generated project pages.
- `app/notes/note-data.ts` and `app/notes/[slug]/page.tsx`: technical notes and reading pages.
- `app/components/`: shared navigation, project visuals and interactive project filters and accessible result comparisons.
- `app/globals.css`: responsive styles and reduced-motion support.
- `public/PDFs/`: original project reports and presentations.
- `app/layout.tsx`, `app/opengraph-image.tsx`, `app/sitemap.ts`: page metadata, social preview and sitemap.

The public portfolio is rendered without a CAPTCHA. The existing Turnstile verification API remains available separately. The site uses system fonts and does not fetch fonts during the build.

## License

[MIT](LICENSE).
