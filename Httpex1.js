import React, { Component } from 'react';
import { View, Text } from 'react-native';
class P extends Component {
  state = {
    data: null,
    error: null,
  };
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/postS/1')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => this.setState({ error }));
  }
render() {
    const { data, error } = this.state;
    if (error) {
      return <Text>{error.message}</Text>;
    }
    if (!data) {
      return <Text>Loading...................</Text>;
    }
    return (
      <View>
        <Text>{data.title}</Text>
        <Text>{data.body}</Text>
      </View>
    );
  }
}export default P
