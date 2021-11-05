import {GET_QUESTIONS, ANSWER_QUESTION, GET_FINAL_SCORE} from '../actions/types'; 

let initialState = {
  questions: [],
  userAnswers: [], 
  finalScore: 0
}; 


const questionReducer = (state = initialState, action) => {
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
    case GET_FINAL_SCORE:
      return {
        ...state,
        finalScore: action.payload.score,
      };
    default:
      return state;
  }
};




export default questionReducer;