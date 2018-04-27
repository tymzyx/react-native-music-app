import React,{Component} from 'react'

import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TextInput
} from 'react-native'

import MyIcon from '../common/MyIcon'

class CommonHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headWrapper}>
        <View style={styles.headTop}>
          {this.props.isHasSearch ? [(
            <View style={styles.topIcon}>
              <MyIcon name="music" size={28}/>
            </View>), (
            <View style={styles.searchIcon}>
              <MyIcon name="search" size={17}/>
            </View>), (
            <TextInput style={styles.input} underlineColorAndroid='transparent'
                     placeholder="世界上的另一个我 很好听哦"/>
          )] : [(
            <View style={styles.topIcon}>
            </View>
          ), (
            <View style={styles.title}>
              <Text style={{fontSize: 20, color: '#000'}}>
                {this.props.text}
              </Text>
            </View>
          )]}
          <View style={styles.topIcon}>
            <MyIcon name="paixingbang" size={28}/>
          </View>
        </View>
        {!this.props.isHasSearch ? (
          <View style={styles.underLine} />
        ) : null}
      </View>
    )
  }
}

CommonHead.defaultProps = {
  isHasSearch: true,
  text: '',
};

const styles = StyleSheet.create({
  headWrapper: {
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
  },
  headTop: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topIcon: {
    width: 60,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  searchIcon: {
    position: 'absolute',
    top: 16,
    left: 100,
    zIndex: 10,
  },
  input: {
    flex: 1,
    height: 38,
    backgroundColor: '#dddddd',
    fontSize: 15,
    borderRadius: 19,
    padding: 0,
    paddingLeft: 60
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  underLine: {
    height: 1,
    backgroundColor: '#ddd',
  }
});

export default CommonHead;