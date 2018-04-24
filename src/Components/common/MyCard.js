import React,{Component} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

let imgUrl = require('../../assets/img/amei.jpg');

class MyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.cardWrapper, {width: this.props.imgWidth}]}>
        <View>
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

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'column',
  },
  cardTextWrapper: {
    height: 46,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 6,
    paddingBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#000',
  }
});

export default MyCard;