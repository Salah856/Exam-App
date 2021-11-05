const mongoose = require('mongoose');

require('dotenv').config();

class MongoConnection{

    
    constructor(){
    }
    
    connect(){
        
        mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@cluster0.lum93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        .then(() => {
            console.log('db connected'); 
        }).catch(err => {
            console.log(err); 
        }); 
    }
}


module.exports={ MongoConnection }; 