import React,{Component} from 'react'
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native'

import MyIcon from './MyIcon'

import {connect} from 'react-redux'
import {testAction} from '../../store/test/action'

class MyItem extends Component {
  constructor(props) {
    super(props);

    this._handleTouch = this._handleTouch.bind(this);
  }

  _handleTouch() {
    const navigation = this.props.navigation;
    navigation.navigate('Player');
  }

  render() {

    // console.log('navigation: ', this.props.navigation);

    return (
      <TouchableNativeFeedback onPress={this._handleTouch}>
        <View style={styles.itemWrapper} >
          <View style={styles.iconWrapper}>
            <MyIcon name="lock" size={46} color={'#C20C0C'}/>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              {/*私人FM*/}
              {this.props.testData.route[0]}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    height: 62,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000'
  }
});

// export default MyItem;
export default connect(state => ({
  testData: state.testReducer
}), {
  testAction
})(MyItem)