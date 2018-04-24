import * as test from './action-type'

let defaultState = {
  value0: '',
  value1: '',
  route: ['私人FM', 321, 123]
};

export const testReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case test.TEST:
      return {...state, ...{value0: action.value0, value1: action.value1}};
    case test.ROUTER:
      return {...state, ...{route: action.val}};
    default:
      return state;
  }
};