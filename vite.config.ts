/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
    include: ['src'],
    exclude: ['src/**/*.stories.tsx', 'src/**/*.stories.ts', 'src/**/*.test.tsx'],
    tsconfigPath: './tsconfig.app.json'
  })],
  resolve: {
    alias: {
      // This forces the SDK to use the app's exact copy of React
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  build: {
    emptyOutDir:true,
    lib: {
      entry:{
        ui:path.resolve(__dirname,'src/ui/index.ts'),
        core: path.resolve(__dirname,'src/core/index.ts')
      },
      // entry: path.relative(__dirname, '/src/index.ts'),
      name: 'WebInceptionSDK',
      formats: ['es', 'cjs'],
      fileName: (format,entry) => `${entry}.${format}.js`,
      
      cssFileName: 'style'
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});