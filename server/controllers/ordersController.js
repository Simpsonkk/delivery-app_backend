const { Orders } = require('../models/models');

class OrdersController {
  async setOrders(req, res) {
    const body = {
      ...req.body,
      productsIdsAndQuantity: JSON.stringify(req.body.productsIdsAndQuantity),
    };
    const orders = await Orders.create(body);
    return res.json(orders);
  }
  async getOrders(req, res) {
    const email = req.params.email;
    const orders = await Orders.findAll({
      where: {
        email,
      },
    });
    return res.json(orders);
  }
}

module.exports = new OrdersController();
