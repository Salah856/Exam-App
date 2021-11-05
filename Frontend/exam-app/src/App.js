import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core';
import './App.css';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';
import QuestionsStepper from './components/QuestionsStepper';


let store = createStore(rootReducer);

function App() {

  const [userName, setUserName] = useState('');
  
  
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Exam App</h1>
        </header>
        {
          !userName && <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            onChange={(e) => setUserName(e.target.value)}
      
          />
        }

         {userName && <QuestionsStepper />}
       

       
      </div>
    </Provider>
  );
}

export default App;
