import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const P = () => {
    const initial=0
  const [count, set] = useState(initial);
  const increment5 =()=>{
    for(let i=0;i<5;i++){
        set(prevcount=>prevcount+1)
    }
  }

  return (
    <View style={{ paddingTop: 40 }}>
        <Text>count:{count}</Text>
      <Button onPress={()=>set(initial)} title={`reset`} />
      <Button onPress={ () => set(count + 1)} title={`Increment`} />
      <Button onPress={ () => set(count - 1)} title={`Decrement`} />
      <Button onPress={increment5} title={`increment by  5`}  />
    </View>
  );
};

export default P;

//usestate hook example
//usestate with previous state
