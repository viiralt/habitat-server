require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const logger = require('koa-logger');

const errorHandlers = require('./handlers/errorHandlers');

require('./db');

const app = new Koa();
const router = require('./routes/');

app
  .use(logger())
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(errorHandlers.notFound)
  .use(errorHandlers.validationErrors)
  .use(router.allowedMethods());

if (process.ENV === 'development') {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

const server = app.listen(process.env.PORT, () => {
  console.log(`Habitat API now serving → PORT ${server.address().port}`);
});

module.exports = app;
