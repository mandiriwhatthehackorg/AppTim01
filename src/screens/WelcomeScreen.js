import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base';
import MandiriLogo from '../../assets/images/logo-white.png';
import {
  screenWrapper,
  center,
  logoWrapper,
  signInButtonStyles,
  signUpButtonStyles,
  buttonText,
} from '../styles/common';

class WelcomeScreen extends Component {
  navigateToSignInScreen = () => {
    this.props.navigation.navigate('SignIn');
  }

  navigateToSignUpScreen = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={screenWrapper}>
        <View style={logoWrapper}>
          <Image source={MandiriLogo} resizeMode={"contain"} style={{ height: 80 }}/>
        </View>
        <View style={{ flex: 0.4 }}/>
        <View style={{ flex: 0.2, ...center }}>
          <Button bordered rounded style={signUpButtonStyles} onPress={this.navigateToSignUpScreen}>
            <Text style={buttonText}>Sign Up</Text>
          </Button>
          <Button rounded style={signInButtonStyles} onPress={this.navigateToSignInScreen}>
            <Text style={buttonText}>Sign In</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;