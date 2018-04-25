import React, { Component } from 'react';
import {StackNavigator, addNavigationHelpers, NavigationActions} from 'react-navigation'

import {Provider, connect} from 'react-redux'
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

// const action0 = MainComponent.router.getActionForPathAndParams('Tab');
// const state0 = MainComponent.router.getStateForAction(action0);
// const action1 = MainComponent.router.getActionForPathAndParams('Player');
// const state1 = MainComponent.router.getStateForAction(
//   action1,
//   state0
// );

const navReducer = (state, action) => {
  let newState;
  // debugger
  console.log('dispatch');
  switch (action.type) {
    case 'player':
      newState = MainComponent.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Player'}),
        state
      );
      break;
    default:
      newState = MainComponent.router.getStateForAction(action, state);
  }
  return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});
class App extends Component {
  render() {
    return (
      <MainComponent
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}
const AppWithNavigationState = connect(mapStateToProps)(App);

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