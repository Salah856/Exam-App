const generateRandomIndex = (n) => {
    return Math.floor(Math.random() * (n - 5));
}


export const getRandomQuestions = (questions)=>{

    let n = questions.length;
    let randomIndex = getRandomQuestions(n);

    let randomQuestions = [];
    for(let i = 0; i < 5; i++){
        randomQuestions.push(questions[randomIndex]);
        randomIndex = generateRandomIndex(n);
    }

    return randomQuestions;
}