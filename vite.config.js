import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:          resolve(__dirname, 'index.html'),
        sunglasses:    resolve(__dirname, 'sunglasses.html'),
        femaleJewelry: resolve(__dirname, 'female-jewelry.html'),
        maleJewelry:   resolve(__dirname, 'male-jewelry.html'),
        unisexJewelry: resolve(__dirname, 'unisex-jewelry.html'),
        watches:       resolve(__dirname, 'watches.html'),
      },
    },
  },
})
