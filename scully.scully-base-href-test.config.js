"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scully_1 = require("@scullyio/scully");
var scully_plugin_base_href_rewrite_1 = require("@scullyio/scully-plugin-base-href-rewrite");
var postRenderers = [
    'seoHrefOptimise',
    scully_plugin_base_href_rewrite_1.baseHrefRewrite
];
scully_1.setPluginConfig(scully_plugin_base_href_rewrite_1.baseHrefRewrite, { href: 'extra/paths/' });
exports.config = {
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
