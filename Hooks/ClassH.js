import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class P extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
        <View style={{ paddingTop: 40 }}>
        <Button onPress={this.incrementCount} title={`Count: ${this.state.count}`} />
      </View>
    );
  }
}

export default P;

//class component using state
//counter updation using state
