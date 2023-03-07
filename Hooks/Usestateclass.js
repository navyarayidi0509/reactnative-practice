import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const P = () => {
  const [count, set] = useState(0);

  const incrementCount = () => {
    set(count + 1);
  };

  return (
    <View style={{ paddingTop: 40 }}>
      <Button onPress={incrementCount} title={`Count: ${count}`} />
    </View>
  );
};

export default P;

//functional component
//counter updation using hooks-usestate hook
//<Button onPress={incrementCount} title={`Count: ${count}`} />
//or we can write
//<Button onPress={()=>set(count+1)} title={`Count: ${count}`} /> without writing 
// const incrementCount = () => {
//   set(count + 1);
// };