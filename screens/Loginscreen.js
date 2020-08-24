import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Alert ,Button} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
 
 
const Loginscreen = props => {
  
  return (
  <View style={styles.container}>
    
    <Image  source={require("../assets/wow_lo.png")} style={styles.image} />

          <TextInput style={styles.input1} 
              placeholder="Email" placeholderTextColor = "#75827D">
          </TextInput> 
          
          <TextInput style={styles.password} 
              placeholder="Password" placeholderTextColor = "#75827D">
          </TextInput>               
     
          <TouchableOpacity style={styles.button} 
            onPress={() => {
              props.navigation.navigate('Home');
            }}>
             
              <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>

            <Text style={styles.signtext}>Not Registered yet?</Text>
           
           <TouchableOpacity style={styles.sign} 
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
             
             <Text style={styles.text}>Signup</Text>
          </TouchableOpacity>

  </View>
  );
} ;

export default Loginscreen;

 const styles = StyleSheet.create(  
{  
    container:  
    {  
        flex: 1,  
        alignItems:"center",
        
    },

    image:{
      resizeMode:"contain",
      height:300,
      width:200,
      
    },
    
    
    input1 : {
      height:40,
      width:270,
      borderWidth:2,
      padding:10,
      borderRadius:20,
      borderColor:"#33CEFF",
      backgroundColor:"lightgray",    
      fontSize:15,
      color:"white"  
    },

    password : {
      marginTop:10,      
      height:40,
      width:270,
      borderWidth:2,
      padding:10,
      borderRadius:20,
      borderColor:"#33CEFF",
      backgroundColor:"lightgray", 
      color:"#878E85", 
      fontSize:15
    },

    button: {
      width:300,
      backgroundColor:'#9EDA28',
      borderRadius: 20,
      marginVertical: 10,
      paddingVertical: 13,
      height:50
    },
    buttonText: {
      fontSize:18,
      fontWeight:'500',
      color:'#ffffff',      
      textAlign:'center'
    },

    signtext:{
      marginTop:50
    },
    text:{
      color:"#5BD62D",
      fontWeight:"200"

    }



    
});  


