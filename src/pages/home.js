import React,{Component} from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native'

import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {TabNavigator, TabBarTop, TabBarBottom} from 'react-navigation'
import DiscoveryDefault from './discovery/default'

import CommonHead from '../Components/CommonHead/CommonHead'

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
          <ScrollableTabView
            renderTabBar={() => (
              <ScrollableTabBar
                tabStyle={styles.tab}
                textStyle={styles.tabText}
              />
            )}
            tabBarBackgroundColor="rgba(240, 240, 240, 0.8)"
            tabBarUnderlineStyle={styles.tabBarUnderline}
            tabBarActiveTextColor="#C20C0C"
            tabBarInactiveTextColor="#000"
          >
            <DiscoveryDefault navigation={this.props.navigation} tabLabel="发现音乐"/>
            <DiscoveryDefault navigation={this.props.navigation} tabLabel="主播电台"/>
          </ScrollableTabView>
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
    width: Dimensions.get('window').width,
  },
  tab: {
    paddingBottom: 0
  },
  tabText: {
    fontSize: 16
  },
  tabBarUnderline: {
    backgroundColor: '#C20C0C',
    height: 2
  }
});

export default Home;