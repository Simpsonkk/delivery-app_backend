const Router = require('express');
const router = new Router();
const ordersController = require('../controllers/ordersController');

router.post('/', ordersController.setOrders);
router.get('/:email', ordersController.getOrders);

module.exports = router;
