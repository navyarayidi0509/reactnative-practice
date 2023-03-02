import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
class P extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false
    };
  }
toggleSwitch = (value) => {
    this.setState({switchValue: value})
  }
render() {
    return (
      <View style={{flex: 100, alignItems: 'center',justifyContent: 'center',paddingTop:40}}>
        <Text>Toggle Switch:</Text>
        <Switch
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}
export default P
