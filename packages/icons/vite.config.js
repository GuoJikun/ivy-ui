import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const getPagePathList = () => {
  const pages = readdirSync(resolve(__dirname, 'src/components'));
  let map = {};
  pages.forEach(c => {
    const t = c;
    map[t.replace('.js', '')] = resolve(__dirname, 'src/components', c);
  });

  return map;
};

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.js',
        ...getPagePathList(),
      },
      formats: ['es', 'cjs'],
      fileName(format, entryName) {
        console.log(format, entryName);
        if (format === 'es') {
          if (entryName === 'index') {
            return `index.js`;
          } else {
            return `es/${entryName}.js`;
          }
        } else if (format === 'cjs') {
          if (entryName === 'index') {
            return `index.cjs.js`;
          } else {
            return `cjs/${entryName}.js`;
          }
        }
      },
    },
  },
});
