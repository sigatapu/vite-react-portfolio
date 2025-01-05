export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from outside localhost
    port: 3000, // Or any other port of your choice
  },
  base: '/vite-react-portfolio/', // Ensure this matches your repo name
})
