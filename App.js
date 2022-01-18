import React, {useState} from 'react';
import {style} from './style';
import {Text, View, StatusBar} from 'react-native';

export default function App() {
  const [text, settext] = useState(null);
  const [info, setinfo] = useState(null);
  return (
    // we can also write style like this, but we need our work clean, so we must need to use stylesheet as option
    <View style={style.container}>
      {/* --------if we dont want status bar, means we want full screen then we use display poperty of statusbar--------*/}
      {/* <StatusBar hidden={true}/>   */}
      {/* --------if we want status color should change then we can use background poperty of statusbar-------- */}
      <StatusBar backgroundColor={'#041562'} />
      <View style={style.box}>
        <Text style={style.Text}>Hello World</Text>
      </View>
    </View>
  );
}

// creating styles poperties and using
