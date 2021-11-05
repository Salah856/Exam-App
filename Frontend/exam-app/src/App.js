import React, {useState, useEffect} from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import { browserHistory } from 'react-router'

import rootReducer from './redux/reducers/index';
import QuestionsStepper from './components/questionsStepper';


let store = createStore(rootReducer);

function App() {

  
  let name = prompt('Enter your name');
    
  name && browserHistory.push(`/questions/`);
   
  
  return (
    <Provider store={store}>
      <div className="App">
        <header>
        </header>
        <Router>
          <Routes>
            <Route path="/">
             
              </Route>
            <Route path="/questions">
              <QuestionsStepper />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
