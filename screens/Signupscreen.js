import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  Button,
  Image
} from 'react-native';


	const Signupscreen = props => {
		return(
			<View style={styles.container}>          

            <Image  source={require("../assets/wow_lo.png")} style={styles.image} />

            <TextInput style={styles.inputBox}             
              placeholder="Name"
              placeholderTextColor = "#75827D"
              selectionColor="#75827D"
              keyboardType="default"
              
              />

            <TextInput style={styles.inputBox} 
               
              placeholder="Mobile No"
              placeholderTextColor = "#75827D"
              selectionColor="#75827D"
              keyboardType="numeric"
              
              />

          <TextInput style={styles.inputBox} 
              
              placeholder="Email"
              placeholderTextColor = "#75827D"
              selectionColor="#75827D"
              keyboardType="email-address"
             
              />


          <TextInput style={styles.inputBox} 
             
              placeholder="Password"              
              placeholderTextColor = "#75827D"
              selectionColor="#75827D"
              keyboardType="visible-password"
              /> 


          <TouchableOpacity style={styles.button} 
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
             
              <Text style={styles.buttonText}>Signup</Text>
           </TouchableOpacity>

            <Text style={styles.signtext}>Already registered?</Text>
           
           <TouchableOpacity style={styles.sign} 
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
             
             <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
  		</View>
			)
	};


const styles = StyleSheet.create({
  container : {
    flexGrow: 1,   
    alignItems: 'center'
  },

  
    image:{
      resizeMode:"contain",
      height:200,
      width:100,
     
    }, 

  inputBox: {
    width:300,
    height:40,
    backgroundColor:'#455a64',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#75827D',
    marginVertical: 10,
    backgroundColor:"lightgray", 
    borderWidth:2,
    borderRadius:20,
    borderColor:"#33CEFF",
  },

  button: {
    width:300,
    backgroundColor:'#9EDA28',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },

  
  buttonText: {
    fontSize:18,
    fontWeight:'500',
    color:'#ffff',    
    textAlign:'center',
   
  },

  text:{
    color:"#5BD62D",
      fontWeight:"200"
  }
  
});


export default Signupscreen;