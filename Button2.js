import React from 'react'
import { Button,View,Text ,StyleSheet,TouchableOpacity} from 'react-native'
const P = () => {
   const P1 = () => false
   return (
      <View style = {styles.container}>
        <TouchableOpacity>
        <Text style={styles.text}>
      <Button
      title = 'hi hello'
      color = 'red'
      />
      </Text>
      </TouchableOpacity>
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