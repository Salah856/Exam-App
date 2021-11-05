import React, {useState, useEffect} from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useHistory,
} from "react-router-dom";


import rootReducer from './redux/reducers/index';
import QuestionsStepper from './components/questionsStepper';


let store = createStore(rootReducer);

function App() {

  const history = useHistory();

  const [userName, setUserName] = useState('');
  useEffect(() => {
    let name = prompt('Enter your name');
    
    name && setUserName(name) && history.push('/questions');
   
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <Router>
          <Switch>
            <Route path="/">

            </Route>
            <Route path="/questions">
              <QuestionsStepper />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
