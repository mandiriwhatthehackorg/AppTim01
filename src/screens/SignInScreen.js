import React, { Component } from "react";
import { Text, Image } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  View
} from "native-base";
import { buttonText, screenWrapper, center } from "../styles/common";
import JWTStore from '../mobx/JWTStore';
import { observer } from 'mobx-react';

import MandiriLogo from "../../assets/images/logo-white.png";

const logoWrapper = {
  height: 60,
  paddingVertical: 80
};

const buttonStyles = {
  flex: 1,
  height: 80,
  marginTop: 25,
  marginBottom: 10
};

const signInButtonStyles = {
  ...buttonStyles,
  backgroundColor: "#FBD008"
};

@observer
class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  updateUsername = username => {
    this.setState({ username });
  };

  updatePassword = password => {
    this.setState({ password });
  };

  signIn = () => {
    JWTStore.addJWT('huyu123');
  }

  render() {
    return (
      <Container style={{ ...screenWrapper, ...center }}>
        <Image
          source={MandiriLogo}
          resizeMode={"contain"}
          style={logoWrapper}
        />
        <View style={{ flex: 1, center }}>
          <Form>
            <Item stackedLabel>
              <Label style={{ color: "#fff" }}>Username</Label>
              <Input
                style={{ color: "#fff" }}
                onChangeText={this.updateUsername}
                value={this.state.username}
              />
            </Item>
            <Item stackedLabel>
              <Label style={{ color: "#fff" }}>Password</Label>
              <Input
                style={{ color: "#fff" }}
                secureTextEntry={true}
                onChangeText={this.updatePassword}
                value={this.state.password}
              />
            </Item>
          </Form>

          <Button rounded style={{ ...signInButtonStyles, height: 50 }} onPress={this.signIn}>
            <Text style={buttonText}>Sign In</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default SignInScreen;
