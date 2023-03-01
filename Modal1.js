import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
class P extends Component {
  state = {
    visible: false,
  };
showModal = () => {
    this.setState({ visible: true });
  };
hideModal = () => {
    this.setState({ visible: false });
  };
render() {
    return (
      <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={this.showModal}>
          <Text style = {{paddingTop:45}}>Show Modal</Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.visible}
          onRequestClose={this.hideModal}
          animationType="slide"
        >
          <View style={{alignItems:'center'}}>
            <Text>This is a modal</Text>
            <TouchableOpacity onPress={this.hideModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
export default P
