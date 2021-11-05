import React, { useState } from 'react'; 
import { connect } from 'react-redux';

import { 
    GET_QUESTIONS, 
    ANSWER_QUESTION, 
    GET_FINAL_SCORE 
} from '../redux/actions/types';

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        userAnswers: state.userAnswers, 
        finalScore: state.finalScore, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: (questions) => {
            dispatch({
                type: GET_QUESTIONS,
                payload: questions
            })
        },
        answerQuestion: (answer) => {
            dispatch({
                type: ANSWER_QUESTION,
                payload: answer
            })
        }, 
        getFinalScore: (score) => {
            dispatch({
                type: GET_FINAL_SCORE,
                payload: score
            })
        }
    }
}

const QuestionsStepper = ({questions, getQuestions, answerQuestion}) => {


    return (
        <>
        </>
    );


}; 





export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(QuestionsStepper);



