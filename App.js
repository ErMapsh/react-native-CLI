import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.Text}>Hello World</Text>
    </View>
  )
}

const style = StyleSheet.create({
  Text :{
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

  }
})
