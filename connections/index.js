const mongoose = require('mongoose');
const config = require('../config');
const orders = mongoose.createConnection(config.MONGO_URI_ORDERS,{ useNewUrlParser: true, useUnifiedTopology: true, });

module.exports = {
    orders
}
