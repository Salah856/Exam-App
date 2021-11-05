import React, {useState, useEffect} from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/index';


let store = createStore(rootReducer);

function App() {

  const [userName, setUserName] = useState('');
  useEffect(() => {
    let name = prompt('Enter your name');
    
    name && setUserName(name);
   
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </Provider>
  );
}

export default App;
