import { v4wp } from '@kucrut/vite-for-wp';
import reactRefresh from '@vitejs/plugin-react';
import path from 'path';



export default {
  plugins: [   
    reactRefresh(),
    v4wp({
      input: {
        main: 'src/main.jsx',
      },
      outDir: 'dist',
    }),
    {
      name: 'wpb-override-config',
      config: () => ({
        build: {
          manifest: 'manifest.json',
          assetsDir: '',
        },
      }),
    }
 
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
