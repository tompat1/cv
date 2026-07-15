# Portfolio Site

A single-page personal portfolio site for Thomas Rynell showcasing digital design, branding, and web development. The site features customizable personas, dark/light theme toggles, and localization support.

## Features

- **Single-Page Application**: Fast and responsive portfolio showcasing recent collaborations, capabilities, experience, and testimonials.
- **Customizable Personas**: Switch between different professional focuses (personas) updating the highlighted projects, skills, and styling.
- **Localization Support**: Easily manage and translate content with an integrated translation manager.
- **Dark/Light Themes**: Supports user preference for dark or light themes.
- **Vite Powered**: Fast development server and optimized build processes.
- **Testing**: Built-in tests using Vitest and Testing Library.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Vitest](https://vitest.dev/) - Testing Framework
- [@testing-library/dom](https://testing-library.com/docs/dom-testing-library/intro/) - DOM Testing

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) 20.19 or newer installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory.
2. Install the dependencies:

```bash
npm install
```

### Scripts

The following npm scripts are available:

- `npm run dev` / `npm start`: Starts the development server using Vite.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.
- `npm run deploy`: Builds the app and deploys `dist` with Wrangler.
- `npm test`: Runs the test suite using Vitest.
- `npm run test:watch`: Runs tests in watch mode.

## Cloudflare Pages

This site is configured as a static Vite build for Cloudflare Pages.

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20.19` or newer

The `wrangler.toml` file sets `pages_build_output_dir = "dist"` for CLI deploys. Cloudflare Pages also copies `_headers` and `_redirects` from `public/` into the production build, adding baseline security headers, long-lived asset caching, short-lived locale caching, and an SPA fallback.

## Author

**Thomas Rynell**
- [LinkedIn](https://www.linkedin.com/in/thomasrynell/)
- [Portfolio](https://thomasrynell.com)
- [Email](mailto:thomas@rynell.com)

## License

This project is licensed under the MIT License.
