import React,{Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

import MyIcon from './MyIcon'

class MyItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.iconWrapper}>
          <MyIcon name="lock" size={46} color={'#C20C0C'}/>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            私人FM
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    height: 62,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000'
  }
});

export default  MyItem;