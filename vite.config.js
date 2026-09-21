import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change "activity-points-app" below to your actual
// GitHub repository name before deploying to GitHub Pages.
// Example: if your repo is https://github.com/yourname/points-app
// then base should be '/points-app/'
export default defineConfig({
  plugins: [react()],
  base: '/activity-points-app/',
})
