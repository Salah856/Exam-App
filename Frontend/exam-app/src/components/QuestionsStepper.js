/* eslint-disable import/first */
import React, { useState } from 'react'; 
import {
    Box, Stepper, Step, StepLabel, 
    StepContent, Button, Typography,
    Radio, RadioGroup, FormControl,
    FormLabel, FormControlLabel,
} from '@material-ui/core'; 

import { connect } from 'react-redux';
import questions from '../db'; 

import  getRandomQuestions  from '../utils/getRandomQuestions';
import  getCorrectAnswers  from '../utils/getCorrectAnswers';   
import matchArrays from '../utils/matchArrays';

const randomQuestions = getRandomQuestions(questions);
const correctAnswers = getCorrectAnswers(randomQuestions);
console.log(randomQuestions, correctAnswers);

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

    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [usersAnswers, setUsersAnswers] = useState([]);


    const [activeStep, setActiveStep] = useState(0);


    const handleSelectAnswer = (e) => {
        let answer = e.target.value;
        setSelectedAnswer(answer);
        if (!usersAnswers.includes(answer)) {
            setUsersAnswers([...usersAnswers, answer]);
        }
    }; 


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    
    
    
    return (

    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
              <StepContent>
                <Typography>{randomQuestions[index].text}</Typography>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Answers</FormLabel>
                    <RadioGroup
                      aria-label="answers"
                      defaultValue=""
                      name="radio-buttons-group"
                    ></RadioGroup>

                 {
                    randomQuestions[index].answers.map((answer) => {
                      return (
                        <FormControlLabel 
                              value={answer}
                              control={<Radio />} 
                              label={answer} 
                          />
                        )
                     })
                 }
                 </FormControl>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All questions completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>

    );


}; 



export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(QuestionsStepper);



