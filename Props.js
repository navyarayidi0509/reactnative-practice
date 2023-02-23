import React, { Component } from 'react'
import { Text, View } from 'react-native'

const P = (props) => {
   return (
      <View>
         <Text>
            {props.myself}
         </Text>
      </View>
   )
}
export default P
//props using functional components
//we cannot update values in props
//in app.js we can write in 2ways

// export default class App extends React.Component {
//    render() {
//       return (
//          <View>
//             <P myself= 'hi hello this is navya iam learning react native and i already learnt the html and cssjs.i completed my bachelors in june 2022 i love singing and dancing.my hobby is learning new things and listening to music' />
//          </View>

//other way

// export default class App extends React.Component {
//    state = {
//       myself: 'hi hello this is navya iam learning react native and i already learnt the html and cssjs.i completed my bachelors in june 2022 i love singing and dancing.my hobby is learning new things and listening to music'
//    }
//    render() {
//       return (
//          <View>
//             <P myself = {this.state.myself} />
//          </View>