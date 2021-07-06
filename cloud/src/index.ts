import * as mqtt from './utils/mqtt'
mqtt.connect()

import { subscribe } from './functions/subscribe'
subscribe()

import express from 'express'
const bodyParser = require('body-parser');
const app = express();

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000; 

const router = require('./routes/');
app.use('/', router);

// launch server
app.listen(port);
console.log('listen on port ' + port);

