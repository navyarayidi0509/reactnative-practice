import React from "react";
import {Text,View} from 'react-native';
export default class P extends React.Component{
    state={
        my:'hi hello this is navya iam learning react native and i already learnt the html and cssjs.i completed my bachelors in june 2022 i love singing and dancing.my hobby is learning new things and listening to music',
         myl:'this is about myself'   
    }
    render(){
        return (
        <View>
            <Text>{this.state.my},{this.state.myl}</Text>
            </View>
    );
    }
}
//state example using class component
//state is mutable where as props is immutable
//state can be updated