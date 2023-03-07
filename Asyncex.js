import React, { Component } from 'react';
import { View, Text,Button, AsyncStorage } from 'react-native';

class P extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    try {
      const data = await AsyncStorage.getItem('key');
      if (data !== null) {
        this.setState({ data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async saveData(value) {
    try {
      await AsyncStorage.setItem('key', value);
      this.setState({ data: value });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.data}</Text>
        <Button title="Save Data" onPress={() => this.saveData('Hello, AsyncStorage!')} />
      </View>
    );
  }
}

export default P
