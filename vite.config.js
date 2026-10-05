// import path from 'node:path';
// import { defineConfig, pluginSsg } from 'minista';
//
// export default defineConfig({
//   plugins: [pluginSsg()],
//
//   resolve: {
//     alias: [{
//       find: '@/',
//       replacement: `${path.resolve('src')}/`,
//     }],
//   },
// });

import path from 'node:path';
import { defineConfig, pluginSsg } from 'minista';

export default defineConfig({
  plugins: [pluginSsg()],

  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `,
      },
    },
  },
});
