# The Alice Dojo-Blog Project
### First start your Frontend
```
npm start
```
### Start your Backend
```
npm run data
```
To start your backend you need to run the command to start json-server. 
This is the service that is watching your db.json file in data/db.json that is being fetched with `fetch('http://localhost:8000/blogs')`. This command is:











<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />








## README
🚀 Features
📖 Documentation & guides
👌 Zero-Config: sensible built-in default configs for common use cases
🔩 Extensible: expose the full ability to customize the behavior of the plugin
🦾 Type Strong: written in TypeScript
🔌 Offline Support: generate service worker with offline support (via Workbox)
⚡ Fully tree shakable: auto inject Web App Manifest
💬 Prompt for new content: built-in support for Vanilla JavaScript, Vue 3, React, Svelte, SolidJS and Preact
⚙️ Stale-while-revalidate: automatic reload when new content is available
✨ Static assets handling: configure static assets for offline support
🐞 Development Support: debug your custom service worker logic as you develop your application
🛠️ Versatile: integration with meta frameworks: îles, SvelteKit, VitePress, Astro, and Nuxt 3
💥 PWA Assets Generator: generate all the PWA assets from a single command and a single source image
📦 Install
From v0.13, vite-plugin-pwa requires Vite 3.1 or above.

From v0.16 vite-plugin-pwa requires Node 16 or above: workbox v7 requires Node 16 or above.

npm i vite-plugin-pwa -D 

# yarn 
yarn add vite-plugin-pwa -D

# pnpm 
pnpm add vite-plugin-pwa -D
🦄 Usage
Add VitePWA plugin to vite.config.js / vite.config.ts and configure it:

```
// vite.config.js / vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA()
  ]
}
```
Read the 📖 documentation for a complete guide on how to configure and use this plugin.

Check out the client type declarations client.d.ts for built-in frameworks support.

👀 Full config
Check out the type declaration src/types.ts and the following links for more details.

Web app manifests
Workbox
📄 License
MIT License © 2020-PRESENT Anthony Fu