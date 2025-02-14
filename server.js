const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Posts= require('./routes/api/Posts');

const app= express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB config

mongoose.connect('mongodb+srv://dinesh:WlTdTgnQ8E4TwcvQ@cluster0-ez8ix.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }, {useMongoClient: true});
 
mongoose.Promise = global.Promise;
//User Routes

app.use('/api',Posts)


const PORT= process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
