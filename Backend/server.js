const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./controllers/exam'); 
import { MongoConnection } from './db/mongoService';


app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


app.listen(4000, function () {
    console.log('Example app listening on port 3000!');
    MongoConnection.connect(app);
});




