const express = require('express');
const router = express.Router();
const { orders } = require('../connections/index')


router.post('/',(req,res) => {
    orderId = req.body.orderId;
    orders.collection('orders').findOne({ orderId }).then(order => {
        if(!order){
            return res.status(404).json({ status: "No such order id" })
        }
        timeOfOrder = order.date;
        timeNow = Date.now();
        diff = Math.abs(timeOfOrder - timeNow) / 36e5;
        if(0 <= diff <= 15){
            return res.json({
                success:true,
                status:'Your delicious pizza is being prepared'
            })
        }
        else if(15 < diff <= 35){
            return res.json({
                success:true,
                status:`Your delicious pizza is on its way. It'll be there in ${35-diff} minutes`
            })
        }
        else{
            return res.json({
                success:true,
                status:'We accept and apologize that we have failed to deliver the pizza on time. You can now have it for free'
            })
        }
    });
})

module.exports = router;
