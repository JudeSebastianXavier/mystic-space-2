# GitHub Pages Deployment Guide

This project is configured for deployment on GitHub Pages with automatic builds and deployments.

## Prerequisites

1. **GitHub Repository**: Make sure your project is pushed to a GitHub repository
2. **Repository Name**: The repository should be named `mystic-space-2` (or update the base path in `vite.config.ts`)

## Automatic Deployment (Recommended)

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/(root)** folder
6. Click **Save**

### 2. Enable GitHub Actions

1. Go to **Actions** tab in your repository
2. The workflow should automatically run on push to main branch
3. If not, you may need to enable Actions in repository settings

### 3. Deploy

Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Update for deployment"
git push origin main
```

The GitHub Action will automatically:
- Build your project
- Deploy to GitHub Pages
- Make it available at `https://yourusername.github.io/mystic-space-2/`

## Manual Deployment

If you prefer manual deployment:

### 1. Build the Project

```bash
npm run build:client
```

### 2. Deploy to GitHub Pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# "deploy": "gh-pages -d dist/spa"

# Deploy
npm run deploy
```

## Configuration Files

The following files are configured for GitHub Pages:

- **`vite.config.ts`**: Sets base path for production builds
- **`public/404.html`**: Handles client-side routing
- **`public/redirect.html`**: Redirects for SPA routing
- **`index.html`**: Includes routing script
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow

## Troubleshooting

### Routing Issues
- Make sure the `404.html` and redirect script are in place
- Check that the base path in `vite.config.ts` matches your repository name

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check that the build command works locally: `npm run build:client`

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check the Actions tab for build/deployment errors
- Ensure the repository is public or you have GitHub Pro for private repos

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update the base path in `vite.config.ts` to `/` (root)

## Local Development

For local development, the base path is set to `/` so everything works normally:

```bash
npm run dev
```

The site will be available at `http://localhost:8080` 