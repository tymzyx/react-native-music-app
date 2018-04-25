import React,{Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import Video from 'react-native-video'

let vd = require('../../../qilixiang.mp3');

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('i am render')

    let {navigate} = this.props.navigation;

    return (
      <View style={styles.wrapper}>
        <Text>
          i am player
        </Text>
        <Button
          title="Go to Tab"
          onPress={() =>
            navigate('Tab')
          }
        />
        <Video
          source={vd}
          rate={1.0}
          volume={1.0}
          paused={false}
        />
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