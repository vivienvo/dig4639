import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Oils from '../oils';
import { MonoText } from '../components/StyledText';
const KEYS_TO_FILTERS = ['title', 'info'];



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }

  constructor(props) {
     super(props);
     this.state = {
       searchTerm: ''
     }
   }
   searchUpdated(term) {
     this.setState({ searchTerm: term })
   }
  render() {
    const {navigate} = this.props.navigation;
    const filteredOils = Oils.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Essential Oils 101</Text>


            <SearchInput
              onChangeText={(term) => { this.searchUpdated(term) }}
              style={styles.searchInput}
              placeholder="Search..."
              />
            <ScrollView>
              {filteredOils.map(oil => {
                return (
                  <TouchableOpacity
                  onPress={()=>{
                    navigate("Detail", {title: oil.key, Image: oil.image, info: oil.info});
                    console.log(oil.key)
                  }
                  } key={oil.key} style={styles.oilItem}>
                    <View>
                      <Text>{oil.title}</Text>
                      <Image source={oil.image} style={{width:300, height:250}} />

                    </View>
                  </TouchableOpacity>
                );})}
                </ScrollView>
            </View>
        </ScrollView>
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2DEFF',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 40,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingBottom: 30,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 40,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    paddingBottom: 10,
    paddingTop: 20,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  searchInput:{
    padding: 10,
    width: 400,
    borderColor: '#CCC',
    borderWidth: 1,
    backgroundColor: '#FEF6EA',
  },
});
