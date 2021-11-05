const express = require('express');
const router  = express.Router(); 
import { Question } from '../models/question'; 
import getRandomIndex from '../utils/getRandomIndex';


router.get('/questions', (req, res) => {

    let count = Question.count(); 
    let randomIndex =  getRandomIndex(count);

    if (count > 10){
        Question.find().skip(randomIndex).limit(10).toArray((err, questions) => {
            if (err) {
                console.log(err);
            } else {
                res.json(questions);
            }
        });
    } else {
        res.json([])
    }
})



export default router;
