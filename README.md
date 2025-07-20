# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## to update react ---only when to working with old 
npm install @vitejs/plugin-react --save-dev

### instruction 
  # Tailwind 
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    1.inside tailwind.config.js type this
       /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/*/.{js,jsx,ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        } 
    2.inside index.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    3.create jsconfig.json 
        {
        "compilerOptions": {
            "baseUrl": ".",
            "paths": {
            "@/*": ["./src/*"]
            }
        }
        }
    4.inside vite.config.js add
        import path from "path"

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
            "@": path.resolve(__dirname, "./src"),
            },
        },
        })

  # shadecn
    npx shadcn@latest init
    npx shadcn@latest add button
    npx shadcn@latest add input
  # sonar
    npm install sonner
    

# fontausom install
npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

# frame-motion
npm install framer-motion
# rive 
npm install @rive-app/react-canvas

