const express = require('express');
const sequelize = require('./server/db');
const models = require('./server/models/models');
const cors = require('cors');
const router = require('./server/routes/index');

const port = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
