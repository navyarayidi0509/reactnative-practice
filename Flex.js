import React, { Component } from 'react'
import {Text, View, StyleSheet } from 'react-native'
const P = (props) => {
   return (
      <View style = {styles.container}>
         <Text style = {styles.firstbox}>
            {props.firstbox}</Text>
         <Text style = {styles.secondbox}>{props.secondbox}</Text>
         <Text style = {styles.thirdbox}>{props.thirdbox}</Text>
      </View>
   )
}
export default P
const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 600
   },
   firstbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red',
      color:'black',
      fontweight:'bold',
      fontSize:30
   },
   secondbox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      color:'black',
      fontweight:'bold'
   },
   thirdbox: {
      width: 100,
      height: 100,
      backgroundColor: 'green',
      color:'black',
      fontweight:'bold'
   },
})