import React,{Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

import MyIcon from './MyIcon'

class MyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.cardWrapper, {width: this.props.imgWidth}]}>
        <View>
          {this.props.isVideo ? (
            <View style={{alignItems: 'center', flexDirection: 'row', position: 'absolute', top: 8, left: 12, zIndex: 10}}>
              <MyIcon name="play1" size={20} color='#fff'/>
            </View>
          ) : (
            <View style={{alignItems: 'center', flexDirection: 'row', position: 'absolute', top: 2, right: 8, zIndex: 10}}>
              <MyIcon name="erji" size={16} color='#fff'/>
              <Text style={{color: '#fff', fontSize: 14}}> 1231万</Text>
            </View>
          )}
          <Image style={[{width: this.props.imgWidth, height: this.props.imgHeight}]}
                 source={this.props.imgUrl} resizeMode="contain"/>
        </View>
        <View style={styles.cardTextWrapper}>
          <Text style={styles.cardText}>
            {this.props.text}
          </Text>
        </View>
      </View>
    )
  }
}

MyCard.defaultProps = {
  isVideo: false,
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'column',
  },
  cardTextWrapper: {
    paddingLeft: 8,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 10,
  },
  cardText: {
    fontSize: 15,
    color: '#000',
  }
});

export default MyCard;