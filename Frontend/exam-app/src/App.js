import React, {useState, useEffect} from 'react';
import './App.css';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';
import QuestionsStepper from './components/QuestionsStepper';


let store = createStore(rootReducer);

function App() {

  const [userName, setUserName] = useState('');
  
  let name = prompt('Enter your name');
    
  name && setUserName(name);
   
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>Exam App</h1>
        </header>
        
       {
         userName && <QuestionsStepper />
       }

       
      </div>
    </Provider>
  );
}

export default App;
