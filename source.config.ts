import { defineConfig, defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      // Invert shiki themes so code surfaces contrast with the page surface
      // (light page → dark code block; dark page → light code block).
      themes: {
        light: 'github-dark',
        dark: 'github-light',
      },
      addLanguageClass: true,
    },
  },
});
