import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//changedm is
//merge confilit
//along
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
  server:{
    host:'0.0.0.0',
  
  },
  base:'/web',
})
