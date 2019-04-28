import Koa from 'koa';
import Router from 'koa-router';
import path from 'path';
import views from 'koa-views';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';

import HomeController from './controller';

const app = new Koa();
const router = new Router();
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../public';

router.get('/', HomeController);

app.use(bodyParser());

app.use(views(path.join(__dirname, './views'), { extension: 'pug' }));

app.use(router.routes()).use(router.allowedMethods());

app.use(koaStatic(path.join( __dirname,  staticPath)));

app.listen(3000, () => {
  console.log('App is starting at port 3000');
});
