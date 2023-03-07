import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const P = () => {
  const [items, setItems] = useState(['item 1','item 2']);

  const addItem = () => {
    setItems([...items, ' new item']);
  };
return (
    <View style={{paddingTop:40}}>
      <Text>Items:</Text>
      {items.map((item) => (
        <Text>{item}</Text>
      ))}
      <Button title="Add item" onPress={addItem} />
    </View>
  );
};

export default P
