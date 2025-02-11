import { defineVitestConfig } from '@nuxt/test-utils/config'
import WindiCSS from 'vite-plugin-windicss'
// import 'virtual:windi.css'

export default defineVitestConfig({
  plugins: [WindiCSS()],
  test: {},
  // any custom Vitest config you require
})
