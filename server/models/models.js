const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Shops = sequelize.define('shops', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  shop: { type: DataTypes.STRING, unique: true },
});

const Products = sequelize.define('products', {
  productId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  img: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
  shopId: { type: DataTypes.INTEGER, primaryKey: true },
});

const Orders = sequelize.define('orders', {
  orderNumber: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  shopId: { type: DataTypes.STRING},
  productsIdsAndQuantity: { type: DataTypes.STRING },
  totalPrice: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
});

Shops.hasMany(Products);
Products.belongsTo(Shops);

module.exports = {
  Shops,
  Products,
  Orders,
};
