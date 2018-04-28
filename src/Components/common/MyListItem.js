import React,{Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

import MyIcon from './MyIcon'

class MyListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.left}>
          {this.props.isImg ? (
            <Image source={this.props.imgUrl} style={{
              width: this.props.imgWidth,
              height: this.props.imgHeight,
              borderRadius: this.props.radius ? this.props.radius : 0
            }}/>
          ) : (
            <MyIcon name={'shoucang1'} size={20} color={"#333"}/>
          )}
        </View>
        {!this.props.isImg ? (
          <View style={styles.right}>
            <View style={styles.rightTop}>
              <View style={styles.rightLeft}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  我的收藏
                </Text>
              </View>
              <View style={styles.rightRight}>
                <MyIcon name={'right'} size={16} color={"#ccc"}/>
              </View>
            </View>
            {this.props.isHasUnder ? (
              <View style={styles.rightUnder}/>
            ) : null}
          </View>
        ) : (
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.userMiddle}>
                <Text style={{fontSize: this.props.titleSize, color: '#000'}}>
                  {this.props.titleName}
                </Text>
                <View>
                  <Text>
                    {this.props.otherInfo}
                  </Text>
                </View>
              </View>
              <View style={styles.userRight}>
                <Text style={{color: '#C20C0C'}}>
                  签到
                </Text>
              </View>
            </View>
            {this.props.isHasUnder ? (
              <View style={styles.rightUnder}/>
            ) : null}
          </View>
        )}
      </View>
    )
  }
}

MyListItem.defaultProps = {
  isHasUnder: true, // 是否有underLine
  isImg: false,
  isUser: false,
  titleSize: 16,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 12,
    paddingBottom: 12,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
  },
  rightTop: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  rightRight: {
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  rightUnder: {
    height: 1,
    backgroundColor: '#ddd',
  },
  userMiddle: {
    flex: 1,
    justifyContent: 'center',
  },
  userRight: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C20C0C',
    flexDirection: 'row',
    marginRight: 12,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
  }
});

export default MyListItem;