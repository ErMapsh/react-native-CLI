import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    box: {
      width: 200,
      height: 200,
      backgroundColor: 'white', 
      borderRadius: 50,
      justifyContent: 'center',
    },
    Text: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: 'black',
    },
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#11468F',
    },
    border: {
      borderColor: 'black',
      borderRadius: 50,
      backgroundColor: 'white',
    },
  });

  export {style};