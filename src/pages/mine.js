import React,{Component} from 'react'

import {
  StyleSheet,
  View,
  Text,
  SectionList,
  TouchableOpacity
} from 'react-native'

import CommonHead from '../Components/CommonHead/CommonHead'
import MyIcon from '../Components/common/MyIcon'
import MyListItem from '../Components/common/MyListItem'

const imgUrl = require('../assets/img/amei.jpg');

class Mine extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isShow: {
        A: true,
        B: true,
      }
    }
  }

  _sectionComp = (info) => {
    let key = info.section.key;
    let txt = info.section.text;
    return (
      <TouchableOpacity onPress={() => {
        this.setState(prevState => ({
          isShow: Object.assign({}, prevState.isShow, {[key]: !prevState.isShow[key]})
        }))
      }}>
        <View style={styles.sectionHead}>
          <MyIcon name={"bottom"} size={16} style={{marginRight: 6}}/>
          <Text style={{fontSize: 14}}>
            {txt}
          </Text>
        </View>
      </TouchableOpacity>
    )
  };

  _renderItem = (info) => {
    let key = info.section.key;
    let txt = '  ' + info.item.title;
    return (
      <View style={{display: this.state.isShow[key] ? 'flex' : 'none',}}>
        <MyListItem imgUrl={imgUrl} isUser={true} imgWidth={44} imgHeight={44} />
      </View>)
  };

  render() {
    let sections = [
      {
        key: "A",
        text: "我创建的歌单",
        data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }]
      },
      {
        key: "B",
        text: "我收藏的歌单",
        data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }]
      }
    ];

    return (
      <View>
        <CommonHead isHasSearch={false} text={"我的音乐"} iconName={"yin"}/>
        <SectionList
          renderSectionHeader={this._sectionComp}
          renderItem={this._renderItem}
          sections={sections}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ddd",
    paddingLeft: 6,
    paddingBottom: 6,
    paddingTop: 6,
  }
});

export default Mine;