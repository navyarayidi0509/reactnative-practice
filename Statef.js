import React from'react';
import {View,Text} from 'react-native';
export default function P(){
    state={
        my:'hihello thi is navya',
        my1:'my id is 5',
        my2:'my goal is to become a frontend developer',
        my3:'so learning react',
        my4:'thank you'
    }
    return (
        <View>
            <Text>
                {state.my},{state.my1},{state.my2},{state.my3},{state.my4},
            </Text>
        </View>
    )
}
//state example using functional component
//state is mutable where as props is immutable
//state can be updated