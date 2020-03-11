// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const {dialogflow} = require('actions-on-google');
const axios = require('axios');

const app = dialogflow({ debug: true });

const details = {};

app.intent('Veg', (conv, params) => {
  if(params['kind-veg']){
    details.kind = 'Veg';
  }
});

app.intent('Non-veg', (conv, params) => {
  if(params['kind-nonveg']){
    details.kind = 'Non veg';
  }
});

app.intent('Chosen-pizza', (conv,params) => {
	if(params['pizza-name']){
    	details.pizzaName = params['pizza-name'];
    }
});

app.intent('Chosen-pizza-nonveg', (conv,params) => {
	if(params['pizza-name']){
    	details.pizzaName = params['pizza-name'];
    }
});

app.intent('Size', (conv,params) => {
	if(params['size']){
    	details.size = params['size'];
    }
});

app.intent('Size-nonveg', (conv,params) => {
	if(params['size']){
    	details.size = params['size'];
    }
});

app.intent('Count', (conv,params) => {
	if(params['toppings-veg']){
    	details.topping = params['topping-veg'];
    }
});

app.intent('Count-nonveg', (conv,params) => {
	if(params['toppings-nonveg']){
    details.toppings = params['topping-nonveg'];
  	}
});

app.intent('Name', (conv,params) => {
	if(params['number']){
    	details.number = params['number'];
    }
});

app.intent('Phone-number',(conv,params) => {
	if(params['given-name']){
    details.name = params['given-name'];
    }
});

app.intent('Address',(conv,params) => {
  if(params['phone-number']){
  	details.phoneNumber = params['phone-number'];
  }
});

app.intent('Done',async(conv,params) => {
	if(params['address']){
    	details.address = params['address'];
      	conv.ask('Awesome');
      	console.log(details);
      	const result = await axios.post('https://yoyopi55a.herokuapp.com/saveData/',details,{
      	headers:{"Content-Type": "application/json"}
    	});
        await result.then((res) => {
        	if(res.data.success){
              	details.orderId = res.data.orderId;
              	conv.ask("great");
              	conv.ask(`Your order id is ${res.data.orderId}. You can ping me with this order id to know the status of your pizza`);
            }
        }).catch(err => {
        	conv.ask('Sorry a problem occured. Can you please place the order again');
        });
    }
});

app.intent('Status',(conv) => {
	axios.post('https://yoyopi55a.herokuapp.com/status/',{orderId:details.orderId},{
      	headers:{"Content-Type": "application/json"}
    	}).then(res => {
			conv.ask(res.data.status);
		}).catch(res => {
            conv.ask('Sorry a problem occured. Can you please place the order again');
        });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
