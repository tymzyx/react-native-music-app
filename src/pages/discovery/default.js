// 发现音乐
import React,{Component} from 'react'
import {Dimensions, View, Text, StyleSheet, ScrollView} from 'react-native'

import MyItem from '../../Components/common/MyItem'
import MyModule from '../../Components/common/MyModule'
import MyCard from '../../Components/common/MyCard'

let itemList = [1,2,3,4];
let list = [1,2,3,4,5,6];
let imgUrl = require('../../assets/img/amei.jpg');

class DiscoveryDefault extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.itemContainer}>
            {itemList.map((item,index) => (
              <View key={index} style={styles.itemWrapper}>
                <MyItem/>
              </View>
            ))}
          </View>
          <MyModule text="推荐歌单">
            {list.map((item, index) => (
              <MyCard key={index} text="华语速爆新歌" imgUrl={imgUrl}
                      imgWidth={Dimensions.get('window').width/3-4}
                      imgHeight={Dimensions.get('window').width/3-4}
              />
            ))}
          </MyModule>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {

  },
  itemContainer: {
    height: 90,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  itemWrapper: {
    flex: 1,
    height: 90,
  }
});

export default DiscoveryDefault;