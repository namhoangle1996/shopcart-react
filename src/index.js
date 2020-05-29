import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux" ;
import {Provider} from "react-redux" ;
import rootReducer from "./redux/reducers/rootReducer"
import { BrowserRouter } from 'react-router-dom'
import {composeWithDevTools} from 'redux-devtools-extension';
import index from "./redux/reducers";


const store = createStore(index, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
