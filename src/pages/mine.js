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
    let txt = info.item.title;
    let author = info.item.author ? '，by ' + info.item.author : '';
    let other = info.item.total === info.item.download ? info.item.total + '首' + author :
      info.item.total + '首' + author + '，已下载' + info.item.download + '首';
    return (
      <View style={{display: this.state.isShow[key] ? 'flex' : 'none',}}>
        <MyListItem imgUrl={imgUrl} isImg={true} imgWidth={44} imgHeight={44}
                    titleName={txt} otherInfo={other} />
      </View>)
  };

  render() {
    let sections = [
      {
        key: "A",
        text: "我创建的歌单",
        data: [
          {title: "我喜欢的音乐", total: 93, download: 46},
          {title: "run", total: 14, download: 11},
          {title: "call", total: 2, download: 2},
          {title: "call", total: 2, download: 2},
          {title: "call", total: 2, download: 2},
          {title: "call", total: 2, download: 2},
          {title: "call", total: 2, download: 2},
        ]
      },
      {
        key: "B",
        text: "我收藏的歌单",
        data: [
          {title: "港囧中无可替代的港乐", total: 93, download: 46, author: "当世界复杂喧嚣"},
          {title: "女声翻唱", total: 14, download: 11, author: "我是你的爸爸"},
        ]
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