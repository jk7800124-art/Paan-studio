import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_GEMINI_API_KEY: "AQ.Ab8RN6JaJnn0pzMxr6JHN7bY2Br3Jpbjbo_Gu-G8YN9SlBJtpQ",
      GEMINI_API_KEY: "AQ.Ab8RN6JaJnn0pzMxr6JHN7bY2Br3Jpbjbo_Gu-G8YN9SlBJtpQ"
    },
    'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify("AQ.Ab8RN6JaJnn0pzMxr6JHN7bY2Br3Jpbjbo_Gu-G8YN9SlBJtpQ"),
    'import.meta.env.GEMINI_API_KEY': JSON.stringify("AQ.Ab8RN6JaJnn0pzMxr6JHN7bY2Br3Jpbjbo_Gu-G8YN9SlBJtpQ")
  }
});
