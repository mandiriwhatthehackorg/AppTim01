import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { Header, Left, Body, Right } from "native-base";
import MandiriLogo from "../../assets/images/logo-white.png";

const miniLogo = {
  height: 30
};

const MandiriHeader = props => {
  return (
    <Header style={{ backgroundColor: '#193783' }}>
      <Left>
        {/* <Text>huyu</Text> */}
        <Image
          source={MandiriLogo}
          style={miniLogo}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </Left>
      <Body />
    </Header>
  );
};

export default MandiriHeader;
