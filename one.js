
import React, {Component,render, useState} from 'react';
import { StyleSheet, Text, View,ScrollView, TextInput,Button, Pressable ,Image } from 'react-native';
import Tow from './Tow';
import Icon from 'react-native-vector-icons/FontAwesome';


function One(navigation) {

const [product,setProduct]=useState([
{key:1,prandName:'Nodilz',descripe:'shrimp in crispy batter ,spice and sweet,potatos,oins rings,flying fishroe,shrimp in crispy batter',price:'100 LE',productImage:require('./media/clbgxv4i1ka3ro1cf7li.jpeg')},
{key:2,prandName:'chicken',descripe:'shrimp in crispy batter ,spice and sweet,potatos,oins rings,flying fishroe,shrimp in crispy batter',price:'100 LE',productImage:require('./media/53683545.jpeg')},
{key:3,prandName:'fish',descripe:'shrimp in crispy batter ,spice and sweet,potatos,oins rings,flying fishroe,shrimp in crispy batter',price:'100 LE',productImage:require('./media/6ad5fdi.jpg')},
{key:4,prandName:'kushari',descripe:'shrimp in crispy batter ,spice and sweet,potatos,oins rings,flying fishroe,shrimp in crispy batter',price:'100 LE',productImage:require('./media/kushari.jpg')},


])
return (
  <ScrollView 
  
horizontal={false}
>

 <View
 style={styles.container}>
  <View   style={styles.cooking}>
  <View style={styles.moo}
>
<Image
        style={styles.tinyLogo}
        source={require('./media/food.png')}
      />


</View>
<View 
style={styles.con}

>
<Text style={styles.coo} >Home COKING ?</Text>
<Pressable
 onPress={() => Linking.openURL()}
style={styles.Poo}

><Icon name="chevron-right" size={20} color="#f36d6d" /></Pressable>

</View>

</View>

  <View


style={styles.productContainer}>
   


    <View style={{
    width:'50%',
    padding:5


  }}>
<View style={styles.product}>
  
<Image
        style={{width:250,
          height: 150}}
        source={require('./media/6f6f75d15d35474002446c2c550ed0db.png')}
  
  />
  <View  style={styles.productStyle}>
  <Text
    style={{fontSize:20,
    color:'white',
    }}>
    pasta {"\n"}
    30 le
  </Text>
 < Pressable
 onPress={() => Linking.openURL()}
style={{margin:10,
  padding:5,
  width:30,
  height:30,
  borderRadius: 100,
  backgroundColor :'white',
  alignItems:'center',
  left:10
}}

><Icon name="plus" size={20} color="#f36d6d" /></Pressable>
<Text style={{
  color:"white",
  
  

}
}></Text>
</View>


  </View>

</View>
<View style={{
    width:'50%',
    padding:5


  }}>
<View style={styles.product}>
  
<Image
        style={{width:250,
          height: 150}}
        source={require('./media/6f6f75d15d35474002446c2c550ed0db.png')}
  
  />
  <View  style={styles.productStyle}>
  <Text
    style={{fontSize:20,
    color:'white',
    }}>
    pasta {"\n"}
    30 le
  </Text>
 < Pressable
 onPress={() => Linking.openURL()}
style={{margin:10,
  padding:5,
  width:30,
  height:30,
  borderRadius: 100,
  backgroundColor :'white',
  alignItems:'center',
  left:10
}}

><Icon name="plus" size={20} color="#f36d6d" /></Pressable>
<Text style={{
  color:"white",
  
  

}
}></Text>
</View>


  </View>

</View>

<View style={{
    width:'50%',
    padding:5



  }}>
<View style={styles.product}>
  
<Image
        style={{width:250,
          height: 150}}
        source={require('./media/6f6f75d15d35474002446c2c550ed0db.png')}
  
  />
  <View  style={styles.productStyle}>
  <Text
    style={{fontSize:20,
    color:'white',
    }}>
    pasta {"\n"}
    30 le
  </Text>
 < Pressable
 onPress={() => Linking.openURL()}
style={{margin:10,
  padding:5,
  width:30,
  height:30,
  borderRadius: 100,
  backgroundColor :'white',
  alignItems:'center',
  left:10
}}

><Icon name="plus" size={20} color="#f36d6d" /></Pressable>
<Text style={{
  color:"white",
  
  

}
}></Text>
</View>


  </View>

</View>
<View style={{
    width:'50%',
    padding:5



  }}>
<View style={styles.product}>
  
<Image
        style={{width:250,
          height: 150}}
        source={require('./media/6f6f75d15d35474002446c2c550ed0db.png')}
  
  />
  <View  style={styles.productStyle}>
  <Text
    style={{fontSize:20,
    color:'white',
    }}>
    pasta {"\n"}
    30 le
  </Text>
 < Pressable
 onPress={() => Linking.openURL()}
style={{margin:10,
  padding:5,
  width:30,
  height:30,
  borderRadius: 100,
  backgroundColor :'white',
  alignItems:'center',
  left:10
}}

><Icon name="plus" size={20} color="#f36d6d" /></Pressable>
<Text style={{
  color:"white",
  
  

}
}></Text>
</View>


  </View>

</View>

</View>

  


<View 


>
  <Text
  style={{
   fontSize:25,
   color:'black',
   fontWeight :'bold',
 paddingBottom:20,
 paddingTop:20

    
    }}
  
  >

popular and new

  </Text>
{product.map(

  (e)=>{

return(

<View style={styles.productShift}>
<View style={styles.productDes}>
<Text

style={{
  color:'white',
fontSize :20,

}}

>{e.prandName}</Text>
<Text
style={{
  color:'rgba(255, 255, 255, 0.884)',
fontSize :12,



}}


>{e.descripe} </Text>

<Text style={{
  top:10,
  color:'rgba(255, 255, 255, 0.884)',
fontSize :15,



}}

>

{e.price}
</Text>
< Pressable
 onPress={() => Linking.openURL()}
style={{
padding:5,
width:30,
height:30,
borderRadius: 100,
backgroundColor :'white',
alignItems:'center',
bottom:15,

}}

><Icon name="plus" size={20} color="#f36d6d" /></Pressable>
</View>
<Image
        style={{width:'40%',
          height: '100%',
        
        }}
        source={e.productImage}
  
  />






</View>





) }

)}




</View>
 

</View>



</ScrollView>
    
);

  
}


const styles = StyleSheet.create({
  container :{
display : 'flex',
justifyContent : 'space-between',
alignItems : 'center',
width: '100%',
height: '100%',
padding:10,


  }
  ,
cooking:{
display:'flex',
flexDirection:'row',
padding:5,
width : '95%',
height :180,
backgroundColor:'#f35c5c',
marginTop : 30,
borderRadius:30




}
,con:{
  display:'flex',
  width :'50%',
  alignItems:'center',
 
},


coo:{
  fontWeight :'bold',
fontSize:30,
color :'white',
margin:10

}
,
Poo :{
margin:10,
padding:5,
width:30,
height:30,
borderRadius: 100,
backgroundColor :'white',
alignItems:'center',
left:50,


},
moo:{
  width :'50%',
 
},
tinyLogo :{
  width: 180,
  height: 180,

},
productContainer:{
display:'flex',
flexDirection:'row',
flexWrap :'wrap',
width:'100%',






},

product:{

  marginTop:30,
  width :"95%",
  height :210,
  backgroundColor :'#f35c5c',
  borderRadius :20
  ,
  alignItems:'center',
  overflow:'hidden'

},
productStyle:{
  display :'flex',
  flexDirection:'row-reverse',
  justifyContent:'space-between'
 

},
productShift:{
  display:'flex',
  flexDirection :'row',
width:'95%',
height :150,
backgroundColor:'#f35c5c',
borderRadius:20,
marginBottom :20,
overflow: 'hidden'



},
productDes:{
width:'60%',
padding:15



}

});    





export default One ;