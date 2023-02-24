import React, { Component } from 'react'
import { Text, View,  StyleSheet } from 'react-native'
class P extends Component {
   state = {
      names: [
        {name: 'navya' },
        { name: 'sree' },
        {name: 'mom' },
        { name: 'sree' },
      ]
   }
   render() {
      return (
         <View>{
this.state.names.map((item) => (
                  <Text style = {styles.text}>
                        {item.name}
                     </Text>))
            }
         </View>
      )
   }
}
export default P
const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
      justifyContent: 'center',
      
   },
   text: {
      color:'blue',
      textAlign:'center'
   }
})