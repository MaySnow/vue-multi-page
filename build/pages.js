/**
 * Created by may on 23/10/2017.
 */
const defaultTemp = './template/default.html'
let entryPages = require('./entry-pages.json');
let pagesArr = []

entryPages.forEach(function (item) {
  pagesArr.push({
    filename: item.filename,
    template: defaultTemp,
    chunks: item.chunks
  })
})

module.exports = pagesArr
