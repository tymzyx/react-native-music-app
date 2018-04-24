import {createStore, combineReducers} from 'redux'
import * as test from './test/reducer'

// let store = createStore(
//     combineReducers({...test})
// );

export default function getStore(navReducer) {
  return createStore(
    combineReducers({...test, ...{nav: navReducer}})
  );
};