const router = require('koa-router')();

const listingsController = require('../controllers/listingsController');
const { catchErrors } = require('../handlers/errorHandlers');

router
  .get('/listings', catchErrors(listingsController.getListings))
  .post('/listings', catchErrors(listingsController.createListing))
  .put('/listings/:id', catchErrors(listingsController.editListing));

module.exports = router;
