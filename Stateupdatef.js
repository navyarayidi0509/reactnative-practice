import React from'react';
import {View,Text} from 'react-native';
const MyComponent = () => {
    const [name, setName] = useState('hi hello this is navya iam learning react native and i already learnt the html and cssjs.i completed my bachelors in june 2022 i love singing and dancing.my hobby is learning new things and listening to music');
    const handlePress = () => {
      setName('this was cahnged');
    };
    return (
      <View>
        <Text>{name}</Text>
        <Button title="Update Name" onPress={handlePress} />
      </View>
    );
  }
export default MyComponent