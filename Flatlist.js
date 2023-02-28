import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
const P = () => {
  const [data] = useState([
{  title: '1' },{  title: '2' },{ title: '3' },{  title: '4' },{ title: '5' },{  title: '6' },{  title: '7' },{ title: '8' },{  title: '9' },
{ title: '10' },{  title: '11' },{  title: '12' },{ title: '13' },{  title: '14' },{ title: '15' },{  title: '16' },{  title: '17' },{ title: '18' },
{  title: '19' },{ title: '20' },
  ]);
const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item.title}</Text>
      </View>
    );
  };
return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  );
};
export default P
