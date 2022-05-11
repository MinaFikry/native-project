import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './Test';
import Tow from './Tow';
import Login from './login';
import Sign from './sign';
import { Provider } from 'react-redux';
import { store } from './store/store';
import sign from './sign';


export default function App() {
  return (
  <Provider store={store}>
 <Test/>
 </Provider>
  );
}

