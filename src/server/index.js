const Koa = require('koa');
const indexRouters = require('./router/index');
const movieRouters = require('./router/movies');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(bodyParser());
app.use(indexRouters.routes());
app.use(movieRouters.routes());

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;