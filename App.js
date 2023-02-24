import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from './Style1'

export default class App extends React.Component {
   render() {
      return (
         <View>
            <P mystyle = 'hi hello navya!' />
         </View>
      );
   }
}