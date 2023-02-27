import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
const P = () => {
  const [text, setText] = useState('');
const onChangeText = (newText) => {
    setText(newText);
  };
return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter text here"
      />
    </View>
  );
};
export default P
const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor:'pink',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontWeight:'bold',
  },
});


