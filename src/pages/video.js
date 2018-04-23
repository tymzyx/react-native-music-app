import React,{Component} from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class Video extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>
          i am Video
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Video;