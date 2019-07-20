import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class SuccessScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Success</Text>
        <Button title="Proceed" onPress={() => this.props.navigation.navigate("Banking")}/>
      </View>
    );
  }
}

export default SuccessScreen;
