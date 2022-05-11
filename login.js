import { StatusBar } from 'expo-status-bar';
import React, {Component,render,useState} from 'react';
import { StyleSheet, Text, View,ScrollView ,Screen,Image, ImageBackground, TextInput ,Pressable,Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard, Button } from 'react-native';
import { useFonts, Inter_900Black,Pacifico_Regular } from '@expo-google-fonts/inter';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PushNotification from 'react-native-push-notification';
import Test from './Test';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';




export default function Login(navigation) {
    


  
  const [email, setemail] =useState('');
  const [pass, setPass] = useState('');
  const [mas, setmas] = useState('');
  const [icon, seticon] = useState('');
 
  
 
  const handleClick = () => {
   
   fetch('https://staging.scout-x.com/en/api/login/',{
  method:'post',
  
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  ,
  body: JSON.stringify({"email":email,"password":pass})

   }) 
   .then(response => {

    if(response.ok){
      Alert.alert('good work','the email validddddd',[{text:'ok'}])

    }else{

      Alert.alert('warning', 'the username or email invalid',[{text:'ok'}])
    }
   })
  
   .catch(err =>{ console.log(err) })
};





  function Firstname(){

    if ( email ===''|| email==null ){
      setmas('invalid user')
    
    }
  

   if(email.length > 0){

      setmas('')
 
    }

    if(pass===''|| pass==null ){

      seticon('invalid password')
 
    }

    if(pass.length > 0){

      seticon('')
 
    }


if(email.length  > 0||pass.length > 0){

  setemail('')
  setPass('')
  handleClick();
}



    


  }
  
 

    return (

     
      <KeyboardAvoidingView behavior={ Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<SafeAreaView>
  
<View style={styles.containe}>
   
<ImageBackground source={require('./media/Pasta.jpg')} 

style={{
    flex:1,
    width:400,
    height:850,
   
  }}
>
    <View
    style={styles.Dark}
    
    >
      <View
      style={{
        width:'100%',
        height:'15%',
        alignItems:'center',
        

      }}
      >
        <Text style={styles.brand}
        >AKLA</Text>
       
       </View>
 
    </View>

    
    </ImageBackground>
    <View style={styles.input}>
    <TextInput
  style={styles.inp}
  value={email}
  placeholder="Username or Email"
  
  onChangeText={newText => setemail(newText)}
  />
  <Text
style={{
  color:'white',
  left:100
 
 
  
 

}}

>{mas}</Text>
   <TextInput
  style={styles.inp}
  value={pass}
  placeholder="Password"
  secureTextEntry={true} 
  onChangeText={newText => setPass(newText)}
  
  />
  <Text
style={{
  color:'white',
  left:75
 

}}

>{icon}          
</Text>

<Text style={{color: 'rgb(243, 149, 9)' ,right:75,padding:5}}
      onPress={() => Linking.openURL()}>
  Forget password ?
</Text>
<Pressable style={styles.button}
 onPress={Firstname}>


  <Text style={{ textAlign:'center',fontSize:20,fontWeight:'bold'}}>
    Sign in
    </Text>
</Pressable>
<Text style={{color: 'white'}}
      >
 Dont have any account ? <Text style={{color: 'rgb(243, 149, 9)'}}
      onPress={() => Linking.openURL()}>
  Sign up here
</Text>
</Text>



  </View>
  


    
</View>

</SafeAreaView>
</TouchableWithoutFeedback>
</KeyboardAvoidingView>
    
);
  }
  const styles = StyleSheet.create({
    containe:{
   
   display:"flex",
   flexDirection:'column'

}
,
Dark:{
    display:'flex',
    width:'100%',
    height:850,
    alignItems:'center',
 backgroundColor:'rgba(29, 29, 29, 0.521)'
}
,
brand:{
   marginTop:15,
    fontSize:50,
    color:'rgba(255, 255, 255, 0.932)'
}


,inp:{

  width:280,
  height:50,
  backgroundColor:'white',
  padding:10,

  borderRadius:10,
  textAlign:'center',
  color:'black'
   
    
},
input:{
 paddingTop:100,
  display : 'flex',
  flexDirection :'column',
  alignItems : 'center',
  justifyContent: 'center',
  width:'100%',
  height :'100%',
  marginTop:35,

},
button:{
 textAlign:'center',
 marginBottom:5,
 padding:10,
 width:280,
 height:50,
 backgroundColor:'rgb(243, 149, 9)',
 borderRadius:10,
 textAlign:'center',
 color:'black'
},  container:{


  flex: 1
 }

});    
