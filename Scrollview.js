import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
class P extends Component {
   state = {
      months: [
         {'month':'jan'},
         {'month':'feb'},
         {'month':'mar'},
         {'month':'april'},
         {'month':'may'},
         {'month':'june'},
         {'month':'july'},
         {'month':'aug'},
         {'month':'sep'},
         {'month':'oct'},
         {'month':'nov'},
         {'month':'dec'},
      ]
   }
   render() {
      return (
         <View>
            <ScrollView>
               {
                  this.state.months.map((item, index) => (
                     <View style = {styles.item}>
                        <Text>{item.month}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default P
const styles = StyleSheet.create ({
   item: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 5,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: 'pink'
   }
})