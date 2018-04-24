import React,{Component} from 'react'
import {Dimensions, StyleSheet, View, Text} from 'react-native'

class MyModule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.moduleWrapper}>
        <View style={styles.moduleTitle}>
          <Text style={styles.moduleTitleText}>
            {this.props.text}
          </Text>
        </View>
        <View style={styles.moduleBody}>
          {this.props.children.map((item, index) => (
            this.props.children[index]
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  moduleWrapper: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  moduleTitle: {
    height: 22,
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 10,
    borderLeftWidth: 4,
    justifyContent: 'center',
    borderLeftColor: '#C20C0C'
  },
  moduleTitleText: {
    fontSize: 17,
    color: '#000'
  },
  moduleBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});

export default MyModule;