import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button, StatusBar} from 'react-native';

export default function App() {
  const [text, settext] = useState(null);
  const [info, setinfo] = useState(null)
  return (
    // we can also write style like this, but we need our work clean, so we must need to use stylesheet as option
    <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* --------if we dont want status bar, means we want full screen then we use display poperty of statusbar--------*/}
      {/* <StatusBar hidden={true}/>   */}
      {/* --------if we want status color should change then we can use background poperty of statusbar-------- */}
      <StatusBar backgroundColor={'gray'}/>
      <Text>Hello</Text>
      <Text>World</Text>
      <Text>Mahesh</Text>
    </View>
  );  
}

// creating styles poperties and using

