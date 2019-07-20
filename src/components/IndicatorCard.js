import React, { Component } from "react";
import { View } from "react-native";
import { Card, CardItem, Body, Text } from "native-base";

const cardBodyStyle = {
  alignItems: "center"
};

const textHeader = {
  color: "#fff",
  fontSize: 15,
  textAlign: "center"
};

const textValueWrapper = {
  color: "#fff",
  fontSize: 40,
  textAlign: "center",
};

const textValue = {
  color: "#fff",
  fontSize: 40,
};

const card = {
  borderRadius: 10,
  marginVertical: 5,
  marginHorizontal: 10,
  flex: 0.5,
  paddingVertical: 15,
  paddingHorizontal: 10,
  backgroundColor: "#193783",
}

class IndicatorCard extends Component {
  render() {
    return (
      <View style={card}>
        <Text style={textHeader}>{this.props.title1}</Text>
        <Text style={textHeader}>{this.props.title2}</Text>
        <Text style={textValueWrapper}>
          <Text style={textValue}>{this.props.value}</Text>
          <Text style={{ ...textValue, fontSize: 25 }}>/10</Text>
        </Text>
      </View>
    );
  }
}

export default IndicatorCard;
