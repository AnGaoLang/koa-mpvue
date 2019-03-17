// 根据洋葱圈模型，保证该中间件在最外层，即第一个中间件。
// 首次出发后，await等待其他中间件执行完成，最后结束时被调用，然后得出时间差。即整个请求耗时。
module.exports = async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const end = new Date().getTime();
    console.log(end - start);
}