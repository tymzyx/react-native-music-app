import React,{Component} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MyIcon from '../common/MyIcon'


class TabBarItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <MyIcon name={this.props.icon} size={20} color={this.props.color}/>
    )
  }
}

export default TabBarItem;