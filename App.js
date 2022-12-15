// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/
// Import React
import React, { useState, useEffect } from 'react';
// Import required components
import { SafeAreaView, Text, StyleSheet, View, PermissionsAndroid, Button } from 'react-native';
// Import Map and Marker
import MapView, { Callout, Marker, circle, Circle } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import { resolvePlugin } from '@babel/core';
const App = () => {

//Create promise used for asynchronus non-blocking queue ..overcome the callback method...three state in Promise pending,fulfilled,rejected 

   const p1 = val => new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(val+20)
    }, 2000);

   })
   // Rejection state
   const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
      reject("failure")
    }, 1000);
   })

//promise chaining call multiple .then 

    p1(10).then(x=>x+20).then(console.log).catch(console.log)

    //callBack when you using more callback function its look glimpse so introduced promises in ES6 
 
const f1 = (val,callback)=>{
  return callback(val+10)

}
const callback =(val)=>{
return val + 20

}
console.log(f1(10,callback))



  return (
    <View style={{ flex: 1 }}>
      <Text >{}</Text>
{/* <Button title='update' onPress={() => setnumber(number + 1)}></Button> */}
        
    </View>
  );

}


export default App;
