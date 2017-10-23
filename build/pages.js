/**
 * Created by may on 23/10/2017.
 */
const defaultTemp = './template/default.html'
let entryPages = require('./entry-pages.json');
let pagesArr = []

entryPages.forEach(function (item) {
  let curTemp = defaultTemp;
  if(item.filename === 'b.html') {
    curTemp = './template/bTemp.html'
  }
  pagesArr.push({
    filename: item.filename,
    template: curTemp,
    chunks: item.chunks
  })
})

module.exports = pagesArr
