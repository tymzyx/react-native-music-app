import React,{Component} from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'

import MyIcon from '../common/MyIcon'

class CommonHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headWrapper}>
        <View style={styles.headTop}>
          <View style={styles.topIcon}>
            <MyIcon name="music" size={28}/>
          </View>
          <View style={styles.searchIcon}>
            <MyIcon name="search" size={17}/>
          </View>
          <TextInput style={styles.input} underlineColorAndroid='transparent'
                     placeholder="世界上的另一个我 很好听哦"
          />
          <View style={styles.topIcon}>
            <MyIcon name="paixingbang" size={28}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    zIndex: 5,
  },
  headTop: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topIcon: {
    width: 60,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  searchIcon: {
    position: 'absolute',
    top: 16,
    left: 100,
    zIndex: 10,
  },
  input: {
    flex: 1,
    height: 38,
    backgroundColor: '#dddddd',
    fontSize: 15,
    borderRadius: 19,
    padding: 0,
    paddingLeft: 60
  }
});

export default CommonHead;