import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
class P extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.javatpoint.com/react-native-webview' }}
        style={{ flex: 1 }}
      />
    );
  }
}
export default P
