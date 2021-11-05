import React, {useState, useEffect} from 'react';
import './App.css';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import rootReducer from './redux/reducers/index';
import QuestionsStepper from './components/QuestionsStepper';

let history= createBrowserHistory();

let store = createStore(rootReducer);

function App() {

  
  let name = prompt('Enter your name');
    
  name  && history.push(`/questions`);
   
  
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Exam App</h1>

        </header>
        <Router>
          <Routes>
            <Route exact path="/questions" component={QuestionsStepper}>
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
