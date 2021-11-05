import {GET_QUESTIONS, ANSWER_QUESTION} from './types';

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

export const questionActions = {
    getQuestions, 
    answerQuestion,
};



