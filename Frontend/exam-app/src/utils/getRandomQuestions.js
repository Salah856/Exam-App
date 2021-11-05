const generateRandomIndex = (n) => {
    return Math.floor(Math.random() * (n - 5));
}


const getRandomQuestions = (questions)=>{

    console.log(questions);
    let n = questions.length;
    let randomIndex = generateRandomIndex(n);

    let randomQuestions = questions.slice(randomIndex, randomIndex + 5);
    console.log(randomQuestions);
    return randomQuestions;
}; 

export default getRandomQuestions;

