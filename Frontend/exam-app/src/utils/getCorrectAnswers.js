const getCorrectAnswers = (questions) => {
  
    const correctAnswers = [];
  
  questions.forEach((question) => {
    if (question.correct) {
      correctAnswers.push(question.correct);
    }
  });

  return correctAnswers;
};

export default getCorrectAnswers; 
