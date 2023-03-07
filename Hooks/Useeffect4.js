import React, { useState, useEffect } from 'react';
import { Text, View ,Button} from 'react-native';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now ${count}`);
    return () => {
      console.log('Component unmounted or count changed, cleaning up...');
    };
  }, [count]); 

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={{paddingTop:40}}>
      <Text> count is {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
}

// array with count as second argument
// Return a cleanup function