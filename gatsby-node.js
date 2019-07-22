const path = require('path');
const axios = require('axios').default;

exports.createPages = async ({ actions: { createPage } }) => {
  const { data: collections } = await axios.get('http://dkan/api/v1/theme');
  const { data: jsonData } = await axios.get('http://dkan/api/v1/search-index.json');

  createPage({
    path: `/`,
    component: path.resolve('./src/templates/home/index.js'),
    context: { collections }
  })

  createPage({
    path: `/search`,
    component: path.resolve('./src/templates/search/index.js'),
    context: {  }
  })

  jsonData.forEach(data => {
    const dataset = data.doc;
    createPage({
      path: `/dataset/${dataset.identifier}`,
      component: path.resolve('./src/templates/dataset/index.js'),
      context: { dataset }
    })
  });

}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-loader-advanced/,
            use: loaders.null(),
          },
          {
            test: /react-loading-spin/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}