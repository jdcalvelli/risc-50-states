// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        r_assets: resolve(__dirname, 'r_assets/choropleth.html')
      }
    }
  }
})
