import {GET_QUESTIONS, ANSWER_QUESTION, GET_FINAL_SCORE} from './types';

const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    payload: questions
  }
}; 


const answerQuestion = (question) => {
  return {
    type: ANSWER_QUESTION,
    payload: question
  }
};

const getFinalScore = (score) => {
  return {
    type: GET_FINAL_SCORE,
    payload: score
  }
};

export const questionActions = {
    getQuestions, 
    answerQuestion,
    getFinalScore, 
};



