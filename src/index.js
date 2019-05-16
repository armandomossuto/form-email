import 'app-module-path/register';

import express from 'express';
import bodyParser from 'body-parser';
import { port } from 'configuration.js'

import router from './router.js';

const app = express();

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'POST');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.use(bodyParser.json());

app.use('/', router);
