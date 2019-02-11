import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {value: '', fullName: true, isValid: true, nameAvailable: false};
    this.setValid = this.setValid.bind(this);
  }
  onChange = (event)=> {
    this.setState({value: event});
    console.log(event);
  }

  onPress() {
    console.log("Pressed");
    //alert('Welcome and Greetings, ' + this.state.value);
    if (/[^a-zA-Z]+/.test(this.state.value)) {
    // If the user input is not valid
    this.setState({fullName: false});
    this.setValid (false);
  }
  else {
    if (this.state.value != "") {
    this.setState({nameAvailable: true});
    this.setValid(true);
  }
  }
  }

  setValid(value)
  {
    this.setState ({isValid:value});
    console.log("Getting input")
  }



  render() {
    return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>

      {(!this.state.nameAvailable) ?
        <View>
        <View><TextInput value={this.state.value} style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        {(!this.state.isValid) ? <Text style={styles.error}>Error</Text> : null}</View>
       :  <Text>Hello World {this.state.value}</Text> }

      </View>

    );
  }
}




const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#3D307F',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error:{
    justifyContent: 'center',
    alignItems: 'center',
    color:"red",
    fontSize: 20,
  }
});
