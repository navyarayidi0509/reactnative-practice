import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const P = () => {
  const [name, setName] = useState({ firstname: '', lastname: '' });

  return (
    <View>
      <TextInput style={{paddingTop:40}}
        value={name.firstname}
        onChangeText={value => setName({...name, firstname: value})}
        placeholder="Enter your first name"
      />
      <TextInput style={{paddingTop:10}}
        value={name.lastname}
        onChangeText={value => setName({...name, lastname: value})}
        placeholder="Enter your last name"
      />
      <Text >Your name is {name.firstname} {name.lastname}</Text>
    </View>
  );
};

export default P;

//usestate hook example
//usestate with object
