import { applyMiddleware, createStore } from 'redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

const devtools: any = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devtools);
