import { StatusBar } from 'expo-status-bar';
import React, {Component,render,useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView ,Screen,Image, ImageBackground, TextInput ,Pressable,Alert,picker, Button,navigation,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PushNotification from 'react-native-push-notification';
import Test from './Test';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch,useSelector } from 'react-redux';
import { createUser } from './store/store';



export default function sign (navigation){
  
  



   const dispatch = useDispatch();
 
   const getState = useSelector((state)=> state.user);
   console.log(getState)
   
 
 

    const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
          {label: 'coach', value: 'coach'},
          {label: 'parent', value: 'parent'},
          {label: 'player', value: 'player'}
        ]);

      
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        
        const [icon, seticon] = useState('');
        const [date, setDate] =useState('');
        const [first, setFirst] =useState('');
        const [last, setLast] =useState('');
        const [email, setEmail] =useState('');
        const [pass, setPass] = useState('');

        function Firstname(){
          if (first ===''|| first==null||first.length <4 ){
            Alert.alert('warning','the first name must be more than 3character and didnt empty ',[{text:'ok'}])}

            if (last ===''|| last==null||last.length <4 ){
              Alert.alert('warning','the last name must be mor than 3character and didnt empty',[{text:'ok'}])}

             
              
              if (!emailPattern.test(email)){
               seticon('invalid email')}
               if (emailPattern.test(email)){
                seticon('')}

                  
              
                if (pass.length <8){
                  seticon('invalid password')
                  
                  }
               
                  if (date ===''){
                    seticon('select birth')
                  
                  }
            
                


           
          else{
            handleClick();
       
          }
        }
        



        
       const handleClick = () => {
   const url = `https://staging.scout-x.com/en/api/${value}app/me/`;
   fetch(url,{
  method:'post',
  
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  ,
  body: JSON.stringify({
  "first_name":first,
  "last_name":last,
  "email":email,
  "password":pass,
  "birth_date":date,
  "username":'mina',
})

   }) 
  
  .then(dispatch(

    createUser({
firstName:first,
lastName:last,
email:email,
password:pass,
birth:date

    })
  )) 

   .then(response => {

    if(response.ok){
      Alert.alert('good work','the email create',[{text:'ok'}])

    }else{

      Alert.alert('warning', 'the email dont create',[{text:'ok'}])
    }
   })
   .catch(err =>{ console.log(err) })
};  

return (
    <KeyboardAvoidingView
    behavior={ Platform.OS === "ios" ? "padding" : "height"}
    style={styles.keyb}
  >
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

<SafeAreaView>
    
<View
style={styles.container}


>


   
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
        <Text style={styles.brand}
        >AKLA</Text>
        <Text style={styles.brandTitle}
        >The best taste, take the shot</Text>
 
      
 
    </View>

    
    </ImageBackground>

<View
style={styles.form}
>
<Text
style={{
  color:'white',
  height:20,
  top:10,
  
 

}}

>{icon}</Text>
<DropDownPicker
style={{ width:'90%',
height:50,
backgroundColor:'white',
padding:10,
margin:10,
borderRadius:10,
left:10,
}}
placeholder="choose account"
dropDownContainerStyle={{
   width:'90%',
   left:20,
  }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      stickyHeader={true}
    />   
    <View
    style ={{
display:'flex',
flexDirection :'row-reverse',
width:'100%',

    }}
    
    
    >


<View style ={{
display:'flex',
width:'50%',
alignItems:'center',
justifyContent: 'center',






    }}>

    <TextInput
  style={{
    
      width:'80%',
      height:50,
      backgroundColor:'white',
      padding:10,
      borderRadius:10,
      textAlign:'center',
     
  }}
  
  placeholder="Firstname"
  
  onChangeText={newText => setFirst(newText)}
  />
   </View>
   <View style ={{
display:'flex',
width:'50%', 
alignItems:'center',
justifyContent: 'center',






    }}>

    <TextInput
  style={{
    
      width:'80%',
      height:50,
      backgroundColor:'white',
      padding:10,
     
      borderRadius:10,
      textAlign:'center',
     
  }}
  
  placeholder="Lastname"
  
  onChangeText={newText => setLast(newText)}
  />
   </View>


    </View>
      <TextInput
  style={styles.inp}
  
  placeholder="Email"
  
  onChangeText={newText => setEmail(newText)}
  />
  
<TextInput
  style={styles.inp}
  
  placeholder="Password"
  secureTextEntry={true} 
  onChangeText={newText => setPass(newText)}
  
  />
 <DatePicker
          style={styles.inp}
          date={date}
          mode="date" 
          placeholder="Date of birth (DD/MM/Year)"
          format="YYYY-MM-DD"
          minDate="1900-01-01"
          maxDate="2025-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              borderWidth:0
              
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
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
  login
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
    container:{
   
   display:"flex"
}
,
Dark:{
    display:'flex',
    width:400,
    height:850,
 backgroundColor:'rgba(29, 29, 29, 0.521)'
}
,
brand:{
    fontFamily:'Inter-SemiBoldItalic',
   marginTop:15,
   textAlign:'center',
    fontSize:50,
    color:'rgba(255, 255, 255, 0.932)'
}
,brandTitle:{
textAlign:'center',
fontSize:15,
color:'rgba(255, 255, 255, 0.932)',
letterSpacing:5
}
,
form :{
display : 'flex',
flexDirection :'column',
alignItems : 'center',
justifyContent: 'center',
width:'100%',
height :'100%',
marginTop:35




}

,inp:{

    width:'90%',
    height:50,
    backgroundColor:'white',
    padding:10,
    margin:10,
    borderRadius:10,
    textAlign:'center',
    color:'black',
     
      
  }
  ,
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
   
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  
  },
  button:{
      width:'90%',
    textAlign:'center',
    margin:10,
    padding:10,
    height:50,
    backgroundColor:'rgb(243, 149, 9)',
    borderRadius:10,
    textAlign:'center',
    color:'black'
   },
   keyb:{


    flex: 1
   }
});    
