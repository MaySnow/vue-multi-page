/**
 * Created by may on 23/10/2017.
 */
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const merge = require('webpack-merge')
const defaultConf = require('./conf.default.json')

let files = glob.sync('**/*/entry.js', {
  cwd: path.join(__dirname,'../../src/pages')
});

let obj = {};
let pageArr = [];

files.forEach(function(file){
  let fileName = file.replace('/entry.js','');
  obj[fileName] = `./src/pages/${file}`;

  let pageHtml = merge(defaultConf,{
    filename: `${fileName}.html`,
    chunks:[fileName]
  })

  //html-webpack-plugin的手动配置路径
  let selfConf = path.join(__dirname,`../../src/pages/${fileName}/conf.json`)

  if(fs.existsSync(selfConf)) {
    pageHtml = merge(pageHtml,require(selfConf))
  }

  pageArr.push(pageHtml)
});

module.exports = {
  entryPath: obj,
  entryPages: pageArr
};

