# GitHub Pages Deployment

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

## Steps

1. Make sure your repository is pushed to GitHub.
2. Update the `vite.config.ts` file to set the correct `base` path (usually `/<repo-name>/`).
3. Run the following commands:

```
npm install --save-dev gh-pages
npm run build
git add . && git commit -m "Prepare for deployment"
npm run deploy
```

Your site will be available at `https://<username>.github.io/<repo-name>/`.
