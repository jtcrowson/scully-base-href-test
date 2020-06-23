import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const postRenderers = [
  'seoHrefOptimise', 
  baseHrefRewrite
];

setPluginConfig(baseHrefRewrite, { href: 'extra/paths/' });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-base-href-test",
  outDir: './dist/static',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};