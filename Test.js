import { StatusBar } from 'expo-status-bar';
import React, {Component,render} from 'react';
import { StyleSheet, Text, View,ScrollView ,Screen } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import One from './one';
import Tow from './Tow';
import Tre from './Tre';

const Tab = createBottomTabNavigator();



function Test(){

    return(

<NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={One} />
        <Tab.Screen name="screen" component={Tow} />
      </Tab.Navigator>
    </NavigationContainer>
   

    );
    
    
}




const styles = StyleSheet.create({
  
  });    



export default Test;