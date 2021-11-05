const generateRandomIndex = (n) => {
    return Math.floor(Math.random() * (n - 5));
}


const getRandomQuestions = (questions)=>{

    console.log(questions);
    let n = questions.length;
    console.log(n);
    let randomIndex = generateRandomIndex(n);

    let randomQuestions = [];
    for(let i = 0; i < 5; i++){
        randomQuestions.push(questions[randomIndex]);
        randomIndex = generateRandomIndex(n);
    }

    return randomQuestions;
}; 

export default getRandomQuestions;

