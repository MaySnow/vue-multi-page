/**
 * Created by may on 26/09/2017.
 */
const path = require('path');
const glob = require('glob');
const jsonfile = require('jsonfile');
const fs = require('fs');


let files = glob.sync('*/index.js', {
  cwd: path.join(__dirname,'../src/pages')
});

let obj = {};
let pageArr = [];

files.forEach(function(file){
  let fileName = file.replace('/index.js','');
  obj[fileName] = `./src/pages/${file}`;
  pageArr.push({
    filename: `${fileName}.html`,
    chunks:[fileName]
  });
});

jsonfile.writeFile(path.join(__dirname,`./entry-path.json`), obj, function (err) {
  if(err) {
    console.log(`生成entry-path.json文件失败`);
    console.error(err);
    return
  }
  console.log(`生成entry-path.json文件成功`);
});

jsonfile.writeFile(path.join(__dirname,`./entry-pages.json`), pageArr, function (err) {
  if(err) {
    console.log(`生成entry-pages.json文件失败`);
    console.error(err);
    return
  }
  console.log(`生成entry-pages.json文件成功`);
})




