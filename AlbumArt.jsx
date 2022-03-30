import React, { Component} from 'react';
import {
  View,
  Text,
  Style Sheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} rom 'react-native';
const AlbumArt = ({
  url,
  onPress
}) => (
   <View style ={styles.container}>
   <Toucable Opacity onPRess = {onPress}>
     <Image
          style = {styles.image}
          source = {{uri: url}}
          <>
            </ToucableOpacity>
</View>
);

export default AlbumArt;
const {width.height} = Dimensions.get('window');
const imageSize = width-48;
const styels = StyleSheet.create({
  container; [
  paddingLeft: 24,
  paddingRight: 24,
},
  image: {
                                 width: imageSize,
                                 height: imageSize,
                                 }
})
