import React, { useState, useEffect } from 'react';
import { Text, View,Button } from 'react-native';

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(`Count is now ${count}`);
    setMessage(`Count is now ${count}`);
  }, [message]); 

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={{paddingTop:40}}>
      <Text>count is {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Text>{message}</Text>
    </View>
  );
}

// incorrect dependency
//to fix the dependency replace the message parameter with count