import React,{Component} from 'react'
import {StyleSheet, View, Text} from 'react-native'

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('i am render')

    return (
      <View style={styles.wrapper}>
        <Text>
          i am player
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  }
});

export default Player;