import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
                  <Text>{item.name}</Text>))
            }
         </View>
      )
   }
}
export default P