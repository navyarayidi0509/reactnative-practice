import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const TextExample = () => {
   return (
      <View style = {styles.container}>
         <Text style = {styles.text}>
            <Text style = {styles.capitalLetter}>h</Text>
            <Text>ii hello, navya.</Text>
            <Text>how are u?<Text style = {styles.wordBold}>hi fyn</Text> sree,how are u?</Text>
            </Text>
      </View>
   )
}
export default TextExample
const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
   text: {
      color: 'black',
   },
   capitalLetter: {
      color: 'green',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   }
})