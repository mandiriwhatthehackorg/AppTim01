import { Container, Content, Button } from "native-base";
import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { Item, Label, Input } from "native-base";
import { RNCamera } from "react-native-camera";

import Header from "../components/Header";
import Guideline from "../../assets/images/guideline.png";

import { signInButtonStyles, buttonText } from "../styles/common";

const section = {
  paddingHorizontal: 20,
  paddingTop: 10
};

const screenWidth = Math.round(Dimensions.get("window").width);

class NewAccountScreen extends Component {
  render() {
    return (
      <Container>
        <Content
          style={{
            backgroundColor: "#F0F0F0"
          }}
        >
          <Header />
          <View style={{ ...section, flex: 1 }}>
            <Item stackedLabel>
              <Label style={{ fontWeight: "600" }}>ID Type</Label>
              <Button block style={{ backgroundColor: "white" }}>
                <Text style={{ textAlign: "left" }}>
                  KTP (Resident ID Card)
                </Text>
              </Button>
            </Item>
            <Text style={{ fontWeight: "600", marginTop: 10 }}>
              Guideline KTP Photo
            </Text>
            <Image
              source={Guideline}
              style={{ width: screenWidth, height: screenWidth * 0.61734 }}
            />
          </View>
          <Button
            rounded
            style={signInButtonStyles}
            onPress={() => this.props.navigation.navigate("Camera")}
          >
            <Text style={buttonText}>Take a Photo</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default NewAccountScreen;
