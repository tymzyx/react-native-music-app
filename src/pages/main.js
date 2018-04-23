import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation'

import Tab from '../Components/Tab/Tab'

const MainComponent = StackNavigator(
  {
    Tab: {screen: Tab},
  },
  {
    navigationOptions: {
      header: null,
    }
  }
);

class Main extends Component {
  render() {
    return (
      <MainComponent />
    )
  }
}

export default Main;