const express = require('express');
const dotenv = require('dotenv');
const { request } = require('express');

//load env vars
dotenv.config({path:'C:\VacQ\config\config.env'});

const app = express();

//for hospitals
const hospitals = require('./routes/hospitals');
app.use('/api/v1/hospitals',hospitals);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server running in', process.env.NODE_ENV, 'mode on port', PORT));