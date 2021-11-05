import {GET_QUESTIONS} from '../actions/types'; 

let initialState = {
  questions: [],
  userAnswers: [], 
}; 


export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload.questions],
      };
  }
};




