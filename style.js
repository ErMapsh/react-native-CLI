import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#EEEEEE',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
    borderRadius:50,
    fontSize: 30,
    width: 80,
    height: 80,
    textAlign: 'center',
  },
  Text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },

});

export {styles};
