import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
class P extends Component {
    state = {user: ''}
    updateUser = (user) => {
       this.setState({ user: user })
    }
    render() {
       return (
          <View>
             <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                <Picker.Item label = "navya" value = "navya" />
                <Picker.Item label = "chitti" value ="chitti" />
             </Picker>
             <Text style={styles.text}>{this.state.user}</Text>
          </View>
       )
    }
 }
 export default P
 const styles = StyleSheet.create({
    text: {
       fontSize: 30,
       alignSelf: 'center',
       color: 'red'
    }
 })