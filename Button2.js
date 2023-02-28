import React from 'react'
import { Button,View,Text ,StyleSheet} from 'react-native'
const P = () => {
   const P1 = () => false
   return (
      <View style = {styles.container}>
        <Text style={styles.text}>
      <Button
      title = 'hi hello'
      color = 'red'
      />
      </Text>
   </View>
   )
} 
export default P
const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      paddingTop:30
   },
   text:{
    borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'green'
   }
})