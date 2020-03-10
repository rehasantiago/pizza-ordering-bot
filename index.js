const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require('morgan');
const app = express()

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(function(req,res,next){
    console.log(req.body);
    next();
})

const saveData = require('./routes/saveData.js');
app.use('/saveData',saveData);

const status = require('./routes/status');
app.use('/status',status);

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
