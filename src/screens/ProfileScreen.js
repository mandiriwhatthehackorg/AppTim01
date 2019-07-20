import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Right,
  Tab,
  Tabs,
  ScrollableTab
} from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { observer } from "mobx-react";

import Header from "../components/Header";
import profile from "../../assets/images/profile.png";
import levelDetail from "../../assets/images/level.png";
import JWTStore from "../mobx/JWTStore";

const ProfileSection = {
  paddingTop: 15,
  paddingHorizontal: 20,
  paddingBottom: 25,
  backgroundColor: "#193783"
};

const ProfilePicture = {
  marginRight: 15
};

const ProfileName = {
  color: "#fff",
  fontSize: 20
};

const ProfileBalance = {
  color: "#fff",
  fontSize: 30
};

const LevelSection = {
  paddingHorizontal: 20
};

const LevelText = {
  fontSize: 20,
  color: "#193783",
  fontWeight: "700",
  marginTop: 15
};

const screenWidth = Math.round(Dimensions.get("window").width * 0.8);

@observer
class ProfileScreen extends Component {
  signOut = () => {
    JWTStore.removeJWT();
  };

  render() {
    return (
      <Container>
        <Content>
        <Header />
          <View style={ProfileSection}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={profile}
                style={ProfilePicture}
                resizeMode="contain"
              />
              <View>
                <Text style={ProfileName}>Nadine Andine</Text>
                <Text style={ProfileBalance}>IDR 50.000.000</Text>
              </View>
            </View>
          </View>
          <View style={LevelSection}>
            <Text style={LevelText}>Level Agent</Text>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={levelDetail}
                    resizeMode="contain"
                    style={{ width: screenWidth, height: screenWidth }}
                  />
                </Body>
              </CardItem>
            </Card>
            <Card style={{ marginTop: 15 }}>
              <CardItem style={{ paddingVertical: 10 }}>
                <Text>Rewards</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
              <CardItem style={{ paddingVertical: 10 }}>
                <Text>Setting</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
              <CardItem style={{ paddingVertical: 10 }}>
                <Text>Tutorial</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
              <CardItem style={{ paddingVertical: 10 }}>
                <Text onPress={this.signOut}>Sign Out</Text>
                <Right>
                  <Icon onPress={this.signOut} name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
