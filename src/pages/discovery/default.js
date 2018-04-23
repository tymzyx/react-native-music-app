// 发现音乐
import React,{Component} from 'react'

import {View, Text, StyleSheet, ScrollView} from 'react-native'

class DiscoveryDefault extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          <Text>
            i am Home ~~~~~~~~~~
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    height: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DiscoveryDefault;