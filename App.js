import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import P from './Props'

export default class App extends React.Component {
   state = {
      myself: 'hi hello this is navya iam learning react native and i already learnt the html and cssjs.i completed my bachelors in june 2022 i love singing and dancing.my hobby is learning new things and listening to music'
   }
   render() {
      return (
         <View>
            <P myself = {this.state.myself} />
         </View>
      );
   }
}