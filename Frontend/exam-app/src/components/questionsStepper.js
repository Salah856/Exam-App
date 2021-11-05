import React, { useState } from 'react'; 
import { connect } from 'react-redux';
import {
    Box, 
    Stepper, 
    Step,
    StepLabel,
    StepContent,
    Button,
    Typography,
    RadioButtonGroup,
    RadioButton,
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    FormHelperText,
    TextField,
} from '@material-ui/core'; 


const steps = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
]; 


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

const QuestionsStepper = ({
        questions,
        userAnswers,
        finalScore, 
        getQuestions, 
        answerQuestion, 
        getFinalScore, 
    }) => {


    return (
        <>
        </>
    );


}; 





export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(QuestionsStepper);



