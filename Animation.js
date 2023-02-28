import React, { Component } from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'
class Animations extends Component {
   componentWillMount = () => {
      this.animatedWidth = new Animated.Value(5)
      this.animatedHeight = new Animated.Value(80)
   }
   animatedBox = () => {
      Animated.timing(this.animatedWidth, {
         toValue: 20,
         duration: 1000
      }).start()
      Animated.timing(this.animatedHeight, {
         toValue: 500,
         duration: 500
      }).start()
   }
   render() {
      const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
      )
   }
}
export default Animations
const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'green',
      width: 50,
      height: 100
   }
})