import {GET_QUESTIONS, ANSWER_QUESTION} from '../actions/types'; 

let initialState = {
  questions: [],
  userAnswers: [], 
  finalScore: 0
}; 


export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload.questions],
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload.answer],
      };

    default:
      return state;
  }
};




