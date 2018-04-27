import React,{Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView
} from 'react-native'

import CommonHead from '../Components/CommonHead/CommonHead'
import MyListItem from '../Components/common/MyListItem'

let avatarImg = require('../assets/img/avatar-girl.jpeg');

let cards = [
  {text: '动态', count: 0},
  {text: '关注', count: 4},
  {text: '粉丝', count: 3},
  {text: '资料', count: 2},
];

class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <CommonHead isHasSearch={false} text={"帐号"}/>
        <ScrollView style={{backgroundColor: '#ddd'}}>
          <View style={styles.module}>
            <MyListItem imgUrl={avatarImg} isUser={true} isHasUnder={false} imgWidth={62} imgHeight={62} radius={248}/>
            <View style={styles.cardItem}>
              {cards.map((item,index) => {return [
                (<View key={index} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>
                    {item.text}
                  </Text>
                  <Text style={{fontSize: 16, color: '#000'}}>
                    {item.count}
                  </Text>
                </View>),
                (<View style={{borderRightWidth: index === 3 ? 0 : 1, borderRightColor: '#ddd'}} />)
              ]})}
            </View>
          </View>
          <View style={styles.module}>
            <MyListItem isHasUnder={false}/>
          </View>
          <View style={styles.module}>
            {[1,2,3,4].map((item,index) => (
              <MyListItem key={index} isHasUnder={index !== 3}/>
            ))}
          </View>
          <View style={styles.module}>
            {[1,2,3,4,7,8,9,9,1,1].map((item,index) => (
              <MyListItem key={index} isHasUnder={index !== 9}/>
            ))}
          </View>
          <View style={styles.module}>
            {[1,2].map((item,index) => (
              <MyListItem key={index} isHasUnder={index !== 1}/>
            ))}
          </View>
          <View style={styles.btn}>
            <Text style={{fontSize: 20, color: "#c20c0c"}}>
              退出登录
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  module: {
    marginBottom: 12,
  },
  cardItem: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    paddingBottom: 10,
  },
  btn: {
    marginBottom: 64,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Account;