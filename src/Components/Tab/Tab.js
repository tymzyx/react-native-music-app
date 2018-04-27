// Main Tab

import React from 'react'
import {TabNavigator, TabBarBottom} from 'react-navigation'

import HomeScreen from '../../pages/home'
import VideoScreen from '../../pages/video'
import MineScreen from '../../pages/mine'
import AccountScreen from '../../pages/account'
import TabBarItem from './TabBarItem'

const Tab = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem icon="yinlemusic217" color={tintColor}/>
        )
      })
    },
    Video: {
      screen: VideoScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '视频',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem icon="shipin" color={tintColor}/>
        )
      })
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem icon="shoucang1" color={tintColor}/>
        )
      })
    },
    Friend: {
      screen: VideoScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '朋友',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem icon="pengyou" color={tintColor}/>
        )
      })
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '账号',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem icon="zhanghaoguanli" color={tintColor}/>
        )
      })
    }
  },
  {
    initialRouteName: 'Account',
    tabBarComponent: TabBarBottom,
    tabBarPosition:'bottom',
    animationEnabled: false,
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#C20C0C',
      inactiveTintColor: '#979797',
      style: {
        backgroundColor: '#fff',
      },
      labelStyle: {
        fontSize: 14, // 文字大小
      },
    }
  }
);

export default Tab;

