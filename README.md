# Scully baseHrefRewrite Plugin Test

I am attempting to use the baseHrefRewrite plugin to rewrite all of my router links to prefix a given path.  

The use case is that I will be publishing to a GitHub pages instance that appends `/<owner>/<repository>/` to each path.  Currently with this project, when attempting to navigate to `./blogs/test-blog` from the home component, I get navigated to `/blogs/test-blog` instead of my desired route of `/<owner>/<repository>/blogs/test-blog`.

I am attempting to install the baseHrefRewrite plugin globally for all routes to acheive this.

After following the instructions in the baseHrefRewrite README to integrate the plugin into my scully config, I get the following error during `npm run scully`:

> **Plugin "baseHrefRewrite" of type "undefined" is not found, can not store config**

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `ng build && npm run scully`
4. Notice the scully command fails due to the above noted error

## How this project was created

1. `ng new scully-base-href-test`
2. Follow instructions on how to create a scully blog in the getting started page on scully.io
3. Follow instructions to install baseHrefRewrite plugin from the README here: https://github.com/scullyio/scully/blob/main/libs/plugins/base-href-rewrite/README.md