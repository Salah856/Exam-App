const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());

app.get('/get-questions', (req, res)=>{


    res.json()
});





app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


