const Koa = require('koa');
const Router = require('koa-router');
const koaLog = require('./koa-log');

const app = new Koa();
const router = new Router();
function delay (word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`hellow${word}`);
        }, 2000);
    });
};

// // 最简陋的路由
// app.use((ctx) => {
//     ctx.request.url === '/' ? ctx.body = '<div style="color:red;">首页</div>' : '';
//     ctx.request.url === '/routerOne' ? ctx.body = '<div style="color:green;">routerOne</div>' : '';
//     ctx.request.url === '/routerTwo' ? ctx.body = '<div style="color:yellow;">routerTwo</div>' : '';
// })

// koa-router
router.get('/routerOne', (ctx, next) => {
    ctx.body = '<div style="color:green;">routerOne</div>';
})
app.use(router.routes()).use(router.allowedMethods());

// koa-log中间件
app.use(koaLog);
// 135642,洋葱圈模型，先执行next()之前的135,执行完毕后再回过头执行642;
app.use(async (ctx, next) => {
    ctx.body = '1';
    await delay('one');
    // 执行下一个中间件，若去除next(),请求将在当前use里终止，不去执行下一个中间件，即3之后的中间件；
    await next();
    ctx.body += '2';
})

app.use(async (ctx, next) => {
    ctx.body += '3';
    // await delay('two');
    next(); // 135462 该处未加await，为等下一个中间件执行完便先执行了下一个语句4，然后再执行6
    ctx.body += '4'
})

app.use(async (ctx, next) => {
    ctx.body += '5';
    // await delay('one');
    await next();
    ctx.body += '6';
})

app.listen(3000);

