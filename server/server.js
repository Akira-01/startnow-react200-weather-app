const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

require('dotenv').config();

 
app.get('/api', (req,res) => {
    //res.send('response from my server')
    //otherwise go get omdb data
    axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ req.query.q + '&units=imperial&APPID=' + process.env.API_KEY)
    .then(r => {
        res.json(r.data);     
    })
    .catch((e) => {
        res.send(e.message);
    });
 });


module.exports = app;

