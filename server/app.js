import Koa from 'koa';
import chalk from 'chalk';
import Router from 'koa-router';
import path from 'path';
import views from 'koa-views';
import bodyParser from 'koa-bodyparser';
import koaStatic from 'koa-static';
import koaSession from 'koa-session';

import router from './router';
import { logger } from './middleware';
import db from './db';

const app = new Koa();
const port = process.env.PORT || 3000;

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../public';

// Koa session
const sessionConfig = {
  key: 'SESSIONID',
  maxAge: 30 * 60 * 1000,
};

db.useDb();

app.use(bodyParser());

app.use(views(path.join(__dirname, './views'), { extension: 'pug' }));

app.use(router.routes()).use(router.allowedMethods());

app.use(koaStatic(path.join( __dirname,  staticPath)));

app.use(koaSession(sessionConfig, app));

// Middleware
logger(app);

app.listen(port, () => {
  console.log(chalk.green(`[Koa] App is starting at port ${port}`));
});
