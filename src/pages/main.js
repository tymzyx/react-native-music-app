import React, { Component } from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation'

import {Provider} from 'react-redux'
import getStore from '../store/store'

import Tab from '../Components/Tab/Tab'
import Player from './common/player'

const MainComponent = StackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: {
        header: null,
      }
    },
    Player: {
      screen: Player,
      navigationOptions: {

      }
    }
  },
  {
    initialRouteName: 'Tab'
  }
);

const navReducer = (state, action) => {
  const newState = MainComponent.router.getStateForAction(action, state);
  return newState || state;
};

let store = getStore(navReducer);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    )
  }
}

export default Main;