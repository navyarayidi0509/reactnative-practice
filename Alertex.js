import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native'
const P = () => {
   const showAlert = () =>{
      Alert.alert('Alert worked.....')
   }
   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text>Alert</Text>
      </TouchableOpacity>
   )
}
export default P
const styles = StyleSheet.create ({
   button: {
      backgroundColor: 'blue',
      width: 120,
      borderRadius: 80,
      alignItems: 'center',
      marginTop: 100,
      justifyContent:'center'
   }
})