import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, StatusBar} from 'react-native';

export default function App() {
  const [text, settext] = useState(null);
  const [info, setinfo] = useState(null)
  return (
    // we can also write style like this, but we need our work clean, so we must need to use stylesheet as option
    <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar hidden={true}/>{/* if we dont want status bar then we use statusbar poperty*/}
      <Text>Hello</Text>
      <Text>World</Text>
      <Text>Mahesh</Text>
    </View>
  );  
}

// creating styles poperties and using
const style = StyleSheet.create({
  Text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 55,
    color: 'black',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    margin: 55,
    padding: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 14,
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 14,
    padding: 15,
    margin: 15,
    backgroundColor: 'white',
  },
});
