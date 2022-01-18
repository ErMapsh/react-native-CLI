import React, {useState} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from './style';

export default function App() {
  const [counter, setcounter] = useState(0);
  const [flag, setflag] = useState(false)

  const plus = () => {
    // console.log("Addition");
    setcounter(counter + 1);
    setflag(false);
  };
  const minus = () => {
    if (counter > 0) {
      setcounter(counter - 1);
      setflag(false);
      // console.log("minus");
    }else{
      console.log("Value must greater than 1");
      setflag(true);
    }
  };
  return (
    <>
    <View style={styles.container}>
      <StatusBar backgroundColor={'#041562'} />

      {/* minus */}
      <TouchableOpacity
        onPress={() => {
          minus();
        }}>
        <View>
          <Text style={styles.button}>-</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.Text}>{counter}</Text>

      {/* plus */}
      <TouchableOpacity
        onPress={() => {
          plus();
        }}>
        <View>
          <Text style={styles.button}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      {flag &&<Text style={styles.Text}>Value must greater than 1</Text>}
    </View>
    </>
  );
}
