export default async (ctx, next) => {
  const locals = {
    title: 'A nodeJS framework starter template with Koa'
  };

  await ctx.render('index', locals);
}
