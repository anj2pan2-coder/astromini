import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    // pre-compress with gzip
    compression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
    // pre-compress with brotli (better ratio)
    compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
  ],

  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },

  build: {
    target: 'esnext',       // modern syntax — no legacy polyfills
    minify: 'terser',
    sourcemap: false,

    terserOptions: {
      compress: {
        passes: 3,          // multiple passes for better dead-code removal
        drop_console: true, // strip console.* calls
        drop_debugger: true,
        pure_getters: true,
        unsafe_math: true,
        unsafe_comps: true,
        toplevel: true,
      },
      mangle: { toplevel: true },
      format: { comments: false }, // strip all comments
    },

    rollupOptions: {
      output: {
        // split vendor (react + react-dom) away from app code
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // deterministic, content-hashed filenames
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
      treeshake: {
        // React has side effects — only disable property-read side effects
        propertyReadSideEffects: false,
      },
    },

    // inline assets smaller than 4 kB as base64
    assetsInlineLimit: 4096,

    // warn if any chunk exceeds 200 kB
    chunkSizeWarningLimit: 200,
  },
})
