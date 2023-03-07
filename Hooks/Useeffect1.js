import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function P() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTitle=`clicked ${count} times`
  }, [count]);

  return (
    <View style={{paddingTop:40}}>
      <Button
        title={`Clicked ${count} times`}
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}

//we pass [count] as second argument in useeffect 
//to tell the react to re run the effect whenever the count is updated
//when we want to run conditionally then we use [count] parameter