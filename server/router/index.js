import Router from 'koa-router';

import HomeController from '../controller';

const router = new Router();

router.get('/', HomeController);

export default router;
