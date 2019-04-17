const Koa = require("koa");
const app = new Koa();
const { looksImgSame } = require("./looks-same");
// response
app.use(ctx => {
  ctx.body = "Hello Koa";
  looksImgSame();
});

app.listen(3009);
