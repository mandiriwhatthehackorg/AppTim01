import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base'
import customer from "../../assets/images/customer.jpg";

const NameStyle = {
  fontSize: 20
};

const CustomerCard = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        paddingVertical: 10,
        marginTop: 10,
        backgroundColor: "#fff"
      }}
    >
      <Image
        source={customer}
        resizeMode="contain"
        style={{ width: 80, height: 80, borderRadius: 10, flex: 0.3 }}
      />
      <View style={{ flex: 0.7, paddingVertical: 5 }}>
        <Text style={NameStyle}>{props.name}</Text>
        <Text>
          <Icon name="star" style={{ color: "#FEB601", fontSize: 16 }} />{" "}
          {props.star}, {props.day}{" "}
          day
        </Text>
        <Text>{props.address}</Text>
        <Text>{props.city}</Text>
      </View>
    </View>
  );
};

export default CustomerCard;
