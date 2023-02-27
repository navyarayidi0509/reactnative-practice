import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class P extends Component{
    state={
        username:'',
        password:''
    }
    username = (text) =>{
        this.setState({username:text})
    }
    password = (text) =>{
        this.setState({password:text})
    }
    login = (username, password) => {
        alert('username: ' + username + ' password: ' + password)
     }
    render(){
        return(
            <View style ={styles.container}>
                <TextInput style={styles.input}
                placeholder = "username"
                placeholderTextColor = "black"
                onChangeText = {this.username}/>
                <TextInput style={styles.input}
                placeholder = "password"
                placeholderTextColor = "black"
                onChangeText = {this.password}/>
                <TouchableOpacity
               style = {styles.button}
               onPress = {
                  () => this.login(this.state.username, this.state.password)
               }>
               <Text style = {styles.buttontext}> Login </Text>
            </TouchableOpacity>
            </View>
        )
    }
}
export default P
const styles = StyleSheet.create({
    container:{
        paddingTop:20
    },
    input:{
      margin: 15,
      height: 40,
      borderColor: 'black',
      backgroundColor:'#D3D3D3',
      borderWidth: 1
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 15,
        height: 40,
    },
    buttontext:{
        color:'white'
    }
})