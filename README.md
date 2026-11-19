# Portfolio and content dashboard

This React/Vite portfolio keeps its published website content in [`public/portfolio.json`](./public/portfolio.json). It does not use a database. The site reads that file at runtime, and the admin dashboard can commit changes to it through GitHub's Contents API.

## Open the dashboard

1. Run `npm install` and `npm run dev`, or open the deployed portfolio.
2. Skip the intro video if it is playing.
3. Double-click or double-tap the portfolio logo in the navigation bar.
4. Sign in with a GitHub fine-grained personal access token that has **Contents: Read and write** permission for this repository. The default repository fields are `Professor134/demoresume` on the `main` branch.
5. Edit the Home page, About and timeline, Skills, Projects, Contact and footer, or Brand and design sections. Drag skill badges in the Skills preview or set their X/Y percentages; drag handles and arrow buttons reorder repeatable entries. Light and dark themes have independent accent colors. Edits are saved as a draft in that browser.
6. To publish for other visitors, open **Publishing** and select **Publish changes**. This creates `public/portfolio.json` on the selected branch if it is missing, or updates it if it already exists. Wait for the hosting provider's deployment to finish.

Create a repository-scoped token at [GitHub fine-grained personal access tokens](https://github.com/settings/personal-access-tokens/new). The dashboard checks that the account can write to the selected repository. GitHub token permissions should be limited to this repository.

## Images, drafts, and access

- Image fields accept a URL, a path to a file in `public/`, or an uploaded image up to 2 MB. Uploaded images are embedded in the JSON file.
- Drafts stay in that browser's local storage after editing and publishing. Use **Export current content** or **Export JSON** to download a backup.
- The token is held only in dashboard memory for the active page and is not included in local drafts or portfolio JSON. Sign in again after closing or reloading the page; do not use a shared or untrusted browser.
- Since this is a static website, GitHub is the source of truth for content shared with visitors. Editing a local draft alone does not publish it.

## Development

- `npm run dev` — start the local Vite development server.
- `npm run build` — create the production build.
- `npm run lint` — run ESLint.
