import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => {
  const [person, setPerson] = useState({ name: 'navya', age: 23 });

  const handleNameChange = () => {
    setPerson({ ...person,name:'sree', age: '22' });
  };

  return (
    <View style={{paddingTop:40}}>
      <Text>{person.name} is {person.age} years old</Text>
      <Button title="Change name" onPress={handleNameChange} />
    </View>
  );
};

export default MyComponent;

//usestate with object 
//another example in a simpler way