import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                require('@tailwindcss/postcss'), // Використовуйте цей плагін
                require('autoprefixer'),
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    build: {
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                },
            },
        },
    },
    base: '/GrillCalc/',
});
