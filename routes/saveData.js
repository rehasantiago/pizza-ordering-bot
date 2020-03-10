const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

function orderNumber() {
    let now = Date.now().toString()
    now += now + Math.floor(Math.random() * 10)
    return  [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-')
  }


router.post('/',(req,res) => {
    const newOrder = new Order({
        kind:req.body.kind,
        pizzaName:req.body.pizzaName,
        size:req.body.size,
        topping:req.body.topping,
        phoneNumber:req.body.phoneNumber,
        name:req.body.name,
        address:req.body.address,
        orderId:orderNumber()
    });
    newOrder
        .save()
        .then(order => {
            res.json({
                sucess:true,
                orderId:order.orderId
            })
        }).catch(err => {
            res.send({
                success:false,
                err
            });
        });
});

module.exports = router;
