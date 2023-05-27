const Router = require('express');
const router = new Router();
const productsController = require('../controllers/productsController');

router.get('/:id', productsController.getProducts);

module.exports = router;
