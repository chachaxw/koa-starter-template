import koaLogger from 'koa-logger';

/**
 * Logger middleware
 */
export default async (app) => {
  app.use(koaLogger((str) => {
    console.log(str);
  }));
};
