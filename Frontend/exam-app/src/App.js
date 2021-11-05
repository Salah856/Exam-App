import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import './App.css';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';
import QuestionsStepper from './components/QuestionsStepper';


let store = createStore(rootReducer);

function App() {

  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(true);
  
  
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Exam App</h1>
        </header>
        {
          show && !submitted && (
            <div style={{marginTop: 200}}>
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  onChange={
                    (e) => {
                      setUserName(e.target.value);
                    }
                  }
        
                />
                <Button
                  color="primary"
                  onClick={() => {
                    setUserName(userName);
                    setShow(false);
                    setSubmitted(true);
                  }}
                > 
                  Submit Name 
                </Button>
            </div>
          )

        }

         {
            userName && submitted && <QuestionsStepper />
         }
       

       
      </div>
    </Provider>
  );
}

export default App;
