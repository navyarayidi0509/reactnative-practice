import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from './Style'

export default class App extends React.Component {
   render() {
      return (
         <View>
            <P mystyle = 'hi hello navya!' />
            <P mystate = 'how are you?' />
         </View>
      );
   }
}