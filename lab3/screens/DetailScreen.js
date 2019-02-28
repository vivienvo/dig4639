import React from 'react';
import { Button, View, Text, Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class DetailScreen extends React.Component {
  render() {
    const { getParam } = this.props.navigation;
    const title = getParam('title', 'NO-ID');
    const image = getParam('Image');

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection:'column' }}>
        <Text style={{flex:1,color:"black"}}>{title}</Text>
        <Image source={image} style={{flex:1,width:'100%'}} resizeMode='contain'/>
      </View>
    );
  }
}
