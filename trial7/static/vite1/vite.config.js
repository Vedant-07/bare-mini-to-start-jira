// vite.config.js
export default {
  build: {
    jsxInject: `import React from 'react';`,
    rollupOptions: {
      input: "./index.html", // Adjust the path accordingly
    },
  },
};
