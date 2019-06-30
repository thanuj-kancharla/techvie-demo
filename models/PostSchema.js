const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const postSchema = new mongoose.Schema({
    
        title:{
         type: String,
         required: true
     },
        date:{
            type: Date,
            default: Date.now
        }     
    });
    const User = mongoose.model("post", postSchema);
    module.exports = User;