'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());

app.use('/dist', express.static(__dirname + '/dist/'));
app.use('/', express.static(__dirname + '/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
