import React from "react";
import { StyleSheet,View,Text } from "react-native";
const P = (props)=>{
    return (
        <View>
            <Text style={styles.mystyle}>
                {props.mystyle}
                </Text>
        </View>
    )
}
export default P
const styles = StyleSheet.create({
    mystyle:{
        color : "red",
        textAlign : "center",
        fontSize : 30,
        fontWeight:"bold",
        marginTop:40,
    }
})