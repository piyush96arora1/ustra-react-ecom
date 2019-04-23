import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootReducer} from './store/RootReducer.ts'

import {createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './saga/RootSaga.ts'
import { Provider } from 'react-redux'
const sagaMiddleware = createSagaMiddleware()
const store=createStore(RootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



