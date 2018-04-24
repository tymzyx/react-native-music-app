import * as test from './action-type'

export const testAction = (value0, value1) => {
  return {
    type: test.TEST,
    value0,
    value1
  }
};

export const routerAction = (val) => {
  return {
    type: test.ROUTER,
    val
  }
};