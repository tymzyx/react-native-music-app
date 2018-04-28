/*
  player using react-native-video
*/
import React,{Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  Slider,
  Image,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import Video from 'react-native-video'

import MyIcon from '../../Components/common/MyIcon'
import MyCard from '../../Components/common/MyCard'

import util from '../../assets/js/util'

let vd = require('../../../qilixiang.mp3');
const imgUrl = require('../../assets/img/amei.jpg');
const imgBorder = require('../../assets/img/border.png');

const ctrl = [
  {icon: 'hkquit'},
  {icon: 'aixin'},
  {icon: 'play1'},
  {icon: 'xiayishou'},
  {icon: 'speechbubble'}
];

class Player extends Component {
  constructor(props) {
    super(props);

    this.spinVal = new Animated.Value(0);
    // console.log('spinVal: ', this.spinVal);

    this.state = {
      progressParams: {
        current: '00:00',
        duration: '00:00',
        currentInt: 0,
        durationInt: 297
      },
      pause: true,
      isShowLyric: false,
    };

    this._goBack = this._goBack.bind(this);
    this.initAudio = this.initAudio.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.changeSlider = this.changeSlider.bind(this);
    this.spin = this.spin.bind(this);
  }

  componentWillMount() {
    console.log(this.props.navigation.state.params);
    // this.spin();
  }

  componentDidMount() {
    this.spin();
  }

  _goBack() {
    console.log('goBack');
    this.props.navigation.goBack();
  }

  togglePlay() {
    this.setState({
      pause: !this.state.pause,
    })
  }

  initAudio(status) {
    // can not get the correct duration of music using react-native-video
    console.log(status.duration, status, this.refs.myAudio);
    this.setState({
      pause: true
    });

    let initParams = {
      current: util.secondToTime(0),
      duration: util.secondToTime(this.state.progressParams.durationInt),
    };
    this.setState(prevState => ({
      progressParams: Object.assign({}, prevState.progressParams, initParams)
    }));
  }

  // 播放器每隔250ms调用一次
  onProgress(status) {
    if (this.state.pause) {
      return;
    }

    let progressParams = {
      currentInt: status.currentTime,
      current: util.secondToTime(status.currentTime),
    };
    this.setState(prevState => ({
      progressParams: Object.assign({}, prevState.progressParams, progressParams)
    }));
  }

  // Video.seek can not work and the pause can not work when use seek
  changeSlider(val) {
    return;
    let progressParams = {
      currentInt: val,
      current: util.secondToTime(val),
    };
    this.setState(prevState => ({
      progressParams: Object.assign({}, prevState.progressParams, progressParams)
    }));

    // debugger;
    let myAudio = this.refs.myAudio;
    console.log(myAudio, val);
    myAudio.seek(parseInt(val));
  }

  // 图片旋转动画
  spin() {
    console.log('spin spin')
    this.spinVal.setValue(0);
    Animated.timing(
      this.spinVal,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        isInteraction: false
      }
    ).start(() => this.spin());
  }

  render() {
    const spinAngle = this.spinVal.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    console.log("spinAngel: ", spinAngle);

    return (
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <TouchableOpacity onPress={this._goBack}>
            <View style={{marginLeft: 10}}>
              <MyIcon name="left" size={26} color="#fff"/>
            </View>
          </TouchableOpacity>
          <View style={styles.headMiddle}>
            {[1,2].map((item, index) =>
              <View style={styles.card} key={index}>
                <MyIcon name="Television" size={20} color="#fff"/>
                <Text style={styles.cardText}>
                  私人FM
                </Text>
              </View>
            )}
          </View>
          <View style={{marginRight: 10}}>
            <MyIcon name="set1" size={26} color="#fff"/>
          </View>
        </View>
        <TouchableOpacity style={{flex:1}} onPress={
          () => {
            this.setState({
              isShowLyric: !this.state.isShowLyric
            })
          }
        }>
          <View style={styles.infoWrapper}>
            {!this.state.isShowLyric ? (
              this.props.navigation.state.params.type !== 'fm' ? (
                <MyCard song="七里香" singer="周杰伦" imgUrl={imgUrl} isSong={true}
                      imgWidth={Dimensions.get('window').width/1.3}
                      imgHeight={Dimensions.get('window').width/1.3}
                      isShowTypeIcon={false}/>
              ) : (
                [
                  <Image
                    style={{
                      width: 300,
                      height: 300,
                      top: -60,
                    }}
                    source={imgBorder}
                  />,
                  <Animated.Image
                    style={{
                      width: 220,
                      height: 220,
                      marginTop: -320,
                      borderRadius: 110,
                      transform: [{rotate: spinAngle}]
                    }}
                    source={imgUrl}
                  />
                ]
              )
            ) : (
              <View>
                <Text>
                  这里是歌词
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <View style={{height: this.props.navigation.state.params.type !== 'fm' ? 160 : 200}}>
          <View style={styles.progressWrapper}>
            <Text style={{color: "#fff"}}>{this.state.progressParams.current}</Text>
            {/*进度条*/}
            <Slider style={styles.progress}
                    minimumTrackTintColor={'#C20C0C'}
                    maximumTrackTintColor={'#222'}
                    thumbTintColor={'#C20C0C'}
                    step={0.1}
                    maximumValue={this.state.progressParams.durationInt}
                    value={this.state.progressParams.currentInt}
                    onSlidingComplete={(val) => this.changeSlider(val)}
            />
            <Text style={{color: "#fff"}}>{this.state.progressParams.duration}</Text>
          </View>
          <View style={styles.ctrlMain}>
            {ctrl.map((item,index) =>
              <View key={index} style={styles.ctrlCap}>
                {index === 2 ? (
                  <TouchableOpacity onPress={this.togglePlay}>
                    {this.state.pause ? (
                      <MyIcon name={item.icon} size={42} color={"#fff"}/>
                    ) : (
                      <MyIcon name={"suspend_icon"} size={42} color={"#fff"}/>
                    )}
                  </TouchableOpacity>
                ) : (
                  <MyIcon name={item.icon} size={28} color={"#fff"}/>
                )}
              </View>
            )}
          </View>
        </View>
        <Video
          ref="myAudio"
          source={vd}
          rate={1.0}
          volume={1.0}
          paused={this.state.pause}
          onLoad={(status) => this.initAudio(status)}
          onProgress={(status) => this.onProgress(status)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    justifyContent: 'space-between',
  },
  head: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#adc'
  },
  headMiddle: {
    width: 220,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 12,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  progress: {
    flex: 1,
    color: '#fff'
  },
  ctrlMain: {
    flex: 1,
    flexDirection: 'row'
  },
  ctrlCap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default Player;