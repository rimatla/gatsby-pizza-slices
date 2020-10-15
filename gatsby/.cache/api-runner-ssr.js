var plugins = [{
      plugin: require('/Users/acoelho/Documents/DEV/Gatsby /gatsby-site /gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/acoelho/Documents/DEV/Gatsby /gatsby-site /gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"btkh4e2z","dataset":"production","watchMode":true,"token":"sk0VNnFJMNsiJl3CVVcH3PYrKYZEiQQhMxELuiwE73gMoFM3rByvR1KydRHOTSdK4u9iIyTV2CPLMgWGnc2vKgyGqsppMORtzF8hg8Fm5FxKRIxAGeKuzJZnDYxf8O5V3A4RPwBmFsNt5ZP7C6gZPd2Mmn9wcBlyOHnhVvnUIcqZG2FoNKRW"},
    },{
      plugin: require('/Users/acoelho/Documents/DEV/Gatsby /gatsby-site /gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
