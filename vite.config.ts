import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, //注意，这一句是在less对象中，写在外边不起作用
        modifyVars: {
          //在这里进行主题的修改，参考官方配置属性
          '@primary-color': 'rgb(0,82,204)'
        }
      }
    }
  }
})
