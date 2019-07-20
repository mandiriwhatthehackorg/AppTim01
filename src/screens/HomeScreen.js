import React, { Component } from "react";
import { Container, Content } from "native-base";
import { Text, View, Image, TouchableHighlight } from "react-native";

import Header from "../components/Header";
import IndicatorCard from "../components/IndicatorCard";
import profile from "../../assets/images/profile.png";
import mapPreview from "../../assets/images/maps.png";

const contentWrapper = {
  backgroundColor: "#F0F0F0",
  paddingBottom: 50,
};

const profileSection = {
  backgroundColor: "#193783",
  width: "100%",
  alignItems: "center",
  paddingHorizontal: 40
};

const profilePicture = {
  height: 100
};

const profileName = {
  fontSize: 22,
  color: "#fff"
};

const gradeWrapper = {
  flexDirection: "row",
  alignItems: "center"
};

const gradeWrapperMoney = {
  flex: 0.7,
  fontSize: 35,
  color: "#fff"
};

const gradeWrapperMoneyCurrency = {
  fontSize: 20
};

const gradeWrapperLevel = {
  flex: 0.3,
  alignItems: "center",
  flexDirection: "column"
};

const gradeWrapperLevelText = {
  color: "#fff",
  fontSize: 15
};
const gradeWrapperLevelValue = {
  backgroundColor: "#FBD008",
  width: 30,
  height: 30,
  fontSize: 20,
  borderRadius: 500,
  textAlign: "center"
};

const cardTitle = {
  color: "#000",
  fontSize: 20,
  marginBottom: 10
};

const mtdCard = {
  flexDirection: "row",
  borderRadius: 10,
  backgroundColor: "#fff",
  paddingHorizontal: 10,
  paddingVertical: 10,
  marginBottom: 20
};

const mtdCardItem = {
  flex: 0.3333,
  alignItems: "center"
};

const mtdCardTitle = {
  fontSize: 15
};

const mtdCardBody = {
  marginTop: 3,
  marginBottom: 2,
  fontSize: 25
};

class HomeScreen extends Component {
  navigateToMap = () => {
    this.props.navigation.navigate("Map");
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={contentWrapper}>
        <Header />
          <View style={profileSection}>
            <Image
              source={profile}
              style={profilePicture}
              resizeMode="contain"
            />
            <Text style={profileName}>Nadine Andine</Text>
            <View style={gradeWrapper}>
              <Text style={gradeWrapperMoney}>
                <Text style={gradeWrapperMoneyCurrency}>IDR </Text>
                <Text>50.000.000</Text>
              </Text>
              <View style={gradeWrapperLevel}>
                <Text style={gradeWrapperLevelText}>Level</Text>
                <Text style={gradeWrapperLevelValue}>A</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <IndicatorCard title1="Acquisition" title2="Progress" value="8" />
              <IndicatorCard title1="Collection" title2="Target" value="5" />
            </View>
          </View>
          <View>
            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
              <Text style={cardTitle}>MTD Summary</Text>
              <View style={mtdCard}>
                <View style={mtdCardItem}>
                  <Text style={mtdCardTitle}>Amount</Text>
                  <Text style={mtdCardBody}>IDR 150</Text>
                  <Text>mio</Text>
                </View>
                <View style={mtdCardItem}>
                  <Text style={mtdCardTitle}>Amount</Text>
                  <Text style={mtdCardBody}>1.287</Text>
                  <Text>transactions</Text>
                </View>
                <View style={mtdCardItem}>
                  <Text style={mtdCardTitle}>User</Text>
                  <Text style={mtdCardBody}>150</Text>
                  <Text>customers</Text>
                </View>
              </View>
              <Text style={cardTitle} onPress={this.navigateToMap}>
                Find Potential Customer
              </Text>
              <View
                style={{
                  width: null,
                  flex: 1,
                  padding: 10,
                  paddingBottom: 0,
                  alignItems: "center"
                }}
              >
                <TouchableHighlight onPress={this.navigateToMap}>
                  <Image source={mapPreview} resizeMode="contain" />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
