import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	server: {
		open: true, // 👈 this tells Vite to open your browser automatically
	},
});
