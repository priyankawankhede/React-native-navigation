// import React from 'react';
// import { View, Text,Button, StyleSheet,Image } from 'react-native';

// const Homescreen = props => {
//   return (
//     <View style={styles.screen}>
//         <Image  source={require("../assets/wow_lo.png")} style={styles.image} />
      
//       <Button title="Logout
//       "
//       onPress={()=>{
//           props.navigation.replace('Login')
//       }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({

//     container:  
//     {  
//         flex: 1,  
//         alignItems:"center",
        
//     },

//     image:{
//       resizeMode:"contain",
//       height:300,
//       width:200,
      
//     },

//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default Homescreen;


import React from 'react';
import {View, Text, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';


export default class Homescreen extends React.Component {
    render(){
        return(
           <View style={styles.container}>
               <SafeAreaView style={{flex:1}}>
                   
                   <TouchableOpacity 
                    style={{alignItems:"flex-end",margin:16}}
                    onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                   </TouchableOpacity>

                   <View style={styles.screen}>
                        <Text style={styles.text}>{this.props.name}Screen</Text>
                   </View>
               
               </SafeAreaView>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#fff"
    },
    button :{
        alignItems:"flex-end",
        margin:16
    },
    text:{
        color:"#161924",
        fontSize:20,
        fontWeight:"200"
    },
    screen : {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }

})