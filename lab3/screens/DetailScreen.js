import React from 'react';
import { Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  FlatList,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class DetailScreen extends React.Component {
  render() {
    const { getParam } = this.props.navigation;
    const title = getParam('title', 'NO-ID');
    const image = getParam('Image');
    const info = getParam('info')

    return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection:'column' }}>
        <Text style={{flex:1,color:"black",fontSize:40}}>{title}</Text>
        <Text style={{flex:3, color:"black",fontSize:15, padding: 10}}>{info}</Text>
        <Image source={image} style={{flex:4,width:'100%'}} resizeMode='contain'/>


        <TouchableOpacity onPress={this.saveData}>
        <Text style={styles.favoritesAddText}>Add to favorites</Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={this.displayData}>
        <Text style={styles.favoritesDisplayText}>Click to view favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
    );

      }

      saveData() {
        let obj = {
          message: 'Your favorites: Rose oil, Lavender Oil, Peppermint Oil, Chamomile Oil, Gardenia Oil',
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
      }

      displayData = async () => {
        try {
          let user = await AsyncStorage.getItem('user');
          let parsed = JSON.parse(user);
          alert(parsed.message);
        }
        catch(error) {
          aler(error);
        }
      }
    }



const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#E2DEFF',
      },
      favoritesDisplayText: {
        fontSize: 24,
        paddingBottom: 100,
      },
      favoritesAddText: {
        fontSize: 24,
      },
    });
