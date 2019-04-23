const express = require('express');

// Express 4.16 부터 body-parser 기본제공
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const config = require('./config')
let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.set('jwt-secret', config.secret);

app.use('/api', require('./routes/api'));
 
app.listen(port, () => {
    console.log(`Express is running on port ${port}`);
});

// mongoDB 연결
mongoose.connect(config.mongodbUri, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})