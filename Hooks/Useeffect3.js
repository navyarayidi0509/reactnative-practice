import React, { useState, useEffect } from 'react';
import { Text, View ,Button} from 'react-native';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count]); 

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

// array with count as second argument
//useeffect example2 in another way
//calling it more than once