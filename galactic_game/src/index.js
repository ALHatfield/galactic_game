import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const store = createStore(rootReducer, {}, applyMiddleware(logger));

console.log('store.getState():')
console.log(store.getState());
console.log('=================================')

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();

