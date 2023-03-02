import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
class ExampleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:60,
  },
});
export default ExampleScreen;
