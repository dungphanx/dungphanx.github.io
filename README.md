# Dung Phan — Portfolio

Personal portfolio site for **Dung Phan**, a technical lead at Money Forward Vietnam who
built the Account Payable team from zero and now leads the Product VN team for Cloud
Expense.

Live at **[dungphanx.github.io](https://dungphanx.github.io/)**.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript
- Static export (`output: "export"`) served on GitHub Pages via Actions
- Type set in Chakra Petch, IBM Plex Sans and IBM Plex Mono

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build      # emits the static site to ./out
```

## Deploy

Pushing to `main` triggers `.github/workflows/pages.yml`, which builds the site and
deploys `./out` to GitHub Pages.

## Structure

```
app/
  layout.tsx      document shell, fonts, metadata
  page.tsx        the page
  globals.css     the page stylesheet
  tokens.css      design tokens (colour, type, spacing)
  base.css        base rules
public/
  favicon.svg
```

## Contact

- Email: dungphanx@gmail.com
- LinkedIn: [linkedin.com/in/dungphanx](https://www.linkedin.com/in/dungphanx/)
- GitHub: [github.com/dungphanx](https://github.com/dungphanx)
