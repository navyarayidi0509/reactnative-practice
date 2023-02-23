import React from "react";
import {Text,View} from 'react-native';
export default class MyComponent extends React.Component{
    state={
    my:'hi hello this is navya iam learning react native and i already learnt the html and cssjs.i completed my bachelors in june 2022 i love singing and dancing.my hobby is learning new things and listening to music'
    }
    update = ()=>this.setState({my:'this was chnaged'}) 
    render(){
        return (
            <View>
                <Text onPress = {this.update}>
               {this.state.my}
                </Text>
            </View>
        )
    }
}
//updating state using class component
//we use hooks in functional components to update state