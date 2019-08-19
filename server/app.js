import Koa from 'koa';
import chalk from 'chalk';
import Router from 'koa-router';
import path from 'path';
import views from 'koa-views';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';
import koaSession from 'koa-session';

import HomeController from './controller';
import db from './db';

const app = new Koa();
const router = new Router();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../public';

// Koa session
const sessionConfig = {
  key: 'SESSIONID',
  maxAge: 30 * 60 * 1000,
};

db.useDb();

router.get('/', HomeController);

app.use(bodyParser());

app.use(views(path.join(__dirname, './views'), { extension: 'pug' }));

app.use(router.routes()).use(router.allowedMethods());

app.use(koaStatic(path.join( __dirname,  staticPath)));

app.use(koaSession(sessionConfig, app));

app.listen(3000, () => {
  console.log(chalk.green('App is starting at port 3000'));
});
