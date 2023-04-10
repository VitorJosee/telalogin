import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Animated} from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';

export default function App() {

   const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
   const [opacity] = useState(new Animated.Value(0));

   
   useEffect(()=> { 
    Animated.parallel([ Animated.spring(offset.y,{toValue:0,speed:4,bounciness:25}),
      Animated.timing(opacity, {
        toValue: 1,
        duration:200,
      })
    ]).start();
   },
     [

    ]);

  return (
    <KeyboardAvoidingView style={styles.background} >
        <View style={styles.logo}>
            <StatusBar hidden />
            <Text style={styles.moder}>MODERN WARFARE</Text>
          <Text style={styles.warzo}>Warzone 2.0</Text>
      </View>
      
      <Animated.View style={[styles.container, { opacity: opacity, transform:[{translateY: offset.y}] }]}>
         <TextInput
         style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => {}}
         />
         <TextInput
         style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => {}}
         />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registertText}>Criar Conta!</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#191919'
  },
  logo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%'
  },
  input:{
    backgroundColor:"#fff",
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:18,
    borderRadius:7,
    padding:7,
  },
  btnSubmit:{
   backgroundColor:'#00FF7F',
   width:'90%',
   height:45,
   alignItems:'center',
   justifyContent:'center',
   borderRadius:10,
  },
  submitText:{
   color:'#191919',
   fontSize:18,
  },
  btnRegister:{
  marginTop:15
  },
  registertText:{
  color:'#fff'
  },
  moder:{
  textAlign:'center',
  fontSize:25,
  fontFamily:'arial',
  fontWeight:'bold',
  color:'#fff'
  },
  warzo:{
  textAlign:'center',
  fontSize:25,
  fontFamily:'arial',
  fontWeight:'bold',
  color:'#228B22'
  }
});
