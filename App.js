import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, Button} from 'react-native';
import  FirstNavigator  from './navigation/FirstNavigator';
// import { createAppContainer } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Feather } from '@expo/vector-icons'; 

import{ HomeScreen } from "./screens";


const App = props => {
  
  return <FirstNavigator />;
} 

const DrawerNavigator = createDrawerNavigator({
  HomeScreen
})

export default App;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   button: {
//     width:700,
//     backgroundColor:'#1c313a',
//      borderRadius: 25,
//       marginVertical: 10,
//       paddingVertical: 13
//   },

// });





