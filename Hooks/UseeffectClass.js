import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class P extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState){
    setTitle=`clicked ${this.state.count} times`
  }

  render(){
    return (
      <View style={{paddingTop:40}}>
        <Button
          title={`Clicked ${this.state.count} times`}
          onPress={() => this.setState({count: this.state.count + 1})}
        />
      </View>
    )
  }
}
