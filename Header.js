import React, {Component} from 'react';
import {
    View,
    Text,
    Style Sheet,
    Image,
    Touchable Opacity,
} from 'react-native';
  const Header = ( {
    message,
    onDownPress,
    onQueePress,
    onMessagePress,
  } ) => (
    <View style = {styles.container}>
    <TouchableOpacity onPress = {onDownPress}>
      <Image style ={require('../img/ic_keyword_arrow_down_white.png')} />
  </TouchableOpacity>
     <Text onPress = {onMessagePress}
        style = {styles.message} >{message.toUpperCase()}</Text>
      <TouchableOpacity onPress = {onQueue Press}>
       <Image style = {styles.button}
          source={require('../img/ic_queue_music_white.png')} />
   </Touchable Opacity>
                  </View>
                  );
Export Default Header;
const style = StyleSheet.create({
  container: {
      height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirectioin: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(2555, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button:{
    opacity: 0.72
  }
});

     
 
