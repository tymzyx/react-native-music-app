import React,{Component} from 'react'

import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native'

import {TabNavigator, TabBarTop, TabBarBottom} from 'react-navigation'
import DiscoveryDefault from './discovery/default'

import CommonHead from '../Components/CommonHead/CommonHead'
import VideoScreen from "./video";
import MineScreen from "./mine";

const Tab = TabNavigator(
  {
    Home: {
      screen: DiscoveryDefault,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '发现音乐',
      })
    },
    Video: {
      screen: DiscoveryDefault,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '主播电台',
      })
    }
  },
  {
    tabBarComponent: TabBarTop,
    tabBarPosition:'top',
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#C20C0C',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
      },
      labelStyle: {
        fontSize: 16, // 文字大小
      },
      indicatorStyle: {
        backgroundColor: '#C20C0C',
      }
    }
  }
);

class Home extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.homeWrapper}>
        <CommonHead/>
        <View style={styles.homeMain}>
          <Tab />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeMain: {
    flex: 1,
    top: 49,
    width: Dimensions.get('window').width,
  }
});

export default Home;