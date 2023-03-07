import React, { useState, useEffect } from 'react';
import { Text, View ,Button} from 'react-native';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
  },[]); 
  const incrementCount = () => {
    setCount(count + 1);
  };


  return (
    <View style={{paddingTop:40}}>
      <Text> value of count incremented is {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
}

// empty array as second argument
//above example tells about how to run useeffect hook only once