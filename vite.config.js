import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
	  plugins: [
	  	    VitePWA({ 
				registerType: 'autoUpdate',
				injectRegister: 'auto',
				devOptions: {
					enabled: true
				},
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}']
				},
				includeAssets: ['favicon.ico'],
				manifest: {
				  name: 'Bills',
				  short_name: 'Bills',
				  description: 'Photo App with Vite',
				  theme_color: '#ffffff',
				  icons: [
					{
					  src: '/icons/bill-Icon.png',
					  sizes: '192x192',
					  type: 'image/png'
					},
				  ]
				}
			})
	  	]
    })
	  

