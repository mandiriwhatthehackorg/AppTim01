import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import HeaderMandiri from "../components/Header";

const markers = [
  {
    latLng: {
      latitude: -6.890842,
      longitude: 107.610391,
    },
    title: "Possible 1",
  },
  {
    latLng: {
      latitude: -6.889842,
      longitude: 107.608391,
    },
    title: "Possible 1",
  },
  {
    latLng: {
      latitude: -6.892842,
      longitude: 107.611391,
    },
    title: "Possible 1",
  }
];

class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderMandiri />
        <Tabs>
          <Tab
            heading="New Customer"
            activeTabStyle={{ backgroundColor: "#193783" }}
            tabStyle={{ backgroundColor: "#193783" }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}
              initialRegion={{
                latitude: -6.890842,
                longitude: 107.610391,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              {markers.map(marker => {
                return <Marker
                  coordinate={marker.latLng}
                  title={marker.title}
                  description={marker.description}
                />;
              })}
            </MapView>
          </Tab>
          <Tab
            heading="Hot Map"
            activeTabStyle={{ backgroundColor: "#193783" }}
            tabStyle={{ backgroundColor: "#193783" }}
          >
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}
              initialRegion={{
                latitude: -6.890842,
                longitude: 107.610391,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0121
              }}
            />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

export default MapScreen;
