# vue-multi-page

> vue multi page

## 多页面配置

需要在pages文件下添加多页面，并且文件夹下必须有且仅有一个entry.js,entry.js为这个多页面的单页面入口，在统计目录下的conf.json为html-webpack-plugin的自定义options,例如：title、keywords等

例如：

路径```/a.html```需要在```pages```文件夹下新建文件夹```a```并在```a```文件夹下新建入口文件```entry.js```

路径```/a/a-a.html```需要在```pages```文件夹下新建文件夹```a```在```a```文件夹下建```a-a```并在```a-a```文件夹下新建入口文件```entry.js```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build之后的文件预览
npm run preview

```

## css预加载配置

1、sass配置

``` bash
npm install node-sass --save-dev

npm install sass-loader --save-dev
```

2、less配置

``` bash
npm install less --save-dev

npm install less-loader --save-dev
```

然后在对应的组件或者视图的style标签加上lang

``` html
<style lang="sass" scoped>
    .....
</style>
```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
