# Learn TypeScript Website

This is the code behind the Learn TypeScript Website: https://www.learn-typescript.dev.

## Build

* execute `yarn install`
* execute `npm run build` to run the development version locally
* execute `npm run build:prod` to build the production version (put under public/)

GraphiQL: http://localhost:8000/___graphql

## Publish

* `git tag <version>`
* `git push --tags`
* Netlify: `git push` ;-)
* Old way: Github pages
  * execute `npm run deploy`

## Metadata

Adapt metadata.js

## Images

Loaded through GraphQL with Gatsby Image. Generates various sizes etc automatically.

Plugin used:

* https://www.gatsbyjs.org/packages/gatsby-image/
* https://codebushi.com/using-gatsby-image/
* https://using-gatsby-image.gatsbyjs.org/
* https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/

SVGs:

* Under `src/assets/images/svg`
* Loaded using a require call and a specific Webpack loader (requires a tslint ignore)

## TODO
* Create site layout
* Footer links (use metadata)
* Replace favicon
* Replaces icons under public/icons
* Setup netlify
  * Register site here: https://app.netlify.com/teams/dsebastien/sites
* SEO: https://www.gatsbyjs.org/docs/add-seo-component/
  * https://www.gatsbyjs.org/docs/seo/
* i18n: https://www.npmjs.com/package/gatsby-plugin-i18n
  * https://www.npmjs.com/package/react-intl
* Add news support
  * https://github.com/gatsbyjs/gatsby-starter-blog
  * markdown support with remark: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark
  * inspiration: https://github.com/scttcper/gatsby-casper (reading time, tag page, subscribe, author page)
  * https://www.npmjs.com/package/gatsby-remark-responsive-iframe
* PWA: https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/
* Lighthouse audit: https://developers.google.com/web/tools/lighthouse/
* Check pagespeed: https://developers.google.com/speed/pagespeed/insights/
* Check structured data: https://search.google.com/structured-data/testing-tool/u/0/
* Add GreenKeeper
* Improve 404, add image
  * link \*** import {Link} from 'gatsby';
  * <Link to="/" className="logo" aria-label="Learn TypeScript logo"><strong>Learn TypeScript</strong></Link>
* Add typechecking for graphql queries: https://www.gatsbyjs.org/docs/static-query/
  * do it using io-ts
* Add "tslint-sonarts", to tslint.json once this is fixed: https://github.com/AdamLeBlanc/gatsby-plugin-ts-loader/issues/2
  * and adapt package.json tslint script
  * and remove tslint-npm.json
* add keyboard support on services page (go from one block to the next): https://www.npmjs.com/package/react-hotkeys)
* CSP: remove unsafe-inline on styles
