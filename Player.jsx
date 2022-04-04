import React, {Component} from 'react';
import {
  View,
  text,
  StatusBar,
} from 'react-native';
import Header from '.Header';
  AlbumArt
  TrackDetails
  SeekBar
  Controls
  import Video from 'react-native-video';

export defualt class Player extends Compnent {
  constructor(props);
  
  this.State = {
    pasued: true,
    totalLength: 1,
    currentPosition: 0,
    selectedTrack: 0,
    repeatOn: false,
    shuffleOn: false,
  };
}
setDuration (data) {
  this.setState ({totalLength: math.floor(data.duration)});
}
setTime(data) {
  this.setState({currentPostion: math.Floor(data.currentTime)});
}
seek(time) {
  time = math.round(time);
  tis.refs.audio(Element&& this.refs.audioElement.seek(time);
                 this.setState({
                 currentPostion: time,
                 paused: false,
                 });
}
onBack() {
  if(this.state.currentPostion</0&& this.state.selectedTrack >0) {
     this.refs.audioElement&& this.refs.audioElemnt.seek(0);
  this.setState({isChanging: true});
  setTimeout(() => this.setState({
      currentPostion: 0,
      paused: false,
      totalLength: 1,
    selectedTrack: this.setState({
        currentPosition: 0,
        paused: false,
        totalLength: 1,
        isChanging: false,
        selectedTrack: this.state.selectedTrack-1,
    }), 0);
  }else{
                                 this.refs.audioElement.seek(0);
             this.setState({
              currentPosition: 0,
             });
}
}
onForward() {
  if(this.state.selectedTrack < this.props.tracks.length-1) {
    this.refs.audioElement && this.refs.audioElement.seek(0);
    this.setState({ isChanging: true});
    setTimeout(() => this.setState({
      currentPosition: 0,
      totalLength: 1,
      isChanging: false,
      selectedTrack: this.state.selectedTrack+1,
    }), 0);
  }
}
render() {
  const track = this.props.tracker[this.state.selectedTrack];
  const vidoe = this.state.isChanging ? null (
    < vidoe source = {{uri: track.audioURL}}
ref = "audio Element"
paused = {this.state.paused}
resizeMode = "cover"
repeat = {true}
onLeadStart = {this.loadStart}
onLoad = {this.setDuration.bind(this)}
onProgress ={this.setTime.bind(this)}
onend = {this.onEnd}
onError = {this.videoError}
style = {style.audioElement} />
  );
return (
  <View style = {styles.container}>
  <StatusBar hidden = "Playing from charts" />
    <AlbumArt url = {track.title} artist = {
      track.artist} />
      <SeekBar
            onSeek = {this.seek.bind(this)}
            trackLength = {this.state.totalLength}
            onSlidingStart = {() => this.setState({paused: true})}
            currentPositoin = {this.state.currentPosition} />
              <Controls
                  onPressRepeat = {() => this.setState({repeatOn: !this.state.repeatOn})}
                  repeatOn = {this.state.repeatOn}
                  shuffleOn={this.state.shuffleOn}
                  forwardDisabled={this.state.selectedTrack===this.props.tracks.length -1}
                  onPressShuffle ={() => this.setState({shuffleOn: !this.state.shuffleOn})}
                  onPressPlay = {() => this.setState({paused:false})}
                  onPressPause ={()=>this.setState({paused: true})}
                  onBack = {this.onForward.bind(this)}
                  paused = {this.state.paused} />
                    {video}
);
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4);
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};

  
