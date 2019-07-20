import React, { Component } from "react";
import { Container, Content } from "native-base";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

import Header from "../components/Header";
import bankingIcons from "../../assets/images/BankingScreen.png";

const screenWidth = Math.round(Dimensions.get("window").width);

class BankingScreen extends Component {
  navigateToNewAccount = () => {
    this.props.navigation.navigate("NewAccount");
  };

  render() {
    return (
      <Container>
        <Header />
        <Content
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={this.navigateToNewAccount}>
            <Image
              source={bankingIcons}
              resizeMode="contain"
              style={{ width: screenWidth, height: 2.5763239 * screenWidth }}
            />
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default BankingScreen;
