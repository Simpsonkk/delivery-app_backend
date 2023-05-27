const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  database: 'dajaur1pi9vbkq',
  username: 'rcihjmmarznelp',
  password: '9f93a46726f5dac54c4eca62192787040adc46fd3cfa86e890262369ca2ccad9',
  host: 'ec2-52-17-31-244.eu-west-1.compute.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
