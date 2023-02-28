import React from 'react'
import { Button,View,Text ,StyleSheet} from 'react-native'
const P = () => {
   const P1 = () => false
   return (
      <View style = {styles.container}>
      <Button
      title = 'hi hello'
      />
   </View>
   )
}
export default P
const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      paddingTop:30
   },
})