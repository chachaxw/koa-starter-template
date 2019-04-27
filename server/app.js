import Koa from 'koa';
import Pug from 'koa-pug';

const app = new Koa();

const config = {
  locals: {
    title: 'Koa Starter Template'
  }
};
const pug = new Pug(Object.assign({}, config, { viewPath: './server/views/' }));
pug.use(app);
pug.render('index');

app.listen(3000);
