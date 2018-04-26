// 发现音乐
import React,{Component} from 'react'
import {Dimensions, View, Text, StyleSheet, ScrollView, Button} from 'react-native'
import {addNavigationHelpers} from 'react-navigation'

import {connect} from 'react-redux'

import MyItem from '../../Components/common/MyItem'
import MyModule from '../../Components/common/MyModule'
import MyCard from '../../Components/common/MyCard'

let itemList = [1,2,3,4];
let list = [1,2,3,4,5,6];
let imgUrl = require('../../assets/img/amei.jpg');
let imgUrl_3_2 = require('../../assets/img/3_2.jpg');
let imgUrl_5_2 = require('../../assets/img/5_2.png');

class DiscoveryDefault extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.view} tabLabel={this.props.name}>
          <View style={styles.itemContainer}>
            {itemList.map((item,index) => (
              <View key={index} style={styles.itemWrapper}>
                <MyItem
                  navigation={this.props.navigation}
                />
              </View>
            ))}
          </View>
          <MyModule text="推荐歌单">
            {list.map((item, index) => (
              <MyCard key={index} text="华语速爆新歌 华语速爆新歌" imgUrl={imgUrl}
                      imgWidth={Dimensions.get('window').width/3-4}
                      imgHeight={Dimensions.get('window').width/3-4}
              />
            ))}
          </MyModule>
          <MyModule text="独家放送">
            {[1,2].map((item, index) => (
              <MyCard key={index} text="华语速爆新歌 华语速爆新歌" isVideo={true} imgUrl={imgUrl_3_2}
                      imgWidth={Dimensions.get('window').width/2-8/3}
                      imgHeight={Dimensions.get('window').width/3-4}
              />
            ))}
            <MyCard text="华语速爆新歌 华语速爆新歌" isVideo={true} imgUrl={imgUrl_5_2}
                    imgWidth={Dimensions.get('window').width}
                    imgHeight={Dimensions.get('window').width/2.5}
            />
          </MyModule>
          <View style={styles.footerWrapper}>
            <View style={styles.footer}>
              <Text style={{fontSize: 16, color: '#000'}}>
                我是底部
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    // flex: 1,
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
  },
  footerWrapper: {
    height: 130,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  footer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// export default DiscoveryDefault;
export default connect(state => ({
  nav: state.nav
}))(DiscoveryDefault);